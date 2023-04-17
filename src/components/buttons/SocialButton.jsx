import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";



export default function SocialButton({icon}) {
  return (
    <IconButton
      //   color="primary"
      aria-label="scroll toggle"
      sx={{
        backgroundColor: "white",
        color: "black",

        "&:hover": { backgroundColor: "black", color: "white" },
      }}
    >
     {icon}
    </IconButton>
  );
}