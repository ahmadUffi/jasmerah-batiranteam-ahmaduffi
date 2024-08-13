import React from "react";
import "./hero.css";

import img from "../database/Soekarno/GambarDua.jpg";
import { Link } from "react-router-dom";

const Hero = ({ hero }) => {
  return (
    <div className="hero flex flex-col md:flex-row">
      <div className="detail lg:ps-48 ">
        <h1 className="md:text-6xl font-bold md:mb-10 sm:mb-5 mb-3 sm:text-5xl text-4xl">
          {hero.nama}
        </h1>
        <p>{hero.biografi.paragrafSatu}</p>
        <div className="btn-wrapper flex gap-12 mt-8">
          <button className="button">Details</button>
          <Link to="/daftarpahlawan">
            <button className="button">More Heroes</button>
          </Link>
        </div>
      </div>
      <div className="gambar ">
        <div className="wrapper basis-auto sm:w-[300px] sm:h-[420px] lg:w-[320px] lg:h-[429px] w-[240px] h-[340px] ">
          <img src={hero.gambarSatu} alt="#" className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
