import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const NavLink = ({ navLink }) => {
  const theme = useTheme();
  return (
    <>
      <Link to="">
        <Typography
          variant="span"
          color={theme.palette.mode === "dark" ? "white" : "black"}
          sx={{
            marginRight: "0.5rem",
            fontSize: "1rem",
            letterSpacing: "4px",
            fontWeight: "bold",
            textTransform: "uppercase",
            display: "inline",
          }}
        >
          {navLink}.
        </Typography>
      </Link>
    </>
  );
};

export default NavLink;
