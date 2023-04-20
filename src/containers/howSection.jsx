import { useRef, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";
// import MyButton from "./MyButton";

import ParallaxImage from "../components/shared/parallaxImage";
import MyButton from "../components/shared/MyButton";

const howPhoto = "https://i.ibb.co/rb5ZNmh/how.jpg";

const HowSection = () => {
  const howSectionRef = useRef();
  const [isVisible, setIsVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) observer.unobserve(entry.target);
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(howSectionRef.current);
  }, []);

  return (
    <>
      <Box
        ref={howSectionRef}
        sx={{
          height: "100vh",
          position: "relative",
          marginTop: "8rem",
          opacity: isVisible ? "1" : "0",
          transform: isVisible
            ? "translate3d(0, 0, 0) "
            : "translate3d(-60px, 0, 0)",
          transition: "0.25s all ease-in-out ",
        }}
        component="section"
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            position: "relative",
          }}
        >
          <ParallaxImage howSectionRef={howSectionRef} isVisible={isVisible} />
          <Box
            ref={howSectionRef}
            sx={{
              display: { xs: "block", sm: "block", md: "block", lg: "none" },
              position: "absolute",
              top: { xs: "570px", sm: "570px", md: "837px" },
              bottom: "0",
              left: "auto",
              width: "90%",
              backgroundColor: "rgb(0,0,0)",
              padding: "60px",
              height: { xs: "30vh", sm: "30vh", md: "40vh" },
              opacity: isVisible ? "1" : "0",
              transform: isVisible
                ? "translate3d(0, 0, 0) "
                : "translate3d(0, -60px, 0)",
              transition: "0.25s all ease-in-out ",
            }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{
                color: "white",
                marginTop: "1rem",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  marginTop: "1rem",
                  letterSpacing: "2px",
                }}
              >
                How is your visual identity?
              </Typography>
              <Typography
                variant="p"
                color="secondary"
                sx={{
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
                A system that young people around the world with a club culture
                and techno enthusiasts feel identified. We generated a simple
                logo that is the basis for generating a geometric and liquid
                system.
              </Typography>
              <MyButton content="Learn more" />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default HowSection;
