import * as React from 'react';
import createCache from "@emotion/cache";
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
const cacheValue = createCache({
  key: "css",
  debug: true,
  stylisPlugins: [prefixer, rtlPlugin],
})
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='fa' dir='rtl'>
        <Head>
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel="apple-touch-icon" sizes="512×512" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const { extractCriticalToChunks } = createEmotionServer(cacheValue);
  /* eslint-disable */
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        <App emotionCache={cacheValue} {...props} />,
    });
  /* eslint-enable */
  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
