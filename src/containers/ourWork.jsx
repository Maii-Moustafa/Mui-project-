import { useRef, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import useHover from "../hooks/useHover";

import MainTitle from "../components/shared/titles/MainTitle.jsx";
import SubTitle from "../components/shared/titles/SubTitle.jsx";
import slider from "../../src/components/slider/slider.json";

const OurWork = () => {
  const { isHovering, handleMouseOver, handleMouseOut } = useHover();
  
  const [isVisible, setIsVisible] = useState();
  const WorkSectionRef = useRef();

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

    observer.observe(WorkSectionRef.current);
  }, []);
  return (
    <Box sx={{ width: "100%", marginTop: "8rem" }} component="section">
      <SubTitle subTitle="our work" />
      <MainTitle mainTitle="Creative Portfolio Designs" />

      <Box
        sx={{
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <ImageList
          ref={WorkSectionRef}
          // variant="woven"
          variant="masonry"
          cols={2}
          gap={8}
          sx={{
            "& li:nth-of-type(1)": {
              marginTop: "6rem",
            },
            "& li:nth-of-type(2)": {
              opacity: isVisible ? "1" : "0",
              transform: isVisible
                ? "translate3d(0, 0, 0) "
                : "translate3d(-60px, 0, 0)",
            },
            transition: "0.25s all ease-in-out ",

          }}
        >
          {slider.map((item) => (
            <ImageListItem key={item.photo}>
              <img
                src={`${item.photo}`}
                srcSet={`${item.photo}`}
                alt={item.title}
                loading="lazy"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />

              <ImageListItemBar
                key={item.id}
                title={item.category}
                subtitle={item.title}
                sx={{
                  // height: "100%",
                  textAlign: "center",
                  backgroundColor: "none",
                  // transition: "all 2s",
                  "&:hover": {
                    // backgroundColor: "rgb (0,0,0,0.5)",
                    // height: "100%",
                    height: "40%",
                    [`& .MuiImageListItemBar-title ,& .MuiImageListItemBar-subtitle `]:
                      {
                        // color:"red",
                        transform: "scale(1.5, 1.5)",
                      },
                  },
                }}
              />
              {/* {isHovering : } */}
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default OurWork;
