import styled from 'styled-components';
import Navigation from './Navigation';
import { Medias } from 'styles/Media';
// --------------- SSG ---------------

// --------------- Function ---------------
export default function Header() {
  return (
    <HeaderStyled>
      <Logo_h1>BLANC</Logo_h1>
      <NavStyle>
        <Navigation name='about' href='/#about' />
        <Navigation name='products' href='/#products' />
        <Navigation name='contact' href='/#contact' />
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
`;
const Logo_h1 = styled.h1`
  color: var(--white);
  font-size: 2.2rem;
`;

const NavStyle = styled.nav`
  display: flex;
  gap: 3rem;
  margin-left: 3rem;
  .navLink {
    color: var(--white);
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  ${Medias.tab} {
    display: none;
  }
`;
