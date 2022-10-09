import "../styles/globals.scss";
import "../styles/variables.scss";
import "macro-css";
import { RootLayout } from "../App/components/layouts/rootLyaout/RootLayout";
import { RootProvider } from "../App/components/services/providers/rootProvider/RootProvider";

function MyApp({ Component, pageProps }) {
  return (
    <RootProvider pageProps={pageProps}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </RootProvider>
  );
}

export default MyApp;
