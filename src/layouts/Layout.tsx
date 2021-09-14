import { PropsWithChildren } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Header from './Header';

// --------------- Function ---------------
export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
