import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
   render = (): JSX.Element => (
      <Html lang="en">
         <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
               href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
               rel="stylesheet"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}

MyDocument.getInitialProps = async (ctx) => {
   const sheets = new ServerStyleSheets();
   const originalRenderPage = ctx.renderPage;

   ctx.renderPage = () =>
      originalRenderPage({
         enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

   const initialProps = await Document.getInitialProps(ctx);

   return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
   };
};
