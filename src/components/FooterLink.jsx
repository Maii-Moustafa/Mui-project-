import Typography from "@mui/material/Typography";

export default function FooterLink({ link ,variant}) {
  return (
    <>
      <Typography
        variant={variant}
        sx={{
          display: "block",
          color: "grey",
          fontWeight: "700",
          fontSize: "14px",
          textTransform: "uppercase",
          letterSpacing:"2px",
          marginTop:"0.5"
        }}
      >
        {link}
      </Typography>
    </>
  );
}
