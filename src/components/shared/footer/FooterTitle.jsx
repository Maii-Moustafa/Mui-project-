import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";

const FooterTitle = ({ footerTitle }) => {
  const theme = useTheme();
  return (
    <>
      <Typography
        variant="h6"
        color={theme.palette.mode === "dark" ? "white" : "black"}
        sx={{
          // marginTop: "1rem",
        fontSize:"1rem",
          letterSpacing: "4px",
          fontWeight: "700",
          textTransform: "uppercase",
        }}
      >
        {footerTitle}
      </Typography>
      <Divider
        sx={{
          borderBottomWidth: '2px',
          marginBottom:"1rem",
          marginTop: "4px",
          width: "15px",
        }}
      />
    </>
  );
};

export default FooterTitle;
