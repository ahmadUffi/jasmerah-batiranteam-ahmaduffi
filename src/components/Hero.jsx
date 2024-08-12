import React from "react";
import "./hero.css";

import img from "../database/Soekarno/GambarDua.jpg";

const Hero = ({ data }) => {
  console.log(data);
  return (
    <div className="hero flex flex-col md:flex-row">
      <div className="detail lg:ps-48 ">
        <h1 className="text-6xl font-bold mb-10 ">Ir Soekarno</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut quo
          enim consequatur minus do6or necessitatibus quis consectetur, harum
          quisquam nemo possimus maxime laudantium beatae quia ipsam officia
          unde iusto.
        </p>
      </div>
      <div className="gambar ">
        <div className="wrapper basis-auto md:w-[300px] md:h-[400] lg:w-[320px] lg:h-[429px] w-[240px] h-[340px]">
          <img src={img} alt="#" className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
