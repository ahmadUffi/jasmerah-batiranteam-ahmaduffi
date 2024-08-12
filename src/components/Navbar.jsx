import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Stack>
        <div className="logo">
          <img src="#" alt="logos" />
        </div>
        <Box>
          <Typography>Home</Typography>
          <Typography>List</Typography>
          <Typography>About</Typography>
        </Box>
        <div>
          <Button>SingUP</Button>
        </div>
      </Stack>
    </nav>
  );
};

export default Navbar;
