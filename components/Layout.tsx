import { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

const Header = dynamic(() => import('../components/Header'), { ssr: false });

interface LayoutProps {
  children: React.ReactNode;
  pageProps: AppProps['pageProps'];
}

const Layout = ({ children, pageProps }: LayoutProps) => {
  const pageTitle = pageProps?.title ? `${pageProps?.title}` : 'NSM DEV CONF';
  const pageDescription = pageProps?.description
    ? `${pageProps?.description}`
    : 'This site is NSM DEV CONF';
  const pageImage =
    'https://raw.githubusercontent.com/dus532/storage_home/main/thumb.png';

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
      <Root>
        <Header />
        <main>{children}</main>
      </Root>
    </>
  );
};

export default Layout;

const Root = styled.div`
  min-width: 1200px;
  padding: 0 160px;
`;
