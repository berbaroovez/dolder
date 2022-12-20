import { useState } from "react";
import { humanFileSize } from "../tools/functions";
import { file } from "../types/";
import FontViewer from "./fontviewer";

interface FileExplorerProps {
  files: file[];
}

const FileExplorer = ({ files }: FileExplorerProps) => {
  const [selectFileIndex, setSelectedFile] = useState<null | number>(null);

  const handleClick = (index: number) => {
    setSelectedFile(index);
  };

  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              File
            </th>
            <th scope="col" className="py-3 px-6">
              Extension
            </th>
            <th scope="col" className="py-3 px-6">
              Upload Date
            </th>
            <th scope="col" className="py-3 px-6">
              Size
            </th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr
              onClick={() => {
                handleClick(index);
              }}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-700 cursor-pointer "
              key={file.name}
            >
              <th
                scope="row"
                className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {file.name}
              </th>
              <td className="py-2 px-6">{file.extension}</td>
              <td className="py-2 px-6">
                {new Date(file.created_at).toLocaleDateString()}
              </td>
              <td className="py-2 px-6">{humanFileSize(file.blob.size)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>{selectFileIndex}</h3>
      {selectFileIndex && <FontViewer font={files[selectFileIndex]} />}
    </div>
  );
};

export default FileExplorer;
