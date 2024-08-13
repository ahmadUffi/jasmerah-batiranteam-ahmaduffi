import "./home.css";
import Hero from "../components/Hero";
import AwesomeSlider from "react-awesome-slider";
import scrollDown from "../assets/scrollDown.gif";
import "react-awesome-slider/dist/styles.css";
import { Box, Pagination } from "@mui/material";
import biografis from "../database";
import { useState } from "react";
import TimelineSejarah from "../components/TimelineSejarah";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { timelineSejarahIndonesia } from "../database/timelineSejarah";

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

  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };
  return (
    <div className="home">
      <div className="home-container flex justify-center items-center relative">
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
          <div className="scroll flex justify-center md:mb-[-100px] mb-4 pb-[15px]">
            <a href="#sejarahTimeline">
              <img
                src={scrollDown}
                alt="scrolldown"
                className="w-7 cursor-pointer"
              />
            </a>
          </div>
        </Box>
      </div>
      <div className="timeline mt-[30px]">
        <h1 className="text-white mb-8">
          Sejarah Kemerdekaan REpubil indonesia
        </h1>
        <VerticalTimeline>
          {timelineSejarahIndonesia.map((data, index) => (
            <TimelineSejarah key={index} data={data} loadMore={loadMore} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Home;
