import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { addCourse } from "../tools/services";
import { Course } from "../types/supabase";

const CourseForm = () => {
  const [url, setUrl] = useState("");
  const [paid, setPaid] = useState(false);
  const [price, setPrice] = useState(0);
  const [purchasedDate, setPurchasedDate] = useState(new Date().toString());
  const [submitted, setSubmitted] = useState(false);
  const [notes, setNotes] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    //ignoring the id because it is auto generated
    //@ts-ignore
    const newCourse: Course = {
      url,
      paid,
      price,
      purchased_on: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      completed: false,
      note: notes,
      favorite: false,
    };

    await addCourse(newCourse);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4"
    >
      <div>
        <label
          htmlFor="url"
          className="block text-grey-darker text-sm font-bold mb-1s"
        >
          Course URL
        </label>
        <input
          type="text"
          id="url"
          name="url"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          value={url}
        />
      </div>

      {/* 
      div that is flex with items center
       */}
      <div className="flex items-center  ">
        <input
          type="checkbox"
          className="form-checkbox w-4 h-4"
          id="myCheckbox"
          checked={paid}
          onChange={(e) => {
            setPaid(e.target.checked);
          }}
        />
        <label
          htmlFor="myCheckbox"
          className="block text-grey-darker text-sm font-bold ml-2"
        >
          Paid Course?
        </label>
      </div>

      <div className="flex gap-6">
        {paid && (
          <div>
            <label
              htmlFor="price"
              className="block text-grey-darker text-sm font-bold mb-1"
            >
              Course Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="shadow  border rounded  py-2 px-3 text-grey-darker w-24"
              onChange={(e) => {
                setPrice(parseInt(e.target.value));
              }}
              value={price}
            />
          </div>
        )}

        <div>
          <label
            htmlFor="purchased_on"
            className="block text-grey-darker text-sm font-bold mb-1 "
          >
            {paid ? "Date Purchased" : "Date Aquired"}
          </label>
          <input
            type="date"
            id="purchased_on"
            name="purchased_on"
            className="shadow border rounded  py-2 px-3 text-grey-darker"
            value={purchasedDate}
            onChange={(e) => {
              setPurchasedDate(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="notes"
          className="block text-grey-darker text-sm font-bold mb-1"
        >
          Notes
        </label>

        <textarea
          id="notes"
          name="notes"
          className="shadow  border rounded  py-2 px-3 text-grey-darker w-full"
          onChange={(e) => {
            setNotes(e.target.value);
          }}
          value={notes}
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex w-full justify-center items-center gap-4"
        type="submit"
      >
        {submitted ? (
          <motion.div
            initial={{
              //hide
              opacity: 0,
              rotate: 90,
            }}
            animate={{
              //show
              opacity: 1,
              rotate: 360,
            }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 100,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
        ) : (
          <>
            <div className="text-lg">Submit</div>
          </>
        )}
      </button>
      {/* <input
        type="submit"
        className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
        value="Add Course"
      /> */}
    </form>
  );
};

export default CourseForm;
