import React from "react";
import { theme } from "../../../../utils/theme/index";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";

export const ThemeProvider: React.FC = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  );
};
