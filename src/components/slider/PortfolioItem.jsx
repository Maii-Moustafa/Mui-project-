/** @jsxImportSource @emotion/react */

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

// import styled, { keyframes } from "styled-components";
import { css, keyframes, useTheme } from "@emotion/react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

const myEffect = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px) skew(-0.06turn, 18deg);
  }
  25% {opacity: 0;  transform: translateY(-60);  }
  75% { transform:translateY(-120) skew(-0.06turn, 18deg) ; }
  100% {
    opacity: 1;
    transform:translateY(0)   skew(0) ;
  }
`;
const myEffectExit = keyframes`
0% { opacity: 1; transform:translateY(0px)  skew(0)  }
 25% { transform:  skew(-0.06turn, 18deg);  }
   75% { transform:  skew(-0.06turn, 18deg); }
  100% { opacity: 0; transform: translateY(-100px)  }
`;

export default function PortfolioItem({ item, i, exit }) {
  // const [exit, setExit] = useState(false);
  const reactArray = item.title.split("");

  const theme = useTheme();
  const animatedItem = css`
    animation: ${myEffect} 3000ms ${theme.transitions.easing.easeInOut};
  `;
  const animatedItemExiting = css`
    animation: ${myEffectExit} 3000ms ${theme.transitions.easing.easeInOut};
    opacity: 0;
    transform: translateY(-200%);
  `;

  return (
    <>
      <Stack direction="row" justifyContent="flex-end">
        <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", lg: "80%" } }}>
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
              width: "100%",
            }}
          />
        </Box>
      </Stack>
      <Box sx={{ position: "relative" }}>
        <Stack
          style={{
            position: "absolute",
            bottom: "250px",
            left: "180px",
            color: "white",
            // fontSize: "10rem",
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

          <Box>
            {reactArray.map((item, index) => (
              <Typography
                key={index}
                variant="span"
                // css={exit ? animatedItemExiting : animatedItem}
                sx={{
                  display: "inline-block",
                  letterSpacing: "2px",
                  fontSize: "4rem",
                  fontWeight: "700",
                  lineHeight: "2.8",
                  textTransform: "capitalize",
                  animation: `${myEffect} 0.75s forwards`,
                  animationDelay: `${0.5 + index / 10}s`,
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          <Typography
            color="secondary"
            variant="p"
            sx={{
              fontSize: "1rem",
              lineHeight: "0.8",
              fontWeight: "bold",
              width: "50%",
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
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%", lg: "25%" },
              borderRadius: "50px",
              padding: "10px 25px",
              border: "1px solid white",
              color: "white",
              marginTop: "2rem",
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
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "inline-block",
            },
            bottom: "60px",
            right: "80px",
            color: "white",
            fontSize: "10rem",
            fontFamily: '"Londrina Outline",cursive',
          }}
        >
          0{i}
        </Typography>
      </Box>
    </>
  );
}

// const skewLetter = keyframes`
//   0% { opacity: 1; transform:translateY(0px)  skew(0)  }
//   25% { transform:  skew(-0.06turn, 18deg);  }
//   75% { transform:  skew(-0.06turn, 18deg); }
//   100% { opacity: 0; transform: translateY(-100px)  }
// `;

// const Wrapper = styled.span`
//   display: inline-block;

//   span {
//     opacity: 0;
//     display: inline-block;
//     animation-name: ${skewLetter};
//     animation-duration: 6s;
//     animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
//     animation-fill-mode: forwards;
//     animation-iteration-count: infinite;
//   }
//   // span:nth-child(1) {
//   //   animation-delay: 0.1s;
//   // }
//   // span:nth-child(2) {
//   //   animation-delay: 0.2s;
//   // }
//   // span:nth-child(3) {
//   //   animation-delay: 0.3s;
//   // }
//   // span:nth-child(4) {
//   //   animation-delay: 0.4s;
//   // }
//   // span:nth-child(5) {
//   //   animation-delay: 0.5s;
//   // }
// `;

// const animation = keyframes`
//   0% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
//   25% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
//   75% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(1px); }
//   100% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
// `;

// const Wrapper = styled.span`
//   display: inline-block;

//   span {
//     opacity: 0;
//     display: inline-block;
//     animation-name: ${skewLetter};
//     animation-duration: 6s;
//     animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
//     animation-fill-mode: forwards;
//     // animation-iteration-count: infinite;
//   }
//   span:nth-child(1) {
//     animation-delay: 0.1s;
//   }
//   span:nth-child(2) {
//     animation-delay: 0.2s;
//   }
//   span:nth-child(3) {
//     animation-delay: 0.3s;
//   }
//   span:nth-child(4) {
//     animation-delay: 0.4s;
//   }
//   span:nth-child(5) {
//     animation-delay: 0.5s;
//   }
// `;

// const myEffect = keyframes`
//   0% {
//     opacity: 1;
//     transform: translateY(-200%);
//   }
//   25% {opacity: 0; transform:  skew(-0.06turn, 18deg);  }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;
