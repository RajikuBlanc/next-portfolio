import styled from 'styled-components';
import { Medias } from '../../styles/Media';
import { ContainerStyle } from '../common/Container';
// --------------- Function ---------------
import CarrerText from './CarrerText';
export default function CareerSection() {
  return (
    <Carrer_section data-aos='fade-up'>
      <ContainerStyle>
        <CarrerText date='2016/03' description='追手門学院大学心理学部心理学科 入学' />
        <CarrerText date='2020/04' description='追手門学院大学心理学部心理学科 卒業' />
        <CarrerText date='2020/08' description='公務員試験を受ける' />
        <CarrerText
          date='2020/10'
          description='筆記試験、面接共に合格したが、内定をいただけず1度公務員から離れる'
        />
        <CarrerText date='2020/11' description='プログラミングに出会う' />
        <CarrerText
          date='2020/11'
          description='株式会社アトモテックサービスでアルバイトとして働きながらプログラミング学習を進める'
        />
        <CarrerText
          date='2021/03'
          description='株式会社CLANEでインターン生としてフロントエンドやチームコーディングについて学ぶ'
        />
        <CarrerText date='2021/06' description='インターン生として初めて実務に参加' />
      </ContainerStyle>
    </Carrer_section>
  );
}
// --------------- Styled ---------------
const Carrer_section = styled.section`
  width: 100%;
  background-color: var(--primary);
  padding: 9rem 3rem;
  ${Medias.custom(480)} {
    padding: 3rem 2.5rem;
  }
`;
