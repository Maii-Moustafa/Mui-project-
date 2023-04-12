import { createTheme } from "@mui/material/styles";

/** @param {"dark" | "light"} mode */
// const font =  "Inter, sans-serif";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            secondary: {
              main: "#9E9E9E",
            },
            // palette values for light mode
            // primary: amber,
            divider: "black",
            // text: {
            //   primary: grey[900],
            //   secondary: grey[800],
            // },
          }
        : {
            // palette values for dark mode
            // primary: deepOrange,
            secondary: {
              main: "#9E9E9E",
            },

            divider: "#9E9E9E",
            "&:hover": {
              backgroundColor: "",
            },
            // background: {
            //   default: deepOrange[900],
            //   paper: deepOrange[900],
            // },
            text: {
              // primary: "#fff",
              secondary: "#9E9E9E",
            },
          }),
    },
    typography: {
      // fontFamily: ["Inter", "sans-serif"].join(","),

      h1: {
        fontSize: 50,
      },
      h2: {
        fontSize: 40,
      },
      h3: {
        fontSize: 30,
      },
      p: {
        fontSize: 18,
        fontWeight: 500,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            cursor: "none",
            "::-webkit-scrollbar": { display: "none" },

            // ...darkScrollbar(),
            // color: "black",
            // backgroundColor: "white",
            // "& h1": {
            //   color: "black",
            // },
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          maxWidthSm: {
            maxWidth: 200,
          },
          maxWidthMd: {
            maxWidth: 320,
          },
          maxWidthLg: {
            maxWidth: "90%",
          },
          maxWidthXl: {
            maxWidth: 1000,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) =>
          ownerState.disableRipple && {
            backgroundColor: "wheat",
          },
      },
    },

    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": ["Inter", "sans-serif"].join(","),
        },
      },
    },
  });

export default getTheme;
