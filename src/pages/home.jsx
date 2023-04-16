import { useRef, useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Landing from "../containers/landing";
import FeedBack from "../containers/feedBack";
import HelloSection from "../containers/helloSection";
import HowSection from "../containers/howSection";
import LatestNews from "../containers/latestNews";
import OurClients from "../containers/ourClients";
import OurServices from "../containers/ourServices";
import OurWork from "../containers/ourWork";
import Product from "../containers/product";
import ThemeToggler from "../components/buttons/ThemeToggler";
import ScrollToggler from "../components/buttons/ScrollToggle";
import Footer from "../components/shared/Footer";
import Loading from "../containers/loading";
import Hiring from "../containers/hiring";
import MuiCarouselNew from "../components/slider/HomeCarousele";
import CarouselIndicators from "../components/slider/sliderIndicator";
import LandingCarousel from "../containers/landing 2";

function Home() {
  const myRef = useRef();
  const [isVisible, setIsVisible] = useState();
  console.log({ isVisible });
  useEffect(() => {
    // const observer = new IntersectionObserver(callback, options);
    //callback function fire anytime the visibility changes
    //entries -> list of all items that match the observer items
    //threshold percentafe visibilty on the screen
    //rootMargin container dimensions
    //root scrollable container default:body
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
        console.log("entry", entry);
        if (entry.isIntersecting) observer.unobserve(entry.target);
        //entry.intersectionRatio percentege  of the element visibility
      },
      {
        threshold: 1,
      }
    );
    //, options
    //myRef.current  -> element i am crefrencing
    observer.observe(myRef.current);
  }, []);

  return (
    <>
      {/* <Loading /> */}
      <Stack
        justifyContent="center"
        alignItems="flex-end"
        sx={{
          position: "fixed",
          top: "50vh",
          right: "0px",
          zIndex: "100",
        }}
      >
        <ThemeToggler />
        <ScrollToggler />
      </Stack>

      <LandingCarousel />

      <HowSection />
      <Product />
      <Container
        maxWidth="xl"
        // sx={{ flex: 1, my: 2  }}
        component="main"
        disableGutters
      >
        <HelloSection myRef={myRef} isVisible={isVisible} />
        <OurServices />
        <OurWork />

        <FeedBack />
        <LatestNews />
        <OurClients />
      </Container>
      <Hiring />
    </>
  );
}
export default Home;
