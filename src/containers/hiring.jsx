import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";

import useHover from "../hooks/useHover";

const Hiring = () => {
  const { isHovering, handleMouseOver, handleMouseOut } = useHover();
  const theme = useTheme();
  return (
    <Box
      sx={{ width: "100%", marginTop: "8rem", position: "relative" ,  transition: " all 0.8s ease-in-out",backgroundColor:
      theme.palette.mode === "dark" ? "#090909" : "white"}}
      component="section"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{
          padding: "120px 0",
          "&:hover": {
            // backgroundColor: isHovering ? "grey" : "black",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textTransform: "uppercase",
            "&:hover": {
              fontFamily: isHovering ? "'Londrina Outline', cursive" : "Inter",
            },
          }}
        >
          we are hiring
        </Typography>
        <Typography
          variant="p"
          sx={{ textTransform: "uppercase", fontSize: "14px" }}
        >
          dare and contact us immediatily
        </Typography>
      </Stack>
      {/* {isHovering ? (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            //   backgroundColor: "rgb(0,0,0,0.5)",
            backgroundColor: "red",
            width: "10%",
            height: "100%",
            color: "white",
            transition: " all 0.8s ease-in-out",
            //   display: "none",
            "&:hover": {
              // display: "block",
              width: "100%",
              height: "100%",
            //   backgroundColor: "grey",
            },
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        ></Box>
      ) : (
        ""
      )} */}
    </Box>
  );
};

export default Hiring;
