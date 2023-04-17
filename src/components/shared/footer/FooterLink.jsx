import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function FooterLink({ link ,variant}) {
  return (
    <>
    <Link to="">
      <Typography
        variant={variant}
        sx={{
          display: "block",
          color: "grey",
        cursor:"pointer",
          fontSize: "14px",
          textTransform: "uppercase",
          letterSpacing:"2px",
          marginTop:"0.5"
        }}
      >
        {link}
      </Typography>
      </Link>
    </>
  );
}
