import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { addCourse } from "../tools/services";
import { Course } from "../types/supabase";
import * as Dialog from "@radix-ui/react-dialog";
import { useAuth } from "../tools/useAuth";
const CourseForm = () => {
  const [url, setUrl] = useState("");
  const [paid, setPaid] = useState(false);
  const [price, setPrice] = useState(0);
  const [purchasedDate, setPurchasedDate] = useState(new Date().toString());
  const [submitted, setSubmitted] = useState(false);
  const [notes, setNotes] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const { user } = useAuth();
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
      user: user!.id,
    };

    console.log(newCourse);
    //set a js timer for 2 second
    setTimeout(() => {
      setModalOpen(false);
      setSubmitted(false);
    }, 1400);

    await addCourse(newCourse);

    setUrl("");
    setPaid(false);
    setPrice(0);
    setPurchasedDate(new Date().toString());
    setNotes("");
  };
  return (
    <Dialog.Root open={modalOpen}>
      <Dialog.Trigger asChild>
        <button
          onClick={() => {
            setModalOpen(true);
          }}
          className="h-8 inline-flex items-center justify-center rounded  font-medium bg-blue-500 hover:bg-blue-600 text-slate-100 w-32 py-2 px-3 h-full"
        >
          Add Course
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-slate-400/[.4]  fixed inset-0" />
        <Dialog.Content className="bg-white rounded-md shadow-md fixed top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-11/12 max-w-md max-h-[86vh] p-6 focus:outline-none">
          <Dialog.Title className="m-0 font-medium text-blue-600 text-xl">
            Add A Course
          </Dialog.Title>
          <Dialog.Description className="mx-0 mt-3 mb-5 text-lg">
            Fill out the form below to add a course to your list.
          </Dialog.Description>
          <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
            <div>
              <label
                htmlFor="url"
                className="block text-grey-darker text-sm font-bold mb-1s"
              >
                Course URL
              </label>
              <input
                required
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

          <Dialog.Close asChild>
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              className=" rounded-full h-6 w-6 inline-flex items-center justify-center absolute top-3 right-3 text-red-700"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CourseForm;
