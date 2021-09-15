import Image from 'next/image';
import styled from 'styled-components';
import Ptext from '../common/Ptext';
import { SectionTitleRight } from '../common/SectionTitle';
import { ContainerStyle } from 'components/common/Container';

// --------------- Function ---------------
export default function AboutSection() {
  const likes = ['写真を撮ること', 'スノーボード', '新しい技術に触れること', '人に頼られること'];
  const description =
    '昔から手先が器用で、物作りが好きでした。自分で一からものを作って完成した時の達成感は何度でも味わいたくなります。また、自分に知識をつけることがとても好きです。自分が成長しているのを感じた時は努力してよかったと次の学習意欲の向上につながります。プログラミング学習を継続し続けられているのも、この学習意欲の向上と自分自身の成長がとても大きいと思っています。';
  return (
    <About_section>
      {/*  @ts-ignore */}
      <SectionTitleRight>about</SectionTitleRight>
      <ContainerStyle>
        <AboutInfo_div>
          <AboutImg_figure>
            <Image
              src='/images/about-img.jpg'
              alt='プロフィール画像'
              width={600}
              height={600}
            ></Image>
          </AboutImg_figure>
          <TextBox_div>
            <Ptext text='名前 : 本馬 遼太郎' />
            <Ptext text='生年月日 : 1997/07/30 23歳' />
            <Ptext text='好きなこと : ' />
            <ul>
              {likes.map((like, index) => {
                return <li key={index}>{like}</li>;
              })}
            </ul>
            <Ptext text='自己紹介 :' />
            <Description_p>{description}</Description_p>
          </TextBox_div>
        </AboutInfo_div>
      </ContainerStyle>
    </About_section>
  );
}

// --------------- Styled ---------------
const About_section = styled.section`
  position: relative;
  padding: 0 10rem;
  padding-top: 15rem;
  padding-bottom: 5rem;
  .Ptext {
    margin-bottom: 0.5rem;
  }
`;

const AboutInfo_div = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8rem;
`;
const AboutImg_figure = styled.figure`
  min-width: 600px;
  height: 600px;
`;

const TextBox_div = styled.div`
  max-width: 800px;
  width: 100%;
  ul,
  li {
    list-style: inside;
    color: var(--primary);
  }
  ul {
    margin-bottom: 1rem;
  }
  li {
    font-size: 1.8rem;
    margin-left: 5rem;
  }
  li span {
    color: var(--primary);
  }
`;

const Description_p = styled.p`
  font-size: 1.8rem;
  margin-left: 5rem;
  color: var(--primary);
  line-height: 1.5;
`;
