import React from "react";
// import { Keyframe } from 'react-native-reanimated';

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import Stack from "@mui/material/Stack";
import Carousel from "react-material-ui-carousel";

import PortfolioItem from "../slider/PortfolioItem";

import slider from "../slider/slider.json";
import style from "./style.css";

import cn from "classnames";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box } from "@mui/material";

function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(slider.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 120;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(slider.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (slider.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  return (
    <>
      <Carousel
        sx={{
          "& div:nth-of-type(2)": {
            right: "10px",
          },
          "& div:nth-of-type(3)": {
            left: "1440px",
          },
        }}
        swipe={true}
        //animation the letters
        // next={(next, active) =>
        //    console.log(`we left ${active}, and are now at ${next}`);

        // }
        // prev={(prev, active) =>
        //   console.log(`we left ${active}, and are now at ${prev}`)
        // }
        //------------------------------------ navButtons ------------------------------------
        fullHeightHover={false}
        NextIcon={
          <ArrowForwardIosIcon
            sx={{
              position: "relative",
              right: "150px",
              // top:"-40px",
              width: "2.5rem",
              height: "2.5rem",
            }}
          />
        }
        PrevIcon={
          <ArrowBackIosNewIcon
            sx={{
              position: "relative",
              // left: "1440px",
              // top:"-40px",
              width: "2.5rem",
              height: "2.5rem",
            }}
          />
        }
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            color: "white",
            backgroundColor: "transparent",
          },
        }}
        navButtonsWrapperProps={{
          // Move the buttons to the bottom. Unsetting top here to override default style.
          style: {
            bottom: "0",
            top: "unset",
          },
        }}
        //------------------------------------ Indicator ------------------------------------

        IndicatorIcon={slider.map((item, i) => (
          <Box
            // type="button"
            onClick={() => setActiveIndex(i)}
            className={cn("carousel-item", {
              active: activeIndex === i,
              visible: Math.abs(determinePlacement(i)) <= visibleStyleThreshold,
            })}
            key={item.id}
            style={{
              width: "100px",
              minHeight: "80px",
              maxHeight: "auto",
              transform: `translateY(${determinePlacement(i)}px)`,
            }}
          >
            <img
              style={{ maxWidth: "80px", height: "auto" }}
              key={item.id}
              src={item.photo}
            />
          </Box>
        ))}
        indicatorIconButtonProps={{
          style: {
            width: "100px",
            // height: "20px",
            // marginTop: "80px",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            zIndex: 50,
            // width: "300px",
            backgroundColor: "transparent",
            transition: "200px 2s ease-out",
          },
        }}
        indicatorContainerProps={{
          style: {
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            height: "300px",
            overflow: "hidden",
            zIndex: 500,
            top: "250px",
            // right: "300px",
          },
        }}
      >
        {slider.map((item, i) => (
          <PortfolioItem key={item.id} item={item} i={i + 1} />
        ))}
      </Carousel>
    </>
  );
}

export default PortfolioCarousel;
