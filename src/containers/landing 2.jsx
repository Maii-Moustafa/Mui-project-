import React, { useState } from "react";

import Stack from "@mui/material/Stack";

import OpenSocials from "../components/buttons/OpenSocials";

import HomeCarousel from "../components/slider/Carousele";
import HomeCarouselIndicators from "../components/slider/sliderIndicator";

export default function LandingCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <>
      <HomeCarousel activeStep={activeStep} setActiveStep={setActiveStep} />

      <HomeCarouselIndicators
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </>
  );
}
