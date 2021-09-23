/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import styled from 'styled-components';

// --------------- Function ---------------
export default function Navigation({ name, href }: { name: string; href: string }) {
  return (
    <Link href={href}>
      <NavText_a>{name}</NavText_a>
    </Link>
  );
}

const NavText_a = styled.a`
  color: var(--white);
  text-transform: uppercase;
  font-size: 1.5rem;
  cursor: pointer;
`;
