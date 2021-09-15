import styled from 'styled-components';
// --------------- Function ---------------
export default function CarrerText({ date, description }: { date: string; description: string }) {
  return (
    <CarrerTextStyle>
      <Date_p>{date}</Date_p>
      <p>{description}</p>
    </CarrerTextStyle>
  );
}
// --------------- Styled ---------------
const CarrerTextStyle = styled.div`
  display: flex;
  color: var(--white);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;
const Date_p = styled.p`
  position: relative;
  padding-right: 11rem;
  &::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 1px;
    background-color: var(--white);
    right: 2rem;
    top: 15px;
  }
`;
