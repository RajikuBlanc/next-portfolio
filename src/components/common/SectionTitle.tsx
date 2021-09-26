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
      <h2 data-aos='fade-up' className={className}>
        {children}
      </h2>
    </>
  );
}
// --------------- Styled ---------------
export const SectionTitleRight = styled(SectionTitle)`
  font-size: 10rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--subprimary);
  z-index: 10;
  position: absolute;
  top: 2rem;
  right: 5rem;
  ${Medias.custom(1240)} {
    font-size: 6rem;
  }
  ${Medias.tab} {
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
