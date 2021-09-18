import Image from 'next/image';
import styled from 'styled-components';
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
            <PostItem_li key={product.id}>
              {/* LeftBox */}
              <LeftBox_div>
                <Image
                  src={product.thumbnail.url}
                  alt='サムネイル画像'
                  width={600}
                  height={400}
                ></Image>
              </LeftBox_div>
              {/* RightBox */}
              <RightBox_div>
                <Ptext text={product.title} />
                <Ptext text={`制作期間 : ${product.date}`} />
                <ul>
                  {product.skill.map((skill) => {
                    return (
                      <SkillText_li as='li' key={skill.id}>
                        {skill.name}
                      </SkillText_li>
                    );
                  })}
                </ul>
                <Number_p>{num}</Number_p>
                {/* MoreButton */}
                <ViewMoreButton link={`/${product.id}`} />
              </RightBox_div>
            </PostItem_li>
          );
        } else {
          return (
            <PostItemLeft_li key={product.id}>
              {/* LeftBox */}
              <LeftBox_div>
                <Image
                  src={product.thumbnail.url}
                  alt='サムネイル画像'
                  width={600}
                  height={400}
                ></Image>
              </LeftBox_div>
              {/* RightBox */}
              <RightBox_div>
                <Ptext text={product.title} />
                <Ptext text={`制作期間 : ${product.date}`} />
                <ul>
                  {product.skill.map((skill) => {
                    return (
                      <SkillText_li as='li' key={skill.id}>
                        {skill.name}
                      </SkillText_li>
                    );
                  })}
                </ul>
                <NumberPrimary_p>{num}</NumberPrimary_p>
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
  height: 450px;
`;
const PostItemLeft_li = styled(PostItem_li)`
  flex-direction: row-reverse;
`;
const SkillText_li = styled(Text_p)`
  margin-left: 2rem;
  list-style: inside;
`;
const LeftBox_div = styled.div`
  max-width: 600px;
  width: 100%;
`;

const RightBox_div = styled.div`
  max-width: 600px;
  width: 100%;
  position: relative;
`;
const NumberPrimary_p = styled.p`
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
`;

const Number_p = styled(NumberPrimary_p)`
  color: var(--white);
  background-color: var(--primary);
  border: 5px solid var(--subprimary);
`;
