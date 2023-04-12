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

function Home() {
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
      {/* <Landing /> */}
      {/* <HowSection /> */}
      <Container
        maxWidth="xl"
        // sx={{ flex: 1, my: 2  }}
        component="main"
        disableGutters
      >
        {/* <HelloSection /> */}
        <OurServices />

        <OurWork />
        <Product />
        <FeedBack />
        <LatestNews />
        <OurClients />
      </Container>
      <Hiring />
    </>
  );
}
export default Home;
