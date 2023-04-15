import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";

export default function LatestNewsCard({
  id,
  photo,
  category,
  title,
  description,
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "95%",
      }}
    >
      <CardMedia
        component="img"
        //  height="194"
        image={photo}
        alt={title}
      />
      <Card
        sx={{
          width: "85%",
          backgroundColor: "black",
          position: "relative",
          right: "-70px",
          top:"-50px"
        }}
      >
        <CardContent>
          <Box
            sx={{
              // width: "80%",
              // backgroundColor: "black",
            }}
          >
            <Typography
              color="secondary"
              variant="p"
              sx={{
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontSize: "14px",

                lineHeight: "1.2",
              }}
            >
              {category}
            </Typography>
            <Typography
              variant="h5"
              color={theme.palette.mode === "dark" ? "white" : "black"}
              sx={{
                marginTop: "1rem",
                letterSpacing: "2px",
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="p"
              color="secondary"
              sx={{
                paddingTop: "2rem",
                fontSize: "0.9rem",
              }}
            >
              {description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
