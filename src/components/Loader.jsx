import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

export default function Loader(props) {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          zIndex: "-10",

          position: "relative",
          // height: "100vh",
        }}
      >
        <Box>
          <Typography
            variant="span"
            color="text.secondary"
            sx={{
              fontSize: "20rem",
              opacity: "0.1",
            }}
          >{`${Math.round(props.value)}`}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
        }}
      >
        <LinearProgress color="secondary" variant="determinate" {...props} />
      </Box>
    </Stack>
  );
}
