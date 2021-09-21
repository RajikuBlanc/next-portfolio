/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import styled from 'styled-components';
import { Medias } from '../../styles/Media';

// --------------- Function ---------------
export default function ViewMoreButton({ link }: { link: string }) {
  return (
    <ViewMoreButton_div>
      <Link href={link}>
        <LinkText_a>View More</LinkText_a>
      </Link>
    </ViewMoreButton_div>
  );
}

// --------------- Styled ---------------
const ViewMoreButton_div = styled.div`
  position: absolute;
  bottom: 0;
  right: 6rem;
`;
const LinkText_a = styled.a`
  font-size: 4.6rem;
  color: var(--primary);
  cursor: pointer;
  display: block;
  position: relative;
  transition: all 1s;
  &::after {
    position: absolute;
    right: -6rem;
    bottom: -1rem;
    content: '';
    width: 500px;
    height: 50px;
    background-image: url('/svg/arrow-right.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: all 1s;
    ${Medias.tab} {
      width: 400px;
    }
  }
  &:hover {
    opacity: 0.7;
    &::after {
      right: -8rem;
    }
  }
  ${Medias.sp} {
    font-size: 3.5rem;
  }
`;
