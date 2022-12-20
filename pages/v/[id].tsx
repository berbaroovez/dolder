import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FontViewer from "../../components/fontviewer";
import { getFile } from "../../tools/services";
import { file } from "../../types";

const FileViewer = () => {
  const router = useRouter();
  const [fileInfo, setFileInfo] = useState<file | null>(null);
  const { id } = router.query;

  useEffect(() => {
    const test = async () => {
      if (typeof id === "string") {
        const temp = await getFile(id);
        if (temp) {
          console.log(temp);
          setFileInfo(temp);
        }
      }
    };
    test();
  }, [id]);

  if (fileInfo === null) {
    return <div>File Not Found</div>;
  } else {
    if (fileInfo.type === "FONT") {
      return <FontViewer font={fileInfo} />;
    }
  }
};

export default FileViewer;
