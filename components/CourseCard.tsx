import React from "react";
import { useDispatch } from "react-redux";
import { Database } from "../lib/database.types";
import { setSelectedFile } from "../tools/reduxslices/selectedFileSlice";
import { Course } from "../types/supabase";
interface CardProps {
  course: Course;
}

const Card: React.FC<CardProps> = ({ course }) => {
  const dispatch = useDispatch();
  //test 12
  const handleSelect = () => {
    dispatch(setSelectedFile(course));
  };

  return (
    <div
      className="relative rounded-md shadow-sm w-96 cursor-pointer hover:shadow-lg hover:transform hover:scale-105 transition duration-500 ease-in-out"
      onClick={handleSelect}
    >
      {/* <a href={url} className="block overflow-hidden"> */}
      <div className="flex items-center p-6 bg-white dark:bg-slate-400 rounded-t-md">
        <div className="flex-shrink-0">
          <img
            src={`https://www.google.com/s2/favicons?domain=${
              course.url
            }&sz=${32}`}
            alt="Product icon"
            className="h-6 w-6 rounded-sm "
          />
        </div>
        <div className="ml-4 overflow-hidden">
          <div className="text-lg leading-6 font-medium text-gray-900 overflow-x-hidden text-ellipsis whitespace-nowrap">
            <a href={course.url} className="hover:text-blue-500">
              {course.url}
            </a>
          </div>
          <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
            $ {course.price}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-300 p-6 rounded-b-md ">
        <div className="text-sm leading-5 left-2 bottom-2 absolute text-gray-500 font-medium ">
          <p>Click to View More Info</p>
        </div>
        <div className="text-sm leading-5 text-gray-500 absolute right-2 bottom-2 flex  items-end ">
          <svg
            className=" h-5 w-5 text-gray-400 "
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <span>{new Date(course.purchased_on!).toLocaleDateString()}</span>
        </div>
      </div>
      {/* </a> */}
    </div>
  );
};

export default Card;
