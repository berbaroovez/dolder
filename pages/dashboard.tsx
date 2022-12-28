import { useEffect, useState } from "react";
import CourseForm from "../components/CourseForm";
import FileExplorer from "../components/FileExplorer";
import FileUploaded from "../components/FileUploader";
import { getCourses, getFiles } from "../tools/services";
import { useAuth } from "../tools/useAuth";
import { file } from "../types/";
import { Database } from "../lib/database.types";
import Card from "../components/CourseCard";
import FileExplorerTable from "../components/TestTable";
import InfoBar from "../components/Shared/InfoBar";
import { Course } from "../types/supabase";

interface File {
  name: string;
  date: string;
  type: string;
  size: string | number;
}

const Dashboard = () => {
  const { user, signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState<Course[] | null>(null);
  const [fonts, setFonts] = useState<file[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  useEffect(() => {
    console.log("Send");
    const getBucket = async () => {
      if (user) {
        setLoading(true);
        // const response = await getFiles(user.id);
        // console.log(response);
        // setFonts(response);
        // setLoading(false);

        const courseList = await getCourses(user.id);
        setCourses(courseList);

        // const files = response.map((file) => {
        //   return {
        //     name: file.name,
        //     date: file.created_at,
        //     type: file.type,
        //     size: "200mb",
        //   };
        // });
        // setFiles(files);
      }
    };

    getBucket();
  }, [user]);

  //   useEffect(() => {
  //     console.log(fonts);
  //   }, [fonts]);

  return (
    <div className="grid m-auto w-[calc(1200px+calc(2*24px))] pl-6 pr-6  gap-8 mt-4">
      {/* {fonts && <FileExplorer files={fonts} />} */}

      <div className="flex flex-row items-stretch justify-start gap-2">
        <div className="w-full bg-slate-200  border-slate-400 border-2 rounded-md py-2 px-3">
          Search "just for display"
        </div>
        {/* <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md w-32">
          Add...
        </button> */}
        <CourseForm />
      </div>
      <div className="grid gap-6 grid-cols-[repeat(3,minmax(300px,1fr))]">
        {courses &&
          courses.map((course) => {
            return <Card course={course} key={course.id} />;
          })}
      </div>
      {/* <FileUploaded /> */}

      {/* <FileExplorerTable files={files} /> */}
      {/* <InfoBar /> */}
    </div>
  );
};

export default Dashboard;
