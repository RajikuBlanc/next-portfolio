import Link from 'next/link';
import styled from 'styled-components';
// --------------- Function ---------------
export default function Navigation({ name, href = '/' }: { name: string; href: string }) {
  return (
    <Link href={href}>
      <a className='navLink'>{name}</a>
    </Link>
  );
}

// --------------- Styled ---------------
