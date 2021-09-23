/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import { Medias } from 'styles/Media';

// --------------- Function ---------------
export default function Header() {
  const [showNav, setShowNav] = useState(true);
  const [burgerFixed, setBurgerFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 30) {
        setBurgerFixed(true);
      } else {
        setBurgerFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderStyled>
      <Link href='/'>
        <Logo_a>BLANC</Logo_a>
      </Link>
      <div
        className={!showNav ? 'burgerIcon close' : 'burgerIcon'}
        onClick={() => setShowNav(!showNav)}
        role='button'
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <span className={!burgerFixed ? 'burgerColor primary' : 'burgerColor'}></span>
      </div>
      <ul className={!showNav ? 'navList close' : 'navList'}>
        <li>
          <Link href='/#about'>
            <NavText_a
              onClick={() => setShowNav(!showNav)}
              role='button'
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              about
            </NavText_a>
          </Link>
        </li>
        <li>
          <Link href='/#products'>
            <NavText_a
              onClick={() => setShowNav(!showNav)}
              role='button'
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              products
            </NavText_a>
          </Link>
        </li>
        <li>
          <Link href='/#contact'>
            <NavText_a
              onClick={() => setShowNav(!showNav)}
              role='button'
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              contact
            </NavText_a>
          </Link>
        </li>
      </ul>
    </HeaderStyled>
  );
}

// --------------- Styled ---------------
const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: var(--primary);
  padding: 0 2.5rem;
  width: 100%;
  position: relative;
  z-index: 50;
  .burgerIcon {
    margin-left: 3rem;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    position: fixed;
    right: 2rem;
    top: 1rem;
    z-index: 999;
    overflow: hidden;
    cursor: pointer;
    span {
    }
  }
  .burgerIcon.close {
    span {
      background-color: var(--subprimary);
      top: 0;
      &::after {
        background-color: var(--primary);
        transform: rotate(45deg);
        top: 0;
      }
      &::before {
        background-color: var(--primary);
        transform: rotate(-45deg);
        top: 0;
      }
    }
  }
  .burgerColor {
    width: 100%;
    height: 3px;
    background-color: var(--white);
    position: relative;
    left: 0;
    transition: all 0.5s;
    &::before {
      position: absolute;
      top: 12px;
      content: '';
      width: 100%;
      height: 3px;
      background-color: var(--white);
      transition: all 0.5s;
    }
    &::after {
      position: absolute;
      bottom: 12px;
      content: '';
      width: 100%;
      height: 3px;
      background-color: var(--white);
      transition: all 0.5s;
    }
  }
  .burgerColor.primary {
    background-color: var(--subprimary);
    &::after {
      background-color: var(--subprimary);
    }
    &::before {
      background-color: var(--subprimary);
    }
  }
  .navList {
    z-index: 100;
    position: fixed;
    top: 0;
    right: -100%;
    max-width: 400px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--subprimary);
    gap: 3rem;
    padding: 8rem 2rem;
    transition: all 0.5s;
  }
  .navList.close {
    right: 0;
  }
`;

const Logo_a = styled.a`
  color: var(--white);
  font-size: 2.2rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavText_a = styled.a`
  color: var(--white);
  text-transform: uppercase;
  font-size: 1.5rem;
  cursor: pointer;
`;
