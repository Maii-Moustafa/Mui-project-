import Typography from "@mui/material/Typography";

import useScrollDirection from "../../../../hooks/useScrollDirection";

import style from "./style.css";

export default function AnimatedOnScrollTitle({ title }) {
  const scrollDirection = useScrollDirection();

  return (
    <Typography
      // className="lineUp"
      sx={{
        position: "absolute",
        zIndex: 50,
        color: "white",
        top: "-30px",
      }}
      className={` ${scrollDirection === "down" ? "lineDown" : "lineUp"}`}
      variant="h2"
    >
      {title}
    </Typography>
  );
}
