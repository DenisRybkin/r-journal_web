import React from "react";
import { theme } from "../../../utils/theme";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { RootStoreContext } from "../../../contexts/rootStoreContext";
import { rootStore } from "../../../stores/rootStore";
import { observer } from "mobx-react-lite";

export const CommonProviderView: React.FC = (props) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </MuiThemeProvider>
    </RootStoreContext.Provider>
  );
};
