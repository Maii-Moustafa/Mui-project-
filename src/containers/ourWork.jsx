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
          // variant="woven"
          variant="masonry"
          cols={2}
          gap={8}
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
                    [`& .MuiImageListItemBar-title ,& .MuiImageListItemBar-subtitle `]: {
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
