/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { Medias } from '../../styles/Media';
import { CMSProductProps } from '../../types/product';
import Ptext, { Text_p } from '../common/Ptext';
import ViewMoreButton from '../common/ViewMoreButton';
export default function ProductItem({
  productData,
}: {
  productData: CMSProductProps;
}): JSX.Element {
  return (
    <>
      {productData.map((product, index) => {
        const num = index + 1;
        if (num % 2 === 0) {
          return (
            <PostItem_li key={product.id} data-aos='fade-right'>
              {/* LeftBox */}
              <LeftBox_div>
                <Link href={`/${product.id}`}>
                  <ImageLink_a>
                    <Image
                      src={product.thumbnail.url}
                      alt='サムネイル画像'
                      width={600}
                      height={400}
                    ></Image>
                  </ImageLink_a>
                </Link>
              </LeftBox_div>
              {/* RightBox */}
              <RightBox_div>
                <Ptext text={product.title} />
                <Ptext text={`制作期間 : ${product.date}`} />
                <ul>
                  <Ptext text='使用技術 :' />
                  {product.skill.map((skill) => {
                    return (
                      <SkillText_li as='li' key={skill.id}>
                        {skill.name}
                      </SkillText_li>
                    );
                  })}
                </ul>
                <Link href={`/${product.id}`}>
                  <Number_a>{num}</Number_a>
                </Link>
                {/* MoreButton */}
                <ViewMoreButton link={`/${product.id}`} />
              </RightBox_div>
            </PostItem_li>
          );
        } else {
          return (
            <PostItemLeft_li key={product.id} data-aos='fade-left'>
              {/* LeftBox */}
              <LeftBox_div>
                <Link href={`/${product.id}`}>
                  <ImageLink_a>
                    <Image
                      src={product.thumbnail.url}
                      alt='サムネイル画像'
                      width={600}
                      height={400}
                    ></Image>
                  </ImageLink_a>
                </Link>
              </LeftBox_div>
              {/* RightBox */}
              <RightBox_div>
                <Ptext text={product.title} />
                <Ptext text={`制作期間 : ${product.date}`} />
                <ul>
                  <Ptext text='使用技術 :' />
                  {product.skill.map((skill) => {
                    return (
                      <SkillText_li as='li' key={skill.id}>
                        {skill.name}
                      </SkillText_li>
                    );
                  })}
                </ul>
                <Link href={`/${product.id}`}>
                  <NumberPrimary_a>{num}</NumberPrimary_a>
                </Link>
                {/* MoreButton */}
                <ViewMoreButton link={`/${product.id}`} />
              </RightBox_div>
            </PostItemLeft_li>
          );
        }
      })}
    </>
  );
}
// --------------- Styled ---------------
const PostItem_li = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  ${Medias.custom(1024)} {
    flex-direction: column;
    align-items: center;
    gap: 7rem;
  }
  ${Medias.sp} {
    gap: 3rem;
  }
`;
const PostItemLeft_li = styled(PostItem_li)`
  flex-direction: row-reverse;
  ${Medias.custom(1024)} {
    flex-direction: column;
  }
`;
const SkillText_li = styled(Text_p)`
  margin-left: 2rem;
  list-style: inside;
`;
const LeftBox_div = styled.div`
  max-width: 600px;
  width: 100%;
  ${Medias.custom(1024)} {
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const ImageLink_a = styled.a`
  display: block;
  position: relative;
  cursor: pointer;
  img {
    transition: all 1s;
  }
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 1s;
  }
  &:hover {
    img {
      transform: scale(0.9);
    }
    &::after {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

const RightBox_div = styled.div`
  max-width: 600px;
  width: 100%;
  position: relative;
  padding-left: 2rem;
  ${Medias.custom(1024)} {
    padding-left: 0;
    height: 250px;
  }
`;
const NumberPrimary_a = styled.p`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 5px solid var(--primary);
  font-size: 10rem;
  color: var(--primary);
  background-color: var(--white);
  cursor: pointer;
  transition: all 1s;
  ${Medias.tab} {
    width: 90px;
    height: 90px;
    font-size: 6rem;
    border: 3px solid var(--primary);
  }
  &:hover {
    border: 90px solid var(--primary);
    color: var(--white);
  }
`;

const Number_a = styled(NumberPrimary_a)`
  color: var(--white);
  background-color: var(--primary);
  border: 5px solid var(--subprimary);
  ${Medias.tab} {
    border: 3px solid var(--subprimary);
  }
  &:hover {
    border: 90px solid var(--subprimary);
    color: var(--white);
  }
`;
