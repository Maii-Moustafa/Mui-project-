import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Loader from "../components/Loader";
import Image from "../components/shared/Image";
import { Margin } from "@mui/icons-material";

export default function Loading({ animationEnd }) {
  console.log(animationEnd);
  return (
    <Box
      height="100vh"
      width="100%"
      sx={{
        // backgroundColor: "black",
        padding: "0px",
        margin: "0",
        position: "relative",
      }}
    >
      {animationEnd && (
        <>
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              height: "50vh",
              backgroundColor: "red",
              zIndex: 2,
            //   display: animationEnd ? "block" : "none",
            }}
          ></Paper>
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              height: "50vh",
              backgroundColor: "yellow",
              zIndex: 2,
            }}
          ></Paper>
        </>
      )}

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
        //   position: "absolute",
          textAlign: "center",
        }}
      >
        <Image src="../src/assets/logo.png" />
        <Loader />
        <Typography
          sx={{
            color: "white",
          }}
        >
          LOADING
        </Typography>
      </Stack>
    </Box>
  );
}
