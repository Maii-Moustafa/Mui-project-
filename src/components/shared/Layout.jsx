import React from "react";

import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import ThemeProvider from "../../providers/ThemeContext";
import Navbar from "./navbar/NavBar";

import Home from "../../pages/home";
import CursorBlendMode from "../cursor/CursorBlendMode";
import Footer from "./footer/Footer";


const Layout = ({ children }) => {
  //   const location = useLocation();
  //   console.log(location);
  //   const isFooterHidden = routesWithNoFooter.includes(location.pathname);
  return (
    <ThemeProvider>
      <CssBaseline />
      <GlobalStyles
        styles={{
          a: {
            textDecoration: "none",
            color: "inherit",
            ":hover, :active, :visited": {
              color: "inherit",
            },
          },
          ul: {
            listStyle: "none",
            marginBlock: 0,
            paddingInline: 0,
          },
        }}
      />
      <Stack minHeight="100vh">
     <CursorBlendMode/>
        <Navbar/>
        <Home />

        <Footer />
        
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;


        {/* <Container
        //    sx={{ flex: 1, my: 2 }} 
           component="main">
            {children}
          </Container> */}
        {/* {!isFooterHidden && <Footer />} */}