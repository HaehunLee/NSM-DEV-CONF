import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from './Header';
import { css } from '@emotion/react';

interface LayoutProps {
  children: React.ReactNode;
  pageProps: AppProps['pageProps'];
}

const Layout = ({ children, pageProps }: LayoutProps) => {
  const pageTitle = pageProps?.title ? `${pageProps?.title}` : '기본';
  const pageDescription = pageProps?.description
    ? `${pageProps?.description}`
    : '기본';
  const pageImage = pageProps?.pageImage ? `${pageProps?.pageImage}` : '기본';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property='og:title' content={pageTitle} />
        <meta name='twitter:title' content={pageTitle} />

        <meta name='description' content={pageDescription} />
        <meta property='og:description' content={pageDescription} />
        <meta name='twitter:description' content={pageDescription} />

        <meta property='og:image' content={pageImage} />
        <meta name='twitter:image' content={pageImage} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </Head>
      <div
        css={css`
          min-width: 1200px;
          padding: 0 160px;
        `}
      >
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
