import { motion } from "framer-motion";
import { useState } from "react";
import { useAuth } from "../../tools/useAuth";
const LoginForm = () => {
  const [userEmail, setEmail] = useState("");
  const [clickedButton, setClickedButton] = useState(false);

  const onSubmit = () => {
    if (userEmail.trim() !== "") {
      setClickedButton(true);
      signIn(userEmail);

      setEmail("yyolo");
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
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="flex items-center justify-between flex-col ">
        <button
          className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded flex w-full justify-center items-center gap-4"
          type="button"
          onClick={onSubmit}
        >
          {clickedButton ? (
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
              <div className="text-lg">Send</div>
            </>
          )}
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
