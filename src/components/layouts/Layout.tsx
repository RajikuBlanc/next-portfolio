import Head from 'next/head';
import { PropsWithChildren } from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Header from './Header';

// --------------- Function ---------------
export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Head>
        <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
        <meta httpEquiv='content-language' content='ja' />
        <title>Blanc My Portfolio</title>
        <meta name='description' content='ポートフォリオ' />
        <meta name='keywords' content='portfolio' />
        <meta property='og:title' content='Blanc My Portfolio' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://next-portfolio-theta-lake.vercel.app/' />
        <meta property='og:description' content='ポートフォリオ' />
        <meta property='og:site_name' content='Blanc My Portfolio' />
        <link
          rel='icon'
          href='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/whale_1f40b.png'
        />
      </Head>
      <GlobalStyles />

      <Header />
      <main>{children}</main>
      <div id='contact'></div>
      <ContactSection />
      <Footer />
    </>
  );
}
