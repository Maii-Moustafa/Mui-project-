import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";

export default function ScrollToggler() {
  return (
    <IconButton
      // size="small"
      //   color="primary"
      aria-label="scroll toggle"
      sx={{
        backgroundColor: "white",
        color: "black",
        marginTop: "5px",
        marginRight:"5px",
        "&:hover": { backgroundColor: "black", color: "white" },
      }}
    >
      <UnfoldMoreOutlinedIcon />
    </IconButton>
  );
}
