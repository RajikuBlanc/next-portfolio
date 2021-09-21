import Head from 'next/head';
import { PropsWithChildren } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Header from './Header';

// --------------- Function ---------------
export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Head>
        <title>Blanc My Portfolio</title>
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
