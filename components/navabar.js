// src/components/Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Augur Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;