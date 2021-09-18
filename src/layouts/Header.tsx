/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import styled from 'styled-components';
import Navigation from './Navigation';
import { Medias } from 'styles/Media';
// --------------- SSG ---------------

// --------------- Function ---------------
export default function Header() {
  return (
    <HeaderStyled>
      <Link href='/'>
        <Logo_a>BLANC</Logo_a>
      </Link>
      <NavStyle>
        <Navigation name='about' />
        <Navigation name='products' />
        <Navigation name='contact' />
      </NavStyle>
    </HeaderStyled>
  );
}

// --------------- Styled ---------------
const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: var(--primary);
  padding: 0 2.5rem;
  width: 100%;
`;
const Logo_a = styled.a`
  color: var(--white);
  font-size: 2.2rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavStyle = styled.nav`
  display: flex;
  gap: 3rem;
  margin-left: 3rem;
  .navLink {
    color: var(--white);
    text-transform: uppercase;
    font-size: 1.5rem;
    cursor: pointer;
  }
  ${Medias.tab} {
    display: none;
  }
`;
