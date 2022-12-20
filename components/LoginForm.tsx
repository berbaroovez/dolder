import { motion } from "framer-motion";
import { useState } from "react";
import { useAuth } from "../tools/useAuth";
const LoginForm = () => {
  const [userEmail, setEmail] = useState("");

  const onSubmit = () => {
    if (userEmail.trim() !== "") {
      // signIn(userEmail);
      setEmail("");
    }
  };
  const { signIn } = useAuth();
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="username"
        >
          Enter Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={onSubmit}
        >
          <Smiley /> Send
        </button>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

const Smiley = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <motion.path
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          duration: 1,
          type: "tween",
          ease: "easeIn",
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
};

export default LoginForm;
