import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from './Header';
import { css } from '@emotion/react';

interface LayoutProps {
  children: React.ReactNode;
  pageProps: AppProps['pageProps'];
}

const Layout = ({ children, pageProps }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>개발중</title>
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
