import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeContext";
import { useTheme } from "@mui/material/styles";

export default function ThemeToggler() {
  const theme = useTheme();
  //current theme
  //theme toggler

  const { toggleMode } = useContext(ThemeContext);

  return (
    <IconButton
      aria-label="toggle Mode"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "white" : "black",
        color: (theme) => (theme.palette.mode === "dark" ? "black" : "white"),

        "&:hover": (theme) =>
          theme.palette.mode === "light"
            ? { backgroundColor: "white", color: "black" }
            : {
                backgroundColor: "black",
                color: "white",
                border: "1px solig grey",
              },
      }}
      onClick={() => {
        toggleMode();
      }}
    >
      {
        theme.palette.mode === "light" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )
      }
    </IconButton>
  );
}
