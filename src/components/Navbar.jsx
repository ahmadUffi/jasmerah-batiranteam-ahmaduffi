import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  function activeHabdler() {}
  return (
    <nav className="navbar fixed top-0 left-0 right-0 ">
      <div className="container-nav flex justify-around items-center text-w relative">
        <div className="logo invisible sm:visible">
          <img src="#" alt="logo" />
        </div>

        <div className="fungsi  flex flex-col sm:flex-row sm:gap-[2rem] md:gap-[6rem] ">
          <Link to="/" className="relative right-[-28px] rounded-br-[13px]">
            Home
          </Link>
          <Link to="/daftarpahlawan" className="rounded-r-lg">
            List Pahlawan
          </Link>
          <Link to="/about" className="right-[-28px] rounded-tr-[13px]">
            About
          </Link>
          <div className="btn">
            <button className="">SingUp</button>
          </div>
        </div>
      </div>

      <div
        className="burger visible sm:invisible flex flex-col gap-1 h-12 w-12 rounded-full absolute top-4 right-4 flex justify-center items-center "
        onClick={activeHabdler}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
