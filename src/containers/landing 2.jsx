import React, { useState } from "react";

import Stack from "@mui/material/Stack";

import OpenSocials from "../components/buttons/OpenSocials";

import HomeCarousel from "../components/slider/HomeCarousele";
import HomeCarouselIndicators from "../components/slider/sliderIndicator";

export default function LandingCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  const [exit, setExit] = useState(false);
  return (
    <>
      <Stack
        justifyContent="flex-end"
        sx={{ position: "relative", height: "100vh" }}
      >
        <HomeCarousel activeStep={activeStep} setActiveStep={setActiveStep} exit={exit} setExit={setExit} />

        <HomeCarouselIndicators
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
        <Stack
          sx={{
            zIndex: 300,
            position: "absolute",
            top: "500px",
            left: "80px",
          }}
        >
          <OpenSocials />
        </Stack>
      </Stack>
    </>
  );
}
