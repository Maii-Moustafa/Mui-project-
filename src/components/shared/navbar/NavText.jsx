import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

const NavText = ({ navText, color }) => {
  const theme = useTheme();
  return (
    <>
      <Typography
        variant="p"
        sx={{
          color: { color },
          fontSize: "1rem",
          letterSpacing: "4px",
          fontWeight: "bold",
          textTransform: "uppercase",
          display: "block",
          lineHeight:"1"
        }}
      >
        {navText}
      </Typography>
    </>
  );
};

export default NavText;
