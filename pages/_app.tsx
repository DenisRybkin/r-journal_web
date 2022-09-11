import Head from "next/head";
import { Header } from "../App/components/layouts/header/Header";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "../App/utils/theme";
import "../styles/globals.scss";
import "../styles/variables.scss";
import "macro-css";
import { RootLayout } from "../App/components/layouts/rootLyaout/RootLayout";
import { CommonProvider } from "../App/components/services/commonProvider/CommonProvider";

function MyApp({ Component, pageProps }) {
  return (
    <CommonProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </CommonProvider>
  );
}

export default MyApp;
