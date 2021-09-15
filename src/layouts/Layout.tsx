import { PropsWithChildren } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';

// --------------- Function ---------------
export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Contact />
      <Footer />
    </>
  );
}
