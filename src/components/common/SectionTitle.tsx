import styled from 'styled-components';
import { Medias } from '../../styles/Media';

export default function SectionTitle({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  return (
    <>
      <h2 className={className}>{children}</h2>
    </>
  );
}
// --------------- Styled ---------------
export const SectionTitleRight = styled(SectionTitle)`
  font-size: 15rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--subprimary);
  z-index: 10;
  position: absolute;
  top: 0;
  right: 5rem;
  ${Medias.tab} {
    font-size: 6rem;
    right: 2.5rem;
  }
  ${Medias.custom(480)} {
    font-size: 3rem;
  }
`;
export const SectionTitleLeft = styled(SectionTitleRight)`
  left: 5rem;
  ${Medias.tab} {
    left: 2.5rem;
  }
`;
