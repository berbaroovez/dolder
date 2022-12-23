import Link from "next/link";
import { useEffect } from "react";
import { useAuth } from "../../tools/useAuth";
import ThemeToggler from "./ThemeToggler";

const NavBar = () => {
  const { user, signIn, signOut } = useAuth();

  return (
    <nav className="bg-gray-800 text-gray-100 py-2 px-4 flex justify-between items-center">
      <div className="flex items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="h-6 w-6 mr-4"
        >
          <path
            d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
            stroke="#1a84db"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <span className="font-bold text-xl">Dolder</span>
      </div>
      {/* //
     
        if user is null then show login button
        ekse shiw user email
     */}
      {user ? (
        <div className="flex items-center">
          <ThemeToggler />
          <span className="mr-4 bg-slate-500 hover:bg-slate-600 cursor-pointer text-white font-bold py-1 px-2 rounded">
            <Link href="/dashboard">Dashboard</Link>
          </span>
          {/* a svg icon of a human leaving a door */}

          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold ppy-1 px-2 rounded"
            onClick={() => {
              signOut();
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
                d="M17 16l4-4m0 0l-4-4m4 4H3"
              />
            </svg>
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            window.location.href = "/signup";
          }}
          className="bg-blue-500  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default NavBar;
