import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Layout from '../layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
