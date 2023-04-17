import { useParallax, ParallaxBanner } from "react-scroll-parallax";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MyButton from "./MyButton";
import Image from "./Image";

export default function ParallaxImage({ image, children }) {
  //   const parallax = useParallax({
  //     speed: -10,
  //     translateY: [-100, 100, "easeInOut"],
  //     scale: [0, 1, "easeOutBack"],
  //   });

  //   console.log(children);
  return (
    // <Image src="../src/assets/images/watchProduct.jpg" ref={parallax.ref} />
    <ParallaxBanner
      layers={[
        {
          image: "https://i.ibb.co/rb5ZNmh/how.jpg",
          speed: 20,
          //   easing: [0.2, -0.6, 1, -0.6],
          // easing:"easeInQuad"
          children: (
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "none", lg: "block" },
                position: "absolute",
                //   top: "414px",
                top: "100px",
                bottom: "0",
                left: "auto",
                right: "60px",
                // width: {sm:"0", md: "0", lg: "35%" } ,
                width: "35%" ,

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
                  color="secondary"
                  sx={{
                    marginTop: "30px",
                    marginBottom: "30px",
                  }}
                >
                  A system that young people around the world with a club
                  culture and techno enthusiasts feel identified. We generated a
                  simple logo that is the basis for generating a geometric and
                  liquid system.
                </Typography>
                <MyButton content="Learn more" />
              </Stack>
            </Box>
          ),
        },
      ]}
      className="aspect-[2/1]"
      style={{ height: "80vh" }}
    />
  );
}
