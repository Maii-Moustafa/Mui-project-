import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";

import { useTheme } from "@mui/material/styles";

import { Parallax } from "react-scroll-parallax";
import SwipeableViews from "react-swipeable-views-react-18-fix";

import FeedbackCard from "../components/cards/FeedbackCard";
import PaginationCarousel from "../components/PaginationCarousel";
import { useState } from "react";

const styles = {
  // root: {
  //   padding: "0 30px",
  // },
  // slideContainer: {
  //   width: "80%",
  // },
  slide: {
    // padding: 15,
    // width:"80%",
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    // background: "black",
    // overflow:"visible"
  },
};

const feedbacks = [
  {
    id: 1,
    avatar:
      "https://mindfulness.demo.zigzagpress.com/wp-content/uploads/sites/20/2010/08/team_02.jpg",
    avatarInfo: "Helen Ginsberg , CEO of treasure island",
    content:
      "The Brief team has been sincerely committed to designing great communication around our projects. Our customers love their  creative work - and so do we!",
  },
  {
    id: 2,
    avatar: "https://static.trendme.net/user_avatar/avatar_full_41185.jpg",
    avatarInfo: "Helen Ginsberg , CEO of treasure island",
    content:
      "  Stage direction, music, ballet, workshops, backstage, the GTG presents the first episode of the series “Les Indes galantes en création",
  },
  {
    id: 3,
    avatar:
      "https://envision.wptation.com/wp-content/uploads/2013/08/tyra_wood.jpg",
    avatarInfo: "Helen Ginsberg , CEO of treasure island",
    content:
      "The Brief team has been sincerely committed to designing great communication around our projects. Our customers love their  creative work - and so do we!",
  },
  {
    id: 4,
    avatar:
      "https://miart-detailing.com/wp-content/uploads/2021/11/8c94e22e8a422ff46758661db5924395.jpg",
    avatarInfo: "Helen Ginsberg , CEO of treasure island",
    content:
      "  Stage direction, music, ballet, workshops, backstage, the GTG presents the first episode of the series “Les Indes galantes en création",
  },
];

const FeedBack = () => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (index) => {
    setIndex(index);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#090909",

          marginTop: "8rem",
        }}
        component="section"
      >
        <Parallax
          speed={-3}
          style={{
            width: "30%",
            position: "relative",
          }}
        >
          <Typography
            variant="h2"
            color={theme.palette.mode === "dark" ? "grey" : "grey"}
            sx={{
              position: "absolute",
              marginTop: "1rem",
              letterSpacing: "2px",
              fontWeight: "700",
              left: "50px",
              top: "-30px",
              zIndex: 50,
            }}
          >
            Feedback from our clients.
          </Typography>
        </Parallax>

        <Stack direction="row" justifyContent="flex-end">
          <Box
            sx={{
              width: { sm: "100%", md: "60%", lg: "60%" },
              backgroundColor: "#090909",
              padding: "60px 0 60px 20px;",
            }}
          >
            <SwipeableViews
              // index={activeStep}
              enableMouseEvents
              // style={styles.root}
              // slideStyle={styles.slideContainer}
              index={index}
              onChangeIndex={handleChangeIndex}
            >
              {feedbacks.map((card, i) => (
                <div
                  key={card.id}
                  style={Object.assign({}, styles.slide, styles.slide1)}
                >
                  <FeedbackCard key={card.id} {...card} />
                </div>
              ))}
            </SwipeableViews>
            <PaginationCarousel
              index={index}
              onChangeIndex={handleChangeIndex}
            />
          </Box>
          {/* <Carousel
            sx={{
              width: { sm: "100%", md: "60%", lg: "60%" },
              backgroundColor: "#090909",
              padding: "60px 0 60px 20px;",
            }}
            navButtonsProps={{
              style: {
                display: "none",
              },
            }}
            navButtonsWrapperProps={{
              style: {
                display: "none",
              },
            }}
            IndicatorIcon={
              <Box
                sx={{
                  width: "10px",
                  backgroundColor: "grey",
                  height: "2px",
                  matgin: "2px",
                }}
              ></Box>
            }
            indicatorIconButtonProps={{
              style: {
                width: "20px",
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                backgroundColor: "white",
                width: "15px",
                opacity: 1,
              },
            }}
            indicatorContainerProps={{
              style: {
                // display: "flex",
                // flexDirection: "column",
                // position: "absolute",
                // zIndex: 50,
                // top: "100px",
              },
            }}
          >
            {feedbacks.map((card, i) => (
              <FeedbackCard key={card.id} {...card} />
            ))}
          </Carousel> */}
        </Stack>
      </Box>
    </>
  );
};

export default FeedBack;
