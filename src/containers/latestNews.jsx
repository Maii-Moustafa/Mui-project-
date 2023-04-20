import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Carousel from "react-material-ui-carousel";

import MainTitle from "../components/shared/titles/MainTitle.jsx";
import SubTitle from "../components/shared/titles/SubTitle.jsx";
import LatestNewsCard from "../components/cards/LatestNewsCard.jsx";

import SwipeableViews from "react-swipeable-views-react-18-fix";
import PaginationCarousel from "../components/PaginationCarousel.jsx";

const styles = {
  root: {
    padding: "0 30px",
  },
  slideContainer: {
    width: "45%",
    padding: "0 10px",
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    // background: "black",
  },
};
const lastNews = [
  {
    id: 1,
    photo: "https://i.ibb.co/SVBBmtx/1.jpg",
    category: "photography , brand",
    title: "Digital photography tips",
    description:
      "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
  },
  {
    id: 2,
    photo: "https://i.ibb.co/5hLn29N/2.jpg",
    category: "photography , brand",
    title: "Digital photography tips",
    description:
      "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
  },
  {
    id: 3,
    photo: "https://i.ibb.co/bN5H2yX/3.jpg",
    category: "photography , brand",
    title: "Digital photography tips",
    description:
      "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
  },
  {
    id: 4,
    photo: "https://i.ibb.co/SVBBmtx/1.jpg",
    category: "photography , brand",
    title: "Digital photography tips",
    description:
      "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
  },
  {
    id: 5,
    photo: "https://i.ibb.co/5hLn29N/2.jpg",
    category: "photography , brand",
    title: "Digital photography tips",
    description:
      "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
  },
  {
    id: 6,
    photo: "https://i.ibb.co/bN5H2yX/3.jpg",
    category: "photography , brand",
    title: "Digital photography tips",
    description:
      "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
  },
];

const LatestNews = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        marginTop: "8rem",
        // width: {xs:"100%", sm: "100%", md: "100%", lg: "80%" },
      }}
    >
      <SubTitle subTitle="LATEST NEWS" />
      <MainTitle mainTitle="Latest & Greatest Post" />
      <SwipeableViews
        // index={activeStep}
        enableMouseEvents
        style={styles.root}
        slideStyle={styles.slideContainer}
      >
        {lastNews.map((card, i) => (
          <div
            key={card.id}
            style={Object.assign({}, styles.slide, styles.slide1)}
          >
            <LatestNewsCard key={card.id} {...card} />
          </div>
        ))}
       
      </SwipeableViews>
      <PaginationCarousel/>
    </Box>
  );
};

export default LatestNews;

// -------------------------- react slick demo
// var settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
// };

// <Box sx={{ width: "100%", marginTop: "8rem" }} component="section">
//   <SubTitle subTitle="LATEST NEWS" />
//   <MainTitle mainTitle="Latest & Greatest Post" />

//   <Slider {...settings}>
//     {lastNews.map((card) => {
//       return <LatestNewsCard  key={card.id} {...card} />;
//     })}
//   </Slider>

// </Box>
