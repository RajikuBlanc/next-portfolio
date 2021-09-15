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
  color: var(--subprimary);
  z-index: 10;
  position: absolute;
  top: 0;
  right: 5rem;
  ${Medias.tab} {
    font-size: 10rem;
    right: 2.5rem;
  }
  ${Medias.custom(425)} {
    font-size: 6rem;
  }
  ${Medias.sp} {
    font-size: 5rem;
  }
`;
export const SectionTitleLeft = styled(SectionTitleRight)`
  left: 0;
`;
