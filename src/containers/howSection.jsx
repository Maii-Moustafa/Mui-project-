import Box from "@mui/material/Box";

import ParallaxImage from "../components/shared/parallaxImage";

const HowSection = () => {
  const howPhoto = "https://i.ibb.co/rb5ZNmh/how.jpg";

  return (
    <>
      <Box
        sx={{
          position: "relative",
          marginTop: "8rem",
        }}
        component="section"
      >
        <ParallaxImage image={howPhoto} children={<Box></Box>} />
        {/* <Box
          sx={{
            position: "absolute",
            //   top: "414px",
            top: "0",
            bottom: "0",
            left: "auto",
            right: "60px",
            width: "35%",

            backgroundColor: "rgb(0,0,0,0.5)",
            marginRight: "50px",
            padding: "80px",
          }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            sx={{
              color: "white",
              marginTop: "1rem",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                marginTop: "1rem",
                letterSpacing: "2px",
              }}
            >
              How is your visual identity?
            </Typography>
            <Typography
              variant="p"
              sx={{
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              A system that young people around the world with a club culture
              and techno enthusiasts feel identified. We generated a simple logo
              that is the basis for generating a geometric and liquid system.
            </Typography>
            <MyButton content="Learn more" />
          </Stack>
        </Box> */}
      </Box>
    </>
  );
};

export default HowSection;
