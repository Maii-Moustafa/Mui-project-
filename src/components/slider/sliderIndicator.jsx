import { Stack, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import slider from "./slider.json";
// const slides = [
//   { label: "Slide 1" },
//   { label: "Slide 2" },
//   { label: "Slide 3" },
//   { label: "Slide 4" },
// ];

const itemHeight = 100;
const HomeCarouselIndicators = ({ activeStep, setActiveStep }) => {

  return (
    <Box
      sx={{
        position:"absolute"  ,

        height: 3 * itemHeight,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          transition: "0.3s transform ease-out",
          transform: `translateY(${100 - activeStep * 100}px)`,
        }}
      >
        {slider.map((slide, index) => (
          <Button
            key={slide.label}
            variant="outlined"
            sx={{
              minHeight: itemHeight,
              display: "block",
              transition: "0.3s width ease-out, 0.3s opacity ease-out",
              opacity: index === activeStep ? 1 : 0.5,
              width: index === activeStep ? "180px" : "80px",
            }}
            onClick={() => setActiveStep(index)}
          >
            <Box
              style={{
                position:"relative",
                minHeight: itemHeight,
                display: "block",
                width: index === activeStep ? "180px" : "80px",
                maxWidth: "100px",
              }}
            >
              <img
                style={{
                  minHeight: itemHeight,
                  display: "block",
                  transition: "0.3s width ease-out, 0.3s opacity ease-out",
                  opacity: index === activeStep ? 1 : 0.5,
                  width: "100%",
                }}
                key={slide.id}
                src={slide.photo}
              />
              {index === activeStep ? (
                <Typography
                  variant="h6"
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "140px",
                    color: "white",
                    fontSize: "1rem",
                    fontFamily: '"Londrina Outline",cursive',
                  }}
                >
                  0{index+1}
                </Typography>
              ) : (
                ""
              )}
            </Box>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default HomeCarouselIndicators;
