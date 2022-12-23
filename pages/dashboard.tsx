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
        const response = await getFiles(user.id);
        console.log(response);
        setFonts(response);
        setLoading(false);

        const courseList = await getCourses();
        setCourses(courseList);

        const files = response.map((file) => {
          return {
            name: file.name,
            date: file.created_at,
            type: file.type,
            size: "200mb",
          };
        });
        setFiles(files);
      }
    };

    getBucket();
  }, [user]);

  //   useEffect(() => {
  //     console.log(fonts);
  //   }, [fonts]);

  return (
    <div className="grid">
      {/* {fonts && <FileExplorer files={fonts} />} */}
      <div className="w-96">
        <CourseForm />
      </div>
      <div className="flex  flex-wrap gap-4 w-3/4">
        {courses &&
          courses.map((course) => {
            return <Card course={course} key={course.id} />;
          })}
      </div>
      {/* <FileUploaded /> */}

      {/* <FileExplorerTable files={files} /> */}
      <InfoBar />
    </div>
  );
};

export default Dashboard;
