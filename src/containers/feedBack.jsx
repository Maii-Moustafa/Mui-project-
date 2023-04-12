import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Carousel from "react-material-ui-carousel";

import FeedbackCard from "../components/cards/FeedbackCard";
import AnimatedOnScrollTitle from "../components/shared/titles/animatedOnScrollTitle/AnimatedOnScrollTitle";

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
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "black",
          position: "relative",
          marginTop: "8rem",
        }}
        component="section"
      >
        <AnimatedOnScrollTitle title="Feedback from our clients." />

        <Stack direction="row" justifyContent="flex-end">
          <Carousel
            sx={{
              width: "50%",
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
          </Carousel>
        </Stack>
      </Box>
    </>
  );
};

export default FeedBack;
