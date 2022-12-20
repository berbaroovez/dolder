import { FormEvent, useState } from "react";
import { addCourse } from "../tools/services";
import { Course } from "../types";
import { definitions } from "../types/supabase";

const CourseForm = () => {
  const [url, setUrl] = useState("");
  const [paid, setPaid] = useState(false);
  const [price, setPrice] = useState(0);
  const [purchasedDate, setPurchasedDate] = useState(new Date());

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newCourse: Course = {
      url,
      paid,
      price,
      purchased_on: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
    };

    await addCourse(newCourse);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
    >
      <label
        htmlFor="url"
        className="block text-grey-darker text-sm font-bold mb-2"
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
      <label
        htmlFor="paid"
        className="block text-grey-darker text-sm font-bold mb-2"
      >
        Paid Course?
      </label>
      <input
        type="checkbox"
        id="paid"
        name="paid"
        checked={paid}
        onChange={() => {
          setPaid(!paid);
        }}
      />
      <label
        htmlFor="price"
        className="block text-grey-darker text-sm font-bold mb-2"
      >
        Course Price
      </label>
      <input
        type="number"
        id="price"
        name="price"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        onChange={(e) => {
          setPrice(parseInt(e.target.value));
        }}
        value={price}
      />
      {/* <label
        htmlFor="purchased_on"
        className="block text-grey-darker text-sm font-bold mb-2"
      >
        Date Joined
      </label>
      <input type="date" id="purchased_on" name="purchased_on" value={purchasedDate} /> */}
      <input
        type="submit"
        className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        value="Add Course"
      />
    </form>
  );
};

export default CourseForm;
