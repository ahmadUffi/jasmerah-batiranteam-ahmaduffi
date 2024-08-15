import { Box, Stack } from "@mui/material";
import React from "react";

const Game = () => {
  return (
    <div>
      <Stack className="flex justify-center items-center h-[100vh]">
        <Box className="w-[200px] h-[180px] bg-white">
          <h1>Quiz Game</h1>
        </Box>
      </Stack>
    </div>
  );
};

export default Game;
