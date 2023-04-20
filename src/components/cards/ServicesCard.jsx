import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useTheme } from "@emotion/react";

const ServicesCard = ({ id, icon, title, description }) => {
  //--------------- state ---------------
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          position: "relative",
          border: "1px solid ",
          borderColor: theme.palette.mode === "dark" ? "#9E9E9E" : "black",
          height: "40vh",
          marginTop: { sm: "0.5rem", md: "0.5rem" },
          "&::before": {
            content: '""',
            position: "absolute",
            height: "80%",
            width: "90%",
            top: "-1px",
            left: "15%",
            backgroundColor:
              theme.palette.mode === "dark" ? "black" : "#e6e6e6",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            height: "80%",
            width: "85%",
            top: "25%",
            left: "-1px",
            backgroundColor:
              theme.palette.mode === "dark" ? "black" : "#e6e6e6",
          },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          <img src={icon} alt={title} style={{ width: "15%" }} />

          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              paddingTop: "1.5rem",
              fontWeight: "bold",
              color: theme.palette.mode === "dark" ? "white" : "black",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="p"
            color="secondary"
            sx={{
              textAlign: "center",
              paddingTop: "1.8rem",
              fontWeight: "bold",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Box>
    </>
  );
};

export default ServicesCard;
