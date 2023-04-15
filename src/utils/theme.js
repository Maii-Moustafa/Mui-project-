import { createTheme } from "@mui/material/styles";

/** @param {"dark" | "light"} mode */
// const font =  "Inter, sans-serif";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            styleOverrides: {
              body: {
                backgroundColor: "#F9F9F9",
              },
            },

            secondary: {
              main: "#9E9E9E",
            },
            // palette values for light mode
            // primary: amber,
            divider: "black",
            background: {
              default: "#e6e6e6",
            },
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
            background: {
              default: "black",
              // paper: deepOrange[900],
           
            },
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
      MuiButtonBase: {
        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple, on the whole application 💣!
          backgroundColor: "black",
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            cursor: "none",
            "::-webkit-scrollbar": { display: "none" },

            // ...darkScrollbar(),
            // color: "black",

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
    // MuiButton: {
    //   styleOverrides: {
    //     root: ({ ownerState }) =>
    //       ownerState.disableRipple && {
    //         backgroundColor: "wheat",
    //       },
    //   },
    // },

    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": ["Inter", "sans-serif"].join(","),
        },
      },
    },
  });

export default getTheme;
