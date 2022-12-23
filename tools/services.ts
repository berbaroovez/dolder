import { file } from "../types";
import { Course } from "../types/supabase";

import { supabase } from "./supabase";

const getFiles = async (user_id: string) => {
  const temp_font_array: file[] = [];

  const { data, error } = await supabase.storage
    .from("junkpile")
    .list(user_id, {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (data) {
    // console.log("Data", data);
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
      // console.log("Font DAta", font_data);

      if (font_data) {
        // console.log(font_data);
        const fontNameMinuesExtenstion = fontName.split(".")[0];
        const fontExtension = fontName.split(".")[1];
        const fileType = whatTypeOfFile(fontName);
        temp_font_array.push({
          name: fontNameMinuesExtenstion,
          blob: font_data,
          type: fileType,
          created_at: data[i].created_at,
          id: data[i].id,
          extension: fontExtension,
        });
      }
    }
  }

  return temp_font_array;
};

const getFile = async (id: string) => {
  var tempFile: file;
  const { data, error } = await supabase.storage
    .from("junkpile")
    .list("13253fd6-664b-4036-82a7-07b3aa634995", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (data) {
    // console.log("Data", data);
    for (let i = 0; i < data.length; i++) {
      const fontName = data[i].name;
      // if (
      //   fontName.includes(".otf") ||
      //   fontName.includes(".ttf") ||
      //   fontName.includes(".woff")
      // ) {
      const { data: font_data, error } = await supabase.storage
        .from("junkpile")
        .download(`13253fd6-664b-4036-82a7-07b3aa634995/${fontName}`);
      // console.log("Font DAta", font_data);

      if (font_data) {
        console.log(font_data);
        const fontNameMinuesExtenstion = fontName.split(".")[0];
        const fontExtension = fontName.split(".")[1];
        const fileType = whatTypeOfFile(fontName);
        tempFile = {
          name: fontNameMinuesExtenstion,
          blob: font_data,
          type: fileType,
          created_at: data[i].created_at,
          id: data[i].id,
          extension: fontExtension,
        };

        return tempFile;
      }
    }
  }
};

const whatTypeOfFile = (fileName: string) => {
  if (
    fileName.includes(".otf") ||
    fileName.includes(".ttf") ||
    fileName.includes(".woff")
  ) {
    return "FONT";
  } else {
    return "MISC";
  }
};

const addCourse = async (course: Course) => {
  const { data, error }  = await supabase.from("courses").insert(course);

  console.log(data)
  console.log(error)

};

const getCourses = async () => {
  const { data, error } = await supabase
    .from("courses")
    .select("*");



  return data;
};

export { getFiles, getFile, addCourse, getCourses };
