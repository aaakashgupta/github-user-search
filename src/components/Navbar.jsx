import { DarkThemeToggle } from "flowbite-react";
import React from "react";
import { DiGithub, DiGithubAlt } from "react-icons/di";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router";
function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Brand */}
      <div className="flex  items-center gap-2 text-xl font-semibold text-gray-800">
        <DiGithubAlt size={40} className="text-blue-500 text-2xl" />
        <Link to="/" className="hover:text-blue-500 transition duration-200">
          GitHub Users Hub
        </Link>
      </div>

      {/* Right: Login Button */}
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Login
        </button>
        {/* <DarkThemeToggle /> */}
      </div>
    </nav>
  );
}

export default Navbar;
