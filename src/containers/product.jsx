import { useRef, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { useTheme } from "@emotion/react";

import {
  Parallax,
  ParallaxBanner,
  useParallaxController,
} from "react-scroll-parallax";

import MyButton from "../components/shared/MyButton";
import { Container, Paper } from "@mui/material";

const helloPhoto = "https://i.ibb.co/JQf9PFr/watch-Product.jpg";

const Product = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState();
  const productSectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) observer.unobserve(entry.target);
      },
      {
        threshold: 1,
      }
    );

    observer.observe(productSectionRef.current);
  }, []);
  return (
    <Box sx={{ width: "100%", marginTop: "8rem" }} component="section">
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        sx={{
          position: "relative",
          // marginTop:"40px"
        }}
      >
        <Paper
          sx={{
            position: "absolute",
            top: "-120px",
            width: "70%",
            height: "100vh",
            backgroundColor:
              theme.palette.mode === "dark" ? "#090909" : "white",
            zIndex: -4,
          }}
        >
          {/* <Typography
            sx={{
              position: "relative",
              top: "170px",
              // right:"420px",
              fontSize: "120px",
              letterSpacing: "4px",
              fontWeight: "700",
              zIndex: -3,
            }}
          >
            DROOW
          </Typography> */}
        </Paper>
      </Stack>
      <Container>
        <Grid
          container
          spacing={6}
          sx={{
            position: "relative",
            // paddingTop: { sm: "0", md: "0", lg: "80px" },
            // paddingBottom: "40px",
          }}
        >
          <Grid
            ref={productSectionRef}
            xs={12}
            md={12}
            lg={5}
            sx={{
              opacity: isVisible ? "1" : "0",
              transform: isVisible
                ? "translate3d(0, 0, 0) "
                : "translate3d(-60px, 0, 0)",
              transition: "0.25s all ease-in-out ",
            }}
          >
            <ParallaxBanner
              layers={[
                {
                  image: "https://i.ibb.co/JQf9PFr/watch-Product.jpg",
                  speed: 20,
                  //   easing: [0.2, -0.6, 1, -0.6],
                  easing: "easeInQuad",
                },
              ]}
              style={{
                height: "70vh",
                // width: "40%",
                //  opacity: isVisible ? "1" : "0"
              }}
            />
          </Grid>
          <Grid xs={12} md={12} lg={7}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              sx={{
                height: "80vh",
                zIndex: 5,
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  position: "relative",
                }}
              >
                <Divider
                  variant="middle"
                  sx={{
                    display: "inline-block",
                    width: "8rem",
                    position: "absolute",
                    left: "-175px",
                    bottom: "30px",
                    backgroundColor: "white",
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    marginTop: "1rem",
                    letterSpacing: "2px",
                    opacity: isVisible ? "1" : "0",
                    transform: isVisible
                      ? "translate3d(0, 0, 0) "
                      : "translate3d(0, 50px, 0)" /* ADDED - start x position as -50px */,
                    transition: "0.3s all ease-in-out ",
                  }}
                >
                  Time Tag Watch.
                </Typography>
              </Stack>

              <Typography
                variant="p"
                sx={{
                  marginTop: "1rem",
                  letterSpacing: "2px",
                  opacity: isVisible ? "1" : "0",
                  transform: isVisible
                    ? "translate3d(0, 0, 0) "
                    : "translate3d(0, 50px, 0)" /* ADDED - start x position as -50px */,
                  transition: "0.3s all ease-in-out ",
                  transitionDelay: "0.3s",
                }}
              >
                Sometimes, we need to check the time, wondering when our work or
                meeting will finish, without getting caught by others.
              </Typography>
              <Typography
                variant="p"
                color="secondary"
                sx={{
                  marginTop: "1rem",
                  letterSpacing: "2px",
                  marginBottom: "2rem",
                  opacity: isVisible ? "1" : "0",
                  transform: isVisible
                    ? "translate3d(0, 0, 0) "
                    : "translate3d(0, 50px, 0)" /* ADDED - start x position as -50px */,
                  transition: "0.3s all ease-in-out ",
                  transitionDelay: "0.6s",
                }}
              >
                To avoid your boss s staring eye, you should not roll your eyes
                to check the time. The Time Tag Watch is a consummately
                appropriate for it. Those tags do the role of the hands of the
                watch. By rotating the face of the watch not the hands, it gets
                harder to be damaged. It provides you with experience to feel
                the time at the end of your finger without damaging your watch.
              </Typography>
              <Box
                sx={{
                  opacity: isVisible ? "1" : "0",
                  transform: isVisible
                    ? "translate3d(0, 0, 0) "
                    : "translate3d(0, 50px, 0)" /* ADDED - start x position as -50px */,
                  transition: "0.3s all ease-in-out ",
                  transitionDelay: "0.9s",
                }}
              >
                <MyButton content="Learn more" />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Product;
