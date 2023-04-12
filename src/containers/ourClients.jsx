import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ClientCard from "../components/cards/ClientCard";
import MainTitle from "../components/shared/titles/MainTitle.jsx";
import SubTitle from "../components/shared/titles/SubTitle.jsx";

const clients = [
  {
    id: 1,
    icon: "../src/assets/clients/1.png",
  },
  {
    id: 2,
    icon: "../src/assets/clients/2.png",
  },
  {
    id: 3,
    icon: "../src/assets/clients/3.png",
  },
  {
    id: 4,
    icon: "../src/assets/clients/4.png",
  },
  {
    id: 5,
    icon: "../src/assets/clients/5.png",
  },
  {
    id: 6,
    icon: "../src/assets/clients/6.png",
  },
];

const OurClients = () => {
  return (
    <Box sx={{ width: "100%", marginTop: "8rem" }} component="section">
      <SubTitle subTitle="our clients" />
      <MainTitle mainTitle="Your successful, ourreputation" />
      <Grid container sx={{
        marginTop: "2rem",
      }}>
        {clients.map((card) => {
          return (
            <Grid key={card.id} item xs={12} md={6} lg={4}>
              <ClientCard key={card.id} {...card} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default OurClients;
