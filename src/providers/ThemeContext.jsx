import { createContext, useCallback, useMemo, useState } from "react";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import getTheme from "../utils/theme";

export const ThemeContext = createContext({ toggleMode: () => {} });

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggleMode = useCallback(() => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  }, []);
  // const toggleMode = useCallback(() => {
  //   setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  // }, []);

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ toggleMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
