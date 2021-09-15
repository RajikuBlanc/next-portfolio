import styled from 'styled-components';
// --------------- Function ---------------
export default function Ptext({ text }: { text: string }) {
  return <Text_p className='Ptext'>{text}</Text_p>;
}

// --------------- Styled ---------------
const Text_p = styled.p`
  font-size: 1.8rem;
  color: var(--primary);
`;
