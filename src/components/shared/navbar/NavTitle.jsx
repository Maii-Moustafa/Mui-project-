import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

const NavTitle = ({ navTitle }) => {
  const theme = useTheme();
  return (
    <>
      <Typography
        variant="span"
        sx={{
          fontWeight: "bold",
          color: "#a56433",
          marginRight: "0.5rem",
          fontSize: "1rem",
          letterSpacing: "4px",
          textTransform: "uppercase",
          display: "inline",
        }}
      >
        {navTitle}
      </Typography>
    </>
  );
};

export default NavTitle;
