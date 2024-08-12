import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [active, setActive] = useState(false);
  function activeHandler() {
    setActive((curr) => !curr);
  }
  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-10">
      <div className="container-nav flex justify-between items-center text-w relative">
        <div className="logo invisible sm:visible">
          <img src="#" alt="logo" />
        </div>

        <div
          className={`fungsi ${
            active ? "" : "active"
          } flex flex-col sm:flex-row sm:gap-[3rem] md:gap-[6rem]`}
        >
          <Link to="/" className="relative right-[-28px] rounded-br-[13px]">
            Home
          </Link>
          <Link to="/daftarpahlawan" className="rounded-r-lg">
            List Pahlawan
          </Link>
          <Link to="/about" className="right-[-28px] rounded-tr-[13px]">
            About
          </Link>
        </div>
        <div className={`${active ? "btn" : "btn active"}`}>
          <button className="">SingUp</button>
        </div>
      </div>

      <div
        className={`burger ${
          active ? "delay-300" : "active"
        } visible sm:invisible flex flex-col gap-1 h-12 w-12 rounded-full absolute top-4 right-4 flex justify-center items-center `}
        onClick={activeHandler}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
