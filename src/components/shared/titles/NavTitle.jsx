import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";

const NavTitle = ({ navTitle }) => {
  const theme = useTheme();
  return (
    <>
      <Typography
        variant="h6"
        color={theme.palette.mode === "dark" ? "white" : "black"}
        sx={{
          marginTop: "1rem",
          letterSpacing: "2px",
          fontWeight: "700",
          textTransform: "uppercase",
        }}
      >
        {navTitle}
      </Typography>
      <Divider
        sx={{
          width: "30px",
        }}
      />
    </>
  );
};

export default NavTitle;
