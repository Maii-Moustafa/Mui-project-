import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import burgerIcon from "./burgerIcon.css";
// import SegmentIcon from "@mui/icons-material/Segment";

const BurgerIconButton = (props) => {
  // console.log(props);

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={props.toggleDrawer(top, true)}
      >
        <Box>
          <Typography variant="span" className="line-1"></Typography>
          <Typography variant="span" className="line-2"></Typography>
          <Typography variant="span" className="line-3"></Typography>
        </Box>
      </IconButton>
    </>
  );
};

export default BurgerIconButton;
