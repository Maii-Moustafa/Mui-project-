import { useState } from "react";
import React from "react";

import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Divider from "@mui/material/Divider";

import BurgerIconButton from "./burgerIconAnimated/BurgerIconButton";
import ClearIcon from "@mui/icons-material/Clear";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import useScrollDirection from "../../../hooks/useScrollDirection";
import useHover from "../../../hooks/useHover";

import style from "./style.css";
import { Image } from "@mui/icons-material";
import NavLink from "./NavLink";
import NavTitle from "./NavTitle";
import NavText from "./NavText";

const navLinks = [
  {
    label: "Home",
    id: "01",
    to: "/",
  },
  {
    label: "Portfolio",
    id: "02",
    to: "/Portfolio",
  },
  {
    label: "Works",
    id: "03",
    to: "/Works",
  },
  {
    label: "About",
    id: "04",
    to: "/About",
  },
  {
    label: "Contact",
    id: "05",
    to: "/Contact",
  },
];

const contact = [
  {
    title: "Studio",
  },
  {
    title: "Contact",
  },
  {
    title: "Follow",
  },
];

export default function Navbar() {
  //--------------- state ---------------
  // drawer
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // navbar icon
  const [toggled, setToggled] = useState(false);

  //--------------- hooks ---------------
  const scrollDirection = useScrollDirection();
  const { isHovering, handleMouseOver, handleMouseOut } = useHover();

  //--------------- handlers ---------------
  const handleOnClick = () => {
    setToggled((prev) => (prev === true ? false : true));
    // console.log(toggled);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    handleOnClick();
  };

  return (
    <>
      <Box
        sx={
          {
            // flexGrow: 1,
            // position:{ `sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"}
          }
        }
        // className={`header ${scrollDirection === "down" ? "hide" : "show"}`}
      >
        <AppBar
          className={`header ${scrollDirection === "down" ? "hide" : "show"}`}
          sx={{ backgroundColor: "black" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Droow
            </Typography>
            {/* <Image
              src="../../../src/assets/logo.png"
              style={{ width: "30%", flexGrow: 1 }}
            /> */}
            <Box onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <BurgerIconButton toggleDrawer={toggleDrawer} toggled={toggled} />
              {state[top] ? (
                <Typography
                  className="close"
                  variant="span"
                  sx={{
                    marginLeft: "5px",
                    color: "grey",
                    fontWeight: "300",
                  }}
                >
                  {isHovering ? "Menu" : "close"}
                </Typography>
              ) : (
                <Typography
                  className="close"
                  variant="span"
                  sx={{
                    marginLeft: "5px",
                    color: "grey",
                    fontWeight: "300",
                  }}
                >
                  {isHovering ? "Open" : "Menu"}
                </Typography>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        anchor="top"
        open={state[top]}
        onClose={toggleDrawer(top, false)}
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            marginTop: "64px",
            height: "100vh",
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          columns={12}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            xs={7}
            //  className={classes.root}
          >
            <List>
              {navLinks.map(({ label, id, to }) => (
                <ListItem key={label} sx={{ px: 0 }}>
                  <ListItemButton
                    component={Link}
                    to={to}
                    onClick={toggleDrawer(top, false)}
                    sx={{
                      lineHeight: "1.15",
                    }}
                  >
                    <ListItemText
                      sx={{
                        transitionProperty: "transform",
                        transitionDuration: "0.3s",
                        transformOrigin: "0 100%",
                        transform: "perspective(1px) translateZ(180)",

                        "&:hover": {
                          transform: "skew(10deg)",
                        },
                      }}
                    >
                      <Typography
                        variant="span"
                        sx={{ color: "grey", fontWeight: "300" }}
                      >
                        {id}.
                      </Typography>
                      <Typography
                        variant="span"
                        sx={{
                          color: "white",
                          fontWeight: "500",
                          letterSpacing: "2px",
                          fontSize: "40px",
                        }}
                      >
                        {label}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ borderColor: "white", height: "100%", width: "1px" }}
          >
            {/* VERTICAL */}
          </Divider>
          <Grid item xs={4}>
            <List>
              <Box sx={{ marginTop: "2rem" }}>
                <ListItem>
                  <NavTitle navTitle="Studio" />
                </ListItem>
                <ListItem>
                  <NavText navText="26-30 New Damietta" color="grey" />
                </ListItem>
                <ListItem>
                  <NavText
                    navText="El-Mahalla El-Kubra, SK1 66LM"
                    color="grey"
                  />
                </ListItem>
              </Box>
              <Box sx={{ marginTop: "2rem" }}>
                <ListItem>
                  <NavTitle navTitle="Contact" />
                </ListItem>
                <ListItem>
                  <NavText navText="+00 (2)012 3321" color="white" />
                </ListItem>
                <ListItem>
                  <NavText navText="info@dsngrid.com" color="white" />
                </ListItem>
              </Box>
              <Box sx={{ marginTop: "2rem" }}>
                <ListItem>
                  <NavTitle navTitle="Follow us" />
                </ListItem>
                <ListItem>
                  <NavLink navLink="dribble" />
                  <NavLink navLink="behance" />
                  <NavLink navLink="linkedin" />
                  <NavLink navLink="twitter" />
                </ListItem>
              </Box>
            </List>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}
