import React, { useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { themeDark } from '@/themes/dark';
import { PlayerProvider } from '@/contexts/PlayerContext';

export default function MyApp(props: AppProps): JSX.Element {
   const { Component, pageProps } = props;

   useEffect(() => {
      const jssStyles = document.querySelector('#jss-server-side');
      jssStyles?.parentElement?.removeChild(jssStyles);
   }, []);

   return (
      <ThemeProvider theme={themeDark}>
         <PlayerProvider>
            <Head>
               <title>XStream ・ Modern playlist manager</title>
            </Head>
            <CssBaseline />
            <Component {...pageProps} />
         </PlayerProvider>
      </ThemeProvider>
   );
}
