import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Loader from "../components/Loader";
import Image from "../components/shared/Image";

export default function LinearWithValueLabel() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 400);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // console.log(progress);
  return (
    <Box
      height="100vh"
      width="100%"
      sx={{
       
        padding: "0px",
        margin: "0",
        position: "relative",
        zIndex:"-12"
      }}
    >
      {progress == 100 && (
        <>
          {/* <Paper
            elevation={0}
            sx={{
              position: "absolute",
              width: "100%",
              height: "50vh",
              backgroundColor: "black",
              zIndex: 2,
              display: progress == 100 ? "block" : "none",
              transform:
                progress == 100
                  ? "translate3d(0, 0 , 0) "
                  : "translate3d(0, -60vh, 0)",
              transition: "0.25s all ease-out ",
              transitionDelay: "0.3s",
            }}
          ></Paper> */}
          {/* <Paper
            elevation={0}
            sx={{
              width: "100%",
              height: "50vh",
              backgroundColor: "black",
              zIndex: 2,
              display: progress == 100 ? "block" : "none",
              transform:
                progress == 100
                  ? "translate3d(0, 60vh , 0) "
                  : "translate3d(0, 0, 0)",
              transition: "0.2s all ease-in-out ",
              transitionDelay:"0.25s"
            }}
          ></Paper> */}
        </>
      )}
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          //  backgroundColor: "black",
          height: "100vh",
        }}
      >
        <Typography
          sx={{
            // display:progress == 100?"none" : "inline-block",
            color: "white",
            margin: "2rem",
            fontSize: "3rem",
            transform:
              progress == 100
                ? "translate3d(0, -60vh , 0) "
                : "translate3d(0, 0, 0)",
            transition: "0.25s all ease-in-out ",
          }}
        >
          D R O O W
        </Typography>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            zIndex: "-10",
          }}
        >
          <Loader value={progress} />
        </Box>
        <Typography
          sx={{
            color: "white",
            margin: "2rem",
            transform:
              progress == 100
                ? "translate3d(0, 60vh , 0) "
                : "translate3d(0, 0, 0)",
            transition: "0.25s all ease-in-out ",
          }}
        >
          LOADING . . .
        </Typography>
      </Stack>
    </Box>
  );
}

// export default function Loading({ animationEnd }) {
//   const [progress, setProgress] = useState(0);
//   console.log(progress);
//   return (
//     <Box
//       height="100vh"
//       width="100%"
//       sx={{
//         // backgroundColor: "black",
//         padding: "0px",
//         margin: "0",
//         position: "relative",
//       }}
//     >
//       {animationEnd && (
//         <>
//           <Paper
//             elevation={0}
//             sx={{
//               width: "100%",
//               height: "50vh",
//               backgroundColor: "red",
//               zIndex: 2,
//               //   display: animationEnd ? "block" : "none",
//             }}
//           ></Paper>
//           <Paper
//             elevation={0}
//             sx={{
//               width: "100%",
//               height: "50vh",
//               backgroundColor: "yellow",
//               zIndex: 2,
//             }}
//           ></Paper>
//         </>
//       )}

//       <Stack
//         direction="column"
//         justifyContent="center"
//         alignItems="center"
//         sx={{
//           //   position: "absolute",
//           textAlign: "center",
//         }}
//       >
//         <Image src="../src/assets/logo.png" />
//         <Loader progress={progress} setProgress={setProgress} />
//         <Typography
//           sx={{
//             color: "white",
//           }}
//         >
//           LOADING
//         </Typography>
//       </Stack>
//     </Box>
//   );
// }
