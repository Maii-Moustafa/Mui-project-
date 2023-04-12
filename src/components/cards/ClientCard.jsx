import { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useHover from "../../hooks/useHover";

const ClientCard = ({ id, icon }) => {

  const { isHovering, handleMouseOver, handleMouseOut } = useHover();

  return (
    <>
      <Card
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0px",
          backgroundColor: "#090909",
          height: "250px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={icon} alt="" />
          <Box
            sx={{
              position: "absolute",
              top: "auto",
              bottom: "0",
              left: "0",
              width: "3rem",
              height: "3rem",
              borderTopRightRadius: "1rem",
              backgroundColor: "rgb(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              transition: " all 0.8s ease-in-out",
              // transitionDelay: "250ms",
              "&:hover": {
                width: "100%",
                height: "100%",
                backgroundColor: "rgb(0,0,0)",
                borderTopRightRadius: "0",
              },
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovering ? (
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                // sx={{
                //   transition: " all 0.8s ease-in-out",
                //   transitionDelay: "0.8s",
                // }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    fontWeight: "300",
                  }}
                >
                  DIGITAL PRODUCTS
                </Typography>
                <Typography
                  variant="p"
                  // component={a}
                  sx={{
                    color: "white",
                    fontWeight: "300",
                  }}
                >
                  www.google.com
                </Typography>
              </Stack>
            ) : (
              <Typography
                variant="span"
                sx={{
                  color: "white",
                  fontWeight: "300",
                  "&:hover": {
                    // display: "none",
                    color: "red",
                  },
                }}
              >
                +
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ClientCard;
