import Grid from "@mui/material/Grid";

import ServicesCard from "../components/cards/ServicesCard";
import MainTitle from "../components/shared/titles/MainTitle.jsx";
import SubTitle from "../components/shared/titles/SubTitle.jsx";
import Box from "@mui/material/Box";

const services = [
  {
    id: 1,
    icon: "../src/assets/icons/1.png",
    title: "DIGITAL PRODUCTS",
    description:
      "Web design encompasses many different skills and disciplines in the production of all web.",
  },
  {
    id: 2,
    icon: "../src/assets/icons/2.png",
    title: "UI-UX DESIGN",
    description:
      "Web design encompasses many different skills and disciplines in the production of all web.",
  },
  {
    id: 3,
    icon: "../src/assets/icons/3.png",
    title: "WEB DEVELOPMENT",
    description:
      "Web design encompasses many different skills and disciplines in the production of all web.",
  },
];

const OurServices = () => {
  return (
    <Box sx={{ width: "100%", marginTop: "8rem" }} component="section">
      <SubTitle subTitle="our services" />
      <MainTitle mainTitle="New Branding Agency" />
      <Grid container sx={{
        marginTop: "2rem",
      }}>
        {services.map((card) => {
          return (
            <Grid key={card.id} item xs={12} md={4} >
              <ServicesCard key={card.id} {...card} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default OurServices;
