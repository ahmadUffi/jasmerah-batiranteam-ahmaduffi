import "./home.css";
import Hero from "../components/Hero";
// import { biografis } from "../database/index";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Box, Pagination } from "@mui/material";
import biografis from "../database";
import { useState } from "react";

const Home = () => {
  const heroSIlder = biografis.slice(0, 5);
  const heroPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastHero = currentPage * heroPerPage;
  const indexOffFirstHero = indexOfLastHero - heroPerPage;
  const currentHero = heroSIlder.slice(indexOffFirstHero, indexOfLastHero);

  const paginateHandler = (e, value) => {
    setCurrentPage(value);
  };
  return (
    <div className="home  flex justify-center items-center relative">
      <Box>
        {currentHero.map((hero, index) => (
          <Hero hero={hero} key={index} />
        ))}
        <Box className="flex justify-center md:mt-14 mt-7 mb-7">
          <Pagination
            defaultPage={1}
            count={Math.ceil(heroSIlder.length / heroPerPage)}
            page={currentPage}
            onChange={paginateHandler}
            variant="outlined"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white",
                mr: "8px",
                borderColor: "white",
                backgroundColor: "black",
              },
              "& .Mui-selected": {
                backgroundColor: "white !important",
                color: "black",
              },
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
