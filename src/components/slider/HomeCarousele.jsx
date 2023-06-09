import { Button, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import SwipeableViews from "react-swipeable-views-react-18-fix";

import PortfolioItem from "./PortfolioItem";
import slider from "./slider.json";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const styles = {
  slide: {
    // padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    background: "black",
    // overflow:"visible"
  },
};

const HomeCarousel = ({ activeStep, setActiveStep, exit, setExit }) => {
  // const [activeStep, setActiveStep] = useState(0);
  //   const handleStepChange = (step) => {
  //     setActiveStep(step);
  //   };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setExit(false);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setExit(true);
  };
  return (
    <Box
      sx={{
        position: "relative",
        // width: {xs:"100%", sm: "100%", md: "100%", lg: "80%" },
      }}
    >
      <SwipeableViews index={activeStep} enableMouseEvents>
        {slider.map((item, i) => (
          <div
            key={item.id}
            style={Object.assign({}, styles.slide, styles.slide1)}
          >
            <PortfolioItem key={item.id} item={item} i={i + 1} exit={exit} />
          </div>
        ))}
      </SwipeableViews>
      <Box
        sx={{
          position: "absolute",
          bottom: "5px",
          right: "0",
          marginRight: "4rem",
        }}
      >
        <IconButton
          aria-label="delete"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          <ArrowBackIosNewIcon
            sx={{
              width: "2.5rem",
              height: "2.5rem",
            }}
          />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={handleNext}
          disabled={activeStep === slider.length - 1}
        >
          <ArrowForwardIosIcon
            sx={{
              width: "2.5rem",
              height: "2.5rem",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default HomeCarousel;
