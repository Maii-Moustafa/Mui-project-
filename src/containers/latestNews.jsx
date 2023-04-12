import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Carousel from "react-material-ui-carousel";

import MainTitle from "../components/shared/titles/MainTitle.jsx";
import SubTitle from "../components/shared/titles/SubTitle.jsx";
import LatestNewsCard from "../components/cards/LatestNewsCard.jsx";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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
];
const LatestNews = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Box sx={{ width: "100%", marginTop: "8rem" }} component="section">
      <SubTitle subTitle="LATEST NEWS" />
      <MainTitle mainTitle="Latest & Greatest Post" />
      <Slider {...settings}>
        {lastNews.map((card) => {
          return <LatestNewsCard key={card.id} {...card} />;
        })}
      </Slider>
      {/* <Grid
        container
        sx={{
          marginTop: "2rem",
        }}
      >
        <Carousel sx={{width:"100%"}}>
          {lastNews.map((card) => {
            return (
              <Grid key={card.id} 
            //   item xs={12} md={6} lg={4}
              >
                <LatestNewsCard key={card.id} {...card} />
              </Grid>
            );
          })}
        </Carousel>
      </Grid> */}
    </Box>
  );
};

export default LatestNews;
