import styled from 'styled-components';
import { Medias } from '../../styles/Media';
// --------------- Function ---------------
export default function Ptext({ text }: { text: string }) {
  return <Text_p className='Ptext'>{text}</Text_p>;
}

// --------------- Styled ---------------
const Text_p = styled.p`
  font-size: 1.8rem;
  color: var(--primary);
  ${Medias.custom(480)} {
    font-size: 1.2rem;
  }
`;
