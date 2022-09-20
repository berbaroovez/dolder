import { font } from "../types/font_types";
import { supabase } from "./supabase";

const getFiles = async (user_id: string) => {
  const temp_font_array: font[] = [];

  const { data, error } = await supabase.storage
    .from("junkpile")
    .list(user_id, {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (data) {
    console.log("Data", data);
    for (let i = 0; i < data.length; i++) {
      const fontName = data[i].name;
      // if (
      //   fontName.includes(".otf") ||
      //   fontName.includes(".ttf") ||
      //   fontName.includes(".woff")
      // ) {
      const { data: font_data, error } = await supabase.storage
        .from("junkpile")
        .download(`${user_id}/${fontName}`);

      if (font_data) {
        console.log(font_data);
        const fontNameMinuesExtenstion = fontName.split(".")[0];
        temp_font_array.push({
          name: fontNameMinuesExtenstion,
          blob: font_data,
        });
      }
    }
  }

  return temp_font_array;
};

export { getFiles };
