import React from "react";
import { Link } from "react-router-dom";

const ButtonComponent = ({ link, text }) => {
  return (
    <Link to={link}>
      <button
        className="py-1 px-3 bg-[#FF8343] mt-3 rounded-md font-semibold cursor-pointer text-white"
        onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
      >
        {text}
      </button>
    </Link>
  );
};

export default ButtonComponent;
