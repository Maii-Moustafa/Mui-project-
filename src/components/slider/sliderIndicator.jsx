import { Stack, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import slider from "./slider.json";

const itemHeight = 60;
const HomeCarouselIndicators = ({ activeStep, setActiveStep }) => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "none", lg: "block" },
        position: "absolute",
        height: 3 * itemHeight + 25,
        overflow: "hidden",
        top: "300px",
      }}
    >
      <Box
        sx={{
          transition: "0.3s transform ease-out",
          transform: `translateY(${80 - activeStep * 80}px)`,
        }}
      >
        {slider.map((slide, index) => (
          <Button
            key={index}
            // variant="outlined"
            sx={{
              marginTop: "6px",
              backgroundImage: `url(${slide.photo})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "0px",
              minHeight: itemHeight,
              display: "block",
              transition: "0.3s width ease-out, 0.3s opacity ease-out",
              opacity: index === activeStep ? 1 : 0.5,
              width: index === activeStep ? "120px" : "60px",
              "&:hover": {
                width: index !== activeStep ? "120px" : "120px",
                transition:
                  index !== activeStep
                    ? "0.3s width ease-out, 0.3s opacity ease-out"
                    : "",
                opacity: index !== activeStep ? 1 : 1,
              },
            }}
            onClick={() => setActiveStep(index)}
          >
            <Box
              style={{
                position: "relative",
                minHeight: itemHeight,
                display: "block",
              }}
            >
              {index === activeStep ? (
                <Typography
                  variant="h6"
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "90px",
                    color: "white",
                    fontSize: "1rem",
                    fontFamily: '"Londrina Outline",cursive',
                  }}
                >
                  0{index + 1}
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
