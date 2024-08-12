import React from "react";
import "./home.css";
import Hero from "../components/Hero";
import { biografis } from "../database/index";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Box } from "@mui/material";

const Home = () => {
  const datasSlider = biografis.slice(0, 5);

  return (
    <div className="home h-[100dvh] flex justify-center items-center">
      <Box>
        <Hero />
      </Box>
    </div>
  );
};

export default Home;
