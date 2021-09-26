import styled from 'styled-components';
import { Medias } from 'styles/Media';
// --------------- Function ---------------
export default function CarrerText({ date, description }: { date: string; description: string }) {
  return (
    <CarrerTextStyle data-aos='fade-right'>
      <Date_p>{date}</Date_p>
      <Description_p>{description}</Description_p>
    </CarrerTextStyle>
  );
}
// --------------- Styled ---------------
const CarrerTextStyle = styled.div`
  display: flex;
  color: var(--white);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  ${Medias.tab} {
    flex-direction: column;
  }
  ${Medias.custom(480)} {
    font-size: 1.2rem;
  }
`;
const Date_p = styled.p`
  position: relative;
  padding-right: 11rem;
  ${Medias.tab} {
    padding-right: 0;
  }
  &::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 1px;
    background-color: var(--white);
    right: 2rem;
    top: 15px;
    ${Medias.tab} {
      display: none;
    }
  }
`;

const Description_p = styled.p`
  ${Medias.tab} {
    margin-left: 2rem;
  }
`;
