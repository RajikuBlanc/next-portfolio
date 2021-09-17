import Image from 'next/image';
import styled from 'styled-components';
import { CMSProductProps } from '../../types/product';
import MoreButton from '../common/MoreButton';
import Ptext, { Text_p } from '../common/Ptext';

export default function ProductItem({
  productData,
}: {
  productData: CMSProductProps;
}): JSX.Element {
  return (
    <>
      {productData.map((product, index) => {
        const num = index + 1;
        return (
          <PostItem_li key={product.id}>
            {/* LeftBox */}
            <div>
              {product.images.map((imageItem, index) => {
                if (index === 0) {
                  return (
                    <Image
                      key={index}
                      src={imageItem.image.url}
                      alt={imageItem.alt}
                      width={760}
                      height={500}
                    ></Image>
                  );
                }
              })}
            </div>
            {/* RightBox */}
            <div>
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
              <p>{num}</p>
              {/* MoreButton */}
              <MoreButton link={`/${product.id}`} />
            </div>
          </PostItem_li>
        );
      })}
    </>
  );
}
// --------------- Styled ---------------
const PostItem_li = styled.li`
  max-width: 1000px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5rem;
`;
const SkillText_li = styled(Text_p)`
  margin-left: 2rem;
  list-style: inside;
`;
