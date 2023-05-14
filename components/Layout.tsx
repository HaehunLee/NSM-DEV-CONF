import { AppProps } from 'next/app';
import Head from 'next/head';

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
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
