import { load, parse } from "opentype.js";

import { useEffect, useRef } from "react";
import { font } from "../types/font_types";

const FontViewer = (props: { font: font }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getFont = async (font: Blob) => {
    const font_array_buffer = await new Response(font).arrayBuffer();

    const font_data = await parse(font_array_buffer);

    return font_data;
  };

  const canvas = canvasRef.current;

  const canvas_function = async () => {
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        const font = await getFont(props.font.blob);
        font.draw(context, props.font.name, 0, 45, 62, {
          kerning: true,
        });
      }
    }
    enableHighDPICanvas();
  };

  canvas_function();

  // useEffect(() => {

  //   canvas_function();
  //   //Our first draw
  // }, []);

  function enableHighDPICanvas() {
    console.log("enabled");
    const canvas = canvasRef.current;
    var pixelRatio = window.devicePixelRatio || 1;
    // console.log("pixelratio", pixelRatio);
    // var oldWidth = canvas.width;
    // console.log("oldWidth", oldWidth);
    // var oldHeight = canvas.height;
    // console.log("oldHeight", oldHeight);
    if (pixelRatio === 1) return;

    console.log("enabled passed return");
    if (canvas) {
      // var oldWidth = canvas.width;
      // console.log("oldWidth", oldWidth);
      // var oldHeight = canvas.height;
      // console.log("oldHeight", oldHeight);
      // canvas.width = oldWidth * pixelRatio;
      // canvas.height = oldHeight * pixelRatio;
      // canvas.style.width = `${oldWidth}px`;
      // canvas.style.height = `${oldHeight}px`;

      var context = canvas.getContext("2d");
      if (context) {
        context.scale(pixelRatio, pixelRatio);
      }
    }
  }

  return (
    <div className="w-screen mb-4">
      <canvas
        id="canvas"
        width="500"
        height="50"
        ref={canvasRef}
        style={{
          backgroundColor: "white",
          border: "1px solid #ddd",
          boxShadow: "1px 0 5px rgba(0, 0, 0, 0.2)",
        }}
      />
    </div>
  );
};

export default FontViewer;
