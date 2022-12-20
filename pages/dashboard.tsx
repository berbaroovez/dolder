import { useEffect, useState } from "react";
import CourseForm from "../components/CourseForm";
import FileExplorer from "../components/FileExplorer";
import FileUploaded from "../components/FileUploader";
import { getCourses, getFiles } from "../tools/services";
import { useAuth } from "../tools/useAuth";
import { Course, file } from "../types/";

const Dashboard = () => {
  const { user, signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState<Course[]>();
  const [fonts, setFonts] = useState<file[]>([]);

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
      }
    };

    getBucket();
  }, [user]);

  //   useEffect(() => {
  //     console.log(fonts);
  //   }, [fonts]);

  return (
    <div>
      {/* {fonts && <FileExplorer files={fonts} />} */}
      <CourseForm />
      {courses &&
        courses.map((course) => {
          return (
            <div key={course.id}>
              <img
                src={`https://www.google.com/s2/favicons?domain=${
                  course.url
                }&sz=${64}`}
              />
              <a href={course.url}>{course.url}</a>
            </div>
          );
        })}
      {/* <FileUploaded /> */}
    </div>
  );
};

export default Dashboard;
