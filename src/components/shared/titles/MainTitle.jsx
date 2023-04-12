import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const MainTitle = ({ mainTitle }) => {
  const theme = useTheme();
  return (
    <Typography
      variant="h2"
      color={theme.palette.mode === "dark" ? "white" : "black"}
      sx={{
        marginTop: "1rem",
        letterSpacing: "2px",
        fontWeight: "700",
      }}
    >
      {mainTitle}
    </Typography>
  );
};

export default MainTitle;
