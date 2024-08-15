import { Box } from "@mui/material";
import React from "react";
import "./Game.css";
import { FaArrowRight } from "react-icons/fa";

const Game = () => {
  return (
    <div>
      <div className=" flex flex-col items-center py-32 gap-5  min-h-[100vh]">
        <div className="text-white">
          <h1 className="text-3xl font-extrabold tracking-wider">Game List</h1>
        </div>
        <div className="h-full w-full flex gap-5 md:flex-wrap flex-col items-center md:flex-row md:justify-center">
          <Box
            onClick={() => window.open("/game/susun-kata", "_self")}
            className="box-active cursor-pointer flex flex-col p-2 justify-center w-[20rem] h-[10rem] text-white glassmorp"
          >
            <div className="ml-3">
              <h1 className="inter font-extrabold tracking-wider text-xl">
                Quiz Game
              </h1>
            </div>
            <div className="ml-3 flex relative gap-5">
              <p className="max-w-64 inter text-sm">
                Uji kecepatanmu dengan Quiz nama Pahlawan!
              </p>
              <span className="arrow absolute right-0 bottom-0">
                <FaArrowRight />
              </span>
            </div>
          </Box>
          <Box
            onClick={() => window.open("/game/memory", "_self")}
            className="box-active cursor-pointer flex flex-col p-2 justify-center w-[20rem] h-[10rem] text-white glassmorp"
          >
            <div className="ml-3">
              <h1 className="inter font-extrabold tracking-wider text-xl">
                Memory Flip Games
              </h1>
            </div>
            <div className="ml-3 flex relative gap-5">
              <p className="max-w-64 inter text-sm">
                Uji kecepatanmu dan ingatanmu dengan menyamakan gambar pahlawan!
              </p>
              <span className="arrow absolute right-0 bottom-0">
                <FaArrowRight />
              </span>
            </div>
          </Box>
          <Box
            onClick={() => confirm("Game ini akan segera hadir!")}
            className="box-active cursor-pointer flex flex-col p-2 justify-center w-[20rem] h-[10rem] text-white glassmorp"
          >
            <div className="ml-3">
              <h1 className="inter font-extrabold tracking-wider text-xl">
                Tebak Gambar Pahlawan
              </h1>
            </div>
            <div className="ml-3 flex relative gap-5">
              <p className="max-w-64 inter text-sm">
                Uji pengetahuanmu tentang pahlawan dengan game tebak gambar!
              </p>
              <span className="arrow absolute right-0 bottom-0">
                <FaArrowRight />
              </span>
            </div>
          </Box>
          <Box
            onClick={() => confirm("Game ini akan segera hadir!")}
            className="box-active cursor-pointer flex flex-col p-2 justify-center w-[20rem] h-[10rem] text-white glassmorp"
          >
            <div className="ml-3">
              <h1 className="inter font-extrabold tracking-wider text-xl">
                Game 4
              </h1>
            </div>
            <div className="ml-3 flex relative gap-5">
              <p className="max-w-64 inter text-sm">
                Fitur game ini akan segera hadir!
              </p>
              <span className="arrow absolute right-0 bottom-0">
                <FaArrowRight />
              </span>
            </div>
          </Box>
          <Box
            onClick={() => confirm("Game ini akan segera hadir!")}
            className="box-active cursor-pointer flex flex-col p-2 justify-center w-[20rem] h-[10rem] text-white glassmorp"
          >
            <div className="ml-3">
              <h1 className="inter font-extrabold tracking-wider text-xl">
                Game 5
              </h1>
            </div>
            <div className="ml-3 flex relative gap-5">
              <p className="max-w-64 inter text-sm">
                Fitur game ini akan segera hadir!
              </p>
              <span className="arrow absolute right-0 bottom-0">
                <FaArrowRight />
              </span>
            </div>
          </Box>
          <Box
            onClick={() => confirm("Game ini akan segera hadir!")}
            className="box-active cursor-pointer flex flex-col p-2 justify-center w-[20rem] h-[10rem] text-white glassmorp"
          >
            <div className="ml-3">
              <h1 className="inter font-extrabold tracking-wider text-xl">
                Game 6
              </h1>
            </div>
            <div className="ml-3 flex relative gap-5">
              <p className="max-w-64 inter text-sm">
                Fitur game ini akan segera hadir!
              </p>
              <span className="arrow absolute right-0 bottom-0">
                <FaArrowRight />
              </span>
            </div>
          </Box>
          <Box
            onClick={() => confirm("Game ini akan segera hadir!")}
            className="box-active cursor-pointer flex flex-col p-2 justify-center w-[20rem] h-[10rem] text-white glassmorp"
          >
            <div className="ml-3">
              <h1 className="inter font-extrabold tracking-wider text-xl">
                Game 7
              </h1>
            </div>
            <div className="ml-3 flex relative gap-5">
              <p className="max-w-64 inter text-sm">
                Fitur game ini akan segera hadir!
              </p>
              <span className="arrow absolute right-0 bottom-0">
                <FaArrowRight />
              </span>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Game;
