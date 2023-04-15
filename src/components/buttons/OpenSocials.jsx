import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Divider from "@mui/material/Divider";

import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedCameraOutlinedIcon from "@mui/icons-material/LinkedCameraOutlined";

const actions = [
  {
    icon: (
      <Divider
        variant="middle"
        // flexItem
        sx={{
          display: "inline-block",
          width: "60px",
          color: "white",
          transition: "all 0.2s ",
        }}
      />
    ),
    name: "divider",
  },
  {
    icon: (
      <FacebookOutlinedIcon
        aria-label="scroll toggle"
        sx={{
          color: "white",
        }}
      />
    ),
    name: "facebook",
  },
  {
    icon: (
      <TwitterIcon
        sx={{
          color: "white",
        }}
      />
    ),
    name: "twitter",
  },
  {
    icon: (
      <LinkedCameraOutlinedIcon
        sx={{
          color: "white",
        }}
      />
    ),
    name: "insta",
  },
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
          // color: "black",
          [`& .MuiSpeedDial-fab `]: {
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        }}
        icon={
          <ShareOutlinedIcon
            sx={{
              color: "white",
              zIndex: 200,
            }}
          />
        }
      >
        {/* <Stack direction="row" alignItems="center">
         */}

        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={{
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          />
        ))}
        {/* </Stack> */}
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
