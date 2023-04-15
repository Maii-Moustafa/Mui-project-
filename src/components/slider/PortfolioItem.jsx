import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

import { gsap } from "gsap";
import SplitText from "gsap-trial/SplitText";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function PortfolioItem({ item, i }) {
  return (
    <>
      <Stack direction="row" justifyContent="flex-end">
        <ParallaxBanner
          layers={[
            {
              image: item.photo,
              speed: 20,
              //   easing: [0.2, -0.6, 1, -0.6],
              // easing:"easeInQuad"
            },
          ]}
          className="aspect-[2/1]"
          style={{
            height: "100vh",
            width: "80%",
            // width: { sm: "100%", md: "80%", lg: "100%" }
          }}
        />
      </Stack>

      <Paper sx={{ position: "relative" }}>
        <Box>
          <Stack
            style={{
              position: "absolute",

              bottom: "250px",
              right: "400px",
              color: "white",
              fontSize: "10rem",
            }}
          >
            {/* <Parallax speed={30}> */}
            <Stack direction="row" alignItems="center">
              <Divider
                variant="middle"
                // flexItem
                sx={{
                  display: "inline-block",
                  width: "60px",
                }}
              />
              <Typography
                color="secondary"
                variant="p"
                sx={{
                  letterSpacing: "2px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  lineHeight: "1.2",
                }}
              >
                {item.category}
              </Typography>
            </Stack>

            <Typography
              variant="h1"
              sx={{
                letterSpacing: "2px",
                fontSize: "4rem",
                fontWeight: "700",
                lineHeight: "2.8",
                textTransform: "capitalize",
              }}
            >
              {item.title}
            </Typography>

            <Typography
              color="secondary"
              variant="p"
              sx={{
                fontSize: "1rem",
                lineHeight: "1.2",
              }}
            >
              {item.description}
            </Typography>

            <Button
              variant="outlined"
              color="secondary"
              startIcon={
                <ArrowForwardIosIcon
                  sx={{
                    width: "30px",
                    height: "30px",
                    padding: "2px",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                />
              }
              style={{
                borderRadius: "50px",
                padding: "10px 25px",
                border: "1px solid white",
                color: "white",
              }}
            >
              View Case
            </Button>
            {/* </Parallax> */}
          </Stack>

          <Typography
            variant="h1"
            style={{
              position: "absolute",

              bottom: "60px",
              right: "180px",
              color: "white",
              fontSize: "10rem",
              fontFamily: '"Londrina Outline",cursive',
            }}
          >
            0{i}
          </Typography>
        </Box>
      </Paper>
    </>
  );
}
// gsap.registerPlugin(SplitText);
// var split = new SplitText(".motiv01", { type: "chars" }),
//   chars = split.chars;

// gsap.from(chars, {
//   autoAlpha: 0,
//   x: -10,
//   duration: 0.3,
//   ease: "Power2.in",
//   stagger: 0.1,
//   delay: 1,
// });

// function change(){

//   split = new SplitText(imgs[1], {type:"chars"});
//   chars = split.chars;

//   var action = gsap.timeline({})
//   .to(imgs,  {x:'-=600', duration:1, ease:'power1.inOut'})
//   .to(imgs[0], {x:'+=1800', duration:0}) // the first to the end
//   .from(chars, {autoAlpha:0, x: -10, duration:0.3, ease: 'Power2.in', stagger:0.1}, 1.5);

//   imgs.push( imgs.shift() ); // the first (shift) to the end (push) from the array

//   // start endless run
//   gsap.delayedCall(next, change);

// }

// // start the changing after next = 3 sec
// gsap.delayedCall(next, change);
