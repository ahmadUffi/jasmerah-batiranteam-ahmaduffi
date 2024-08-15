import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [active, setActive] = useState(false);
  function activeHandler() {
    setActive((curr) => !curr);
  }
  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-10">
      <div
        className={` ${
          active ? "active" : ""
        } container-nav flex justify-between items-center text-w relative`}
      >
        <div className="logo invisible sm:visible">
          <img src="/Jasmerah.svg" alt="logo" />
        </div>

        <div
          className={`fungsi ${
            active ? "active" : ""
          } flex flex-col sm:flex-row sm:gap-[3rem] md:gap-[6rem]`}
        >
          <NavLink
            onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
            to="/"
            className={({ isActive }) =>
              ` homelink relative transition-colors duration-100 ease-linear hover:text-red-400 px-2 right-[-28px] rounded-lg   ${
                isActive ? "bg-[#FF8343] text-white font-bold" : "navlink"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
            to="/daftarpahlawan"
            className={({ isActive }) =>
              `listlink relative transition-colors duration-100 ease-linear hover:text-red-400 px-2 right-0 rounded-lg ${
                isActive ? "bg-[#FF8343] text-white font-bold " : "navlink"
              }`
            }
          >
            List Pahlawan
          </NavLink>
          <NavLink
            onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
            to="/game"
            className={({ isActive }) =>
              `gamelink relative transition-colors duration-100 ease-linear hover:text-red-400 px-2 right-[-28px] rounded-lg ${
                isActive ? "bg-[#FF8343] text-white font-bold" : "navlink"
              }`
            }
          >
            Game
          </NavLink>
        </div>
        <div className={`${active ? "btn active" : "btn"}`}>
          <button className="">SignUp</button>
        </div>
      </div>

      <div
        className={`burger ${
          active ? "active" : "delay-300"
        } visible sm:invisible flex flex-col gap-1 h-12 w-12 rounded-full absolute top-4 right-4 justify-center items-center `}
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
