import Typography from "@mui/material/Typography";

export default function FooterText({ link, variant }) {
  return (
    <>
      <Typography
        variant={variant}
        sx={{
          display: "block",
          color: "grey",
          fontWeight: "bold",
          fontSize: "14px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginTop: "0.5",
          lineHeight: "1.1",
        }}
      >
        {link}
      </Typography>
    </>
  );
}
