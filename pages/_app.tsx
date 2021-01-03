import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Center } from "../components/Center/style";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { GlobalStyle, theme } from "../shared/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Head>
        <title>What's Next?</title>
      </Head>
      <Header />
      <main className="main">
        <Center>
          <Component {...pageProps} />
        </Center>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
