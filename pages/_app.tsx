import type { AppProps } from 'next/app';

import Layout from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnReconnect: true,
            refetchOnWindowFocus: false,
            retry: 0,
            cacheTime: 1000 * 60 * 30, // TODO: 임시
            staleTime: 1000 * 60 * 30, // TODO: 임시
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
