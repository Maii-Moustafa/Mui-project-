// import Stack from "@mui/material/Stack";
// import IconButton from "@mui/material/IconButton";

//
// import useHover from "../../../hooks/useHover";
// import Socials from "./Socials";

// export default function ShowSocials() {
//   const { isHovering, handleMouseOver, handleMouseOut } = useHover();
//   return (
//     // <>
//     //   <IconButton
//     //     //   color="primary"
//     //     aria-label="scroll toggle"
//     //     sx={{
//     //       color: "black",
//     //       zIndex: 200,
//     //     }}
//     //     onMouseOver={handleMouseOver}
//     //     onMouseOut={handleMouseOut}
//     //   >
//     //     <ShareOutlinedIcon />
//     //     {isHovering ? <Socials /> : ""}
//     //   </IconButton>
//     // </>

//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedCameraOutlinedIcon from "@mui/icons-material/LinkedCameraOutlined";

const actions = [
  {
    icon: (
      <FacebookOutlinedIcon
        aria-label="scroll toggle"
        sx={{
          color: "white",
          "&:hover": { color: "black" },
        }}
      />
    ),
    name: "facebook",
  },
  { icon: <TwitterIcon />, name: "twitter" },
  { icon: <LinkedCameraOutlinedIcon />, name: "insta" },
];

export default function OpenSocials() {
  const [direction, setDirection] = React.useState("right");
  const [hidden, setHidden] = React.useState(false);

  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        direction={direction}
        hidden={hidden}
        sx={{
          position: "absolute",
          right: "-294px",
          top: "260px",
          color: "black",
          [`& .MuiSpeedDial-fab `]: {
            backgroundColor: "black",
          },
        }}
        icon={
          <ShareOutlinedIcon
            sx={{
              color: "white",
              zIndex: 200,
              backgroundColor: "none",
            }}
          />
        }
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
// FabProps={{
//   sx: {
//     bgcolor: 'secondary.main',
//     '&:hover': {
//       bgcolor: 'secondary.main',
//     }
//   }
// }}
