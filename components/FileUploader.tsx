import { ChangeEvent, useRef, useState } from "react";

const FileUploader = () => {
  const fileInput = useRef(null);
  const [files, SetFiles] = useState<File[] | null>(null);

  //   const handleSubmit = (e:ChangeEvent<HTMLInputElement>) =>{
  //     fileInput = e.target.files;
  //   }
  return (
    <div className="dark:bg-gray-700">
      {/* <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        htmlFor="multiple_files"
      >
        Upload multiple files
      </label>
      <input
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="multiple_files"
        type="file"
        multiple={true}
      /> */}

      <input
        type="file"
        multiple
        // ref={fileInput}
        onChange={(e) => {
          var temp = e.target.files;
          var tempArray: File[] = [];
          if (temp) {
            Array.from(temp).forEach((file) => {
              tempArray.push(file);
            });

            SetFiles(tempArray);
          }
        }}
      />
      {/* <h1>Length :{fileInput}</h1> */}

      <button
        onClick={() => {
          console.log("useRef", files);
        }}
      >
        Button
      </button>

      <div>
        <ul className=" ">
          {files ? (
            files.map((file) => (
              <li key={file.size + file.name}>{file.name}</li>
            ))
          ) : (
            <div></div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FileUploader;
