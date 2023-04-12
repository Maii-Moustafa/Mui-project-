import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function CursorBlendMode() {
  //
  document.body.onmousemove = function (e) {
    document.documentElement.style.setProperty(
      "--x",
      e.clientX + window.scrollX + "px"
    );
    document.documentElement.style.setProperty(
      "--y",
      e.clientY + window.scrollY + "px"
    );
  };

  return (
    <Box
      sx={{
        width: "2rem",
        height: "2rem",
        marginTop: "var(--y, 0)",
        marginLeft: "var(--x, 0)",
        position: "absolute",
        zIndex: 2000,
        backgroundColor: "white",
        borderRadius: "2rem",
        mixBlendMode: "difference",
        pointerEvents: "none",

        transform: " translate(-50%, -50%)",
        transition: "transform .1s",
      }}
    ></Box>
  );
}
