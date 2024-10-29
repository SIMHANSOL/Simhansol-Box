import { CssBaseline, ThemeProvider } from '@mui/material';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Footer, Header } from '../components/layout';
import '../styles/global.css';
import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name={'viewport'}
          content={'initial-scale=1, width=device-width'}
        />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(App);
