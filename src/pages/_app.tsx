import AOS from 'aos';
import 'aos/dist/aos.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Layout from '../components/layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-out-sine',
      duration: 700,
    });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
