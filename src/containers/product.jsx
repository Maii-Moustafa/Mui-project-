import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import MyButton from "../components/shared/MyButton";

const helloPhoto = "../src/assets/images/watchProduct.jpg";

const Product = () => {
  return (
    <Box sx={{ width: "100%", marginTop: "8rem" }} component="section">
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Box
          sx={{
            position: "relative",
            backgroundImage: `url(
        ${helloPhoto} 
        )`,
            backgroundAttachment: "fixed",
            backgroundSize: "contain",
            padding: "40vh",
            objectFit: "cover",
          }}
        ></Box>
        <Stack direction="column" justifyContent="flex-start">
          <Typography
            variant="h1"
            sx={{
              marginTop: "1rem",
              letterSpacing: "2px",
            }}
          >
            Time Tag Watch.
          </Typography>
          <Typography
            variant="p"
            sx={{
              marginTop: "1rem",
              letterSpacing: "2px",
            }}
          >
            Sometimes, we need to check the time, wondering when our work or
            meeting will finish, without getting caught by others.
          </Typography>
          <Typography
            variant="p"
            color="secondary"
            sx={{
              marginTop: "1rem",
              letterSpacing: "2px",
            }}
          >
            To avoid your boss’s staring eye, you should not roll your eyes to
            check the time. The Time Tag Watch is a consummately appropriate for
            it. Those tags do the role of the hands of the watch. By rotating
            the face of the watch not the hands, it gets harder to be damaged.
            It provides you with experience to feel the time at the end of your
            finger without damaging your watch.
          </Typography>
          <MyButton content="Learn more" />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Product;
