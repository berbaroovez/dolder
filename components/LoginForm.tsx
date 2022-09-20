import { useState } from "react";
import { useAuth } from "../tools/useAuth";
const LoginForm = () => {
  const [userEmail, setEmail] = useState("");

  const onSubmit = () => {
    if (userEmail.trim() !== "") {
      signIn(userEmail);
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
          Sign In
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

export default LoginForm;
