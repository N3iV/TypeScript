import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/login">
        <button className="px-5 py-2 hover:text-green-500">Login</button>
      </Link>
      <Link to="/register">
        <button className="text-white bg-gray-400 rounded-lg px-5 py-2 hover:bg-red-400">
          Register
        </button>
      </Link>
    </div>
  );
};

export default Nav;
