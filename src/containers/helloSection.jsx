import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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

const HelloSection = ({ myRef, isVisible }) => {
  //--------------- state ---------------
  const theme = useTheme();
  const parallaxController = useParallaxController();
  
  return (
    <Box
      sx={{
        position: "relative",
        marginTop: "8rem",
      }}
      component="section"
    >
      <Parallax speed={-3}>
        <Typography
          variant="h2"
          color={theme.palette.mode === "dark" ? "white" : "black"}
          sx={{
            zIndex: 50,
            letterSpacing: "2px",
            fontWeight: "700",
            position: { sm: "relative", md: "relative", lg: "absolute" },
            left: { sm: "0", md: "0", lg: "300px" },
            top: { sm: "0", md: "0", lg: "50px" },
            textAlign: { sm: "left", md: "left", lg: "right" },
          }}
        >
          Hello we, are <br />
          Dsn Grid
        </Typography>
      </Parallax>
      <Grid
        container
        spacing={2}
        sx={{
          position: "relative",
          paddingTop: { sm: "0", md: "0", lg: "80px" },
          paddingBottom: "40px",
        }}
      >
        <Grid xs={12} md={12} lg={4}>
          <Parallax speed={-3}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              sx={{
                color: "white",
                marginTop: { sm: "0", md: "0", lg: "40px" },
              }}
              component="div"
            >
              <Typography
                variant="p"
                color="secondary"
                sx={{
                  marginTop: "30px",
                  marginBottom: "30px",
                  width: "80%",
                  fontWeight: "bold",
                  opacity: isVisible ? "1" : "0",
                  transform: isVisible
                    ? "translate3d(0, 0, 0) "
                    : "translate3d(0, 50px, 0)" /* ADDED - start x position as -50px */,
                  transition: "0.3s all ease-in-out ",
                }}
              >
                Founded in 2000, Dsn Grid has become one of the best Digital
                Agency in Themeforest. Blue money going forward, but deploy to
                production. First-order optimal strategies build on a culture of
                contribution and inclusion so those options
              </Typography>
              <Box
                sx={{
                  backgroundColor: "none",
                  opacity: isVisible ? "1" : "0",
                  transform: isVisible
                    ? "translate3d(0, 0, 0) "
                    : "translate3d(0, 50px, 0)" /* ADDED - start x position as -50px */,
                  transition: "0.3s all ease-in-out ",
                  transitionDelay: "0.3s",
                }}
              >
                <Stack direction="row" alignItems="center">
                  <Typography
                    variant="h5"
                    sx={{
                      color: theme.palette.mode === "dark" ? "white" : "black",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      lineHeight: "1.4",
                      letterSpacing: "2px",
                    }}
                  >
                    SALVADOR DALI
                  </Typography>
                  <Divider
                    variant="middle"
                    sx={{
                      display: "inline-block",
                      width: "60px",
                    }}
                  />
                </Stack>
                <Typography
                  variant="span"
                  color="secondary"
                  sx={{
                    display: "block",
                    fontWeight: "bold",
                    lineHeight: "1.4",
                    letterSpacing: "2px",
                  }}
                >
                  Digital Artisit
                </Typography>
              </Box>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{
                  opacity: isVisible ? "1" : "0",
                  transform: isVisible
                    ? "translate3d(0, 0, 0) "
                    : "translate3d(0, 50px, 0)" /* ADDED - start x position as -50px */,
                  transition: "0.3s all ease-in-out ",
                  transitionDelay: "0.6s",
                }}
              >
                <Typography
                  variant="span"
                  sx={{
                    color: theme.palette.mode === "dark" ? "white" : "black",
                    fontSize: "8rem",
                    fontWeight: "700",
                  }}
                >
                  25
                </Typography>
                <Box sx={{ width: { sm: "50%", md: "50%", lg: "30%" } }}>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: "1rem",
                      color: theme.palette.mode === "dark" ? "white" : "black",
                    }}
                  >
                    YEARS OF DIGITAL EXPERIENCE
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Parallax>
        </Grid>
        <Grid xs={12} md={12} lg={8}>
          <Paper
            sx={{
              width: "100%",
              height: "60vh",
              backgroundColor: "secondary",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              ref={myRef}
              style={{
                width: "100%",
                height: "100%",
                padding: "4rem",
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
                    image: "https://i.ibb.co/4J2SykS/download.jpg",
                    speed: 20,
                    //   easing: [0.2, -0.6, 1, -0.6],
                    easing: "easeInQuad",
                  },
                ]}
                style={{ height: "100%", opacity: isVisible ? "1" : "0" }}
                onLoad={() => parallaxController.update()}
              />
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HelloSection;
