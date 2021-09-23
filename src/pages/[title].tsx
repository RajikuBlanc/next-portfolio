/* eslint-disable @next/next/link-passhref */
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import styled from 'styled-components';
import ProductsTitle from '../components/Products/ProductsTitle';
import { Medias } from '../styles/Media';
import { client } from 'libs/client';
import { CMSProductList, CMSProduct } from 'types/product';

// --------------- SSG ---------------
export const getStaticPaths: GetStaticPaths = async () => {
  const data: CMSProductList = await client.get({ endpoint: 'products' });
  const paths = data.contents.map((content) => `/${content.id}`);
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params!.title;
  const data: CMSProductList = await client.get({
    endpoint: 'products',
    contentId: `${id}`,
  });
  return {
    props: {
      products: data,
    },
  };
};

// --------------- Function ---------------
export default function ProductDetail({ products }: { products: CMSProduct }) {
  return (
    <ProductDetailStyle>
      {/* タイトル */}
      <ProductsTitle title={products.title} size={4} />
      <InfoBox_div>
        <Box_div>
          {/* 制作期間 */}
          <p>制作期間 : {products.date}</p>
          {/* 使用技術 */}
          <p>使用技術 :</p>
          <ul>
            {products.skill.map((skill, index) => {
              return <li key={index}>{skill.name}</li>;
            })}
          </ul>
        </Box_div>
        <Box_div>
          <Image src={products.thumbnail.url} alt='サムネイル' width={800} height={520}></Image>
          <UrlBox_div>
            {/* url */}
            {products.url && (
              <Link href={products.url}>
                <a target='_blank'>
                  <BiLinkExternal size={30} color='#6e7886' />
                </a>
              </Link>
            )}
            {/* github */}
            {products.github && (
              <Link href={products.github}>
                <a target='_blank'>
                  <AiFillGithub size={30} color='#6e7886' />
                </a>
              </Link>
            )}
          </UrlBox_div>
        </Box_div>
      </InfoBox_div>
      {/* 技術選定理由 */}
      <ProductsTitle title='技術選定理由' size={2} />

      <TextBox_p>{products.skillreason}</TextBox_p>
      {/* こだわり */}
      <ProductsTitle title='こだわり' size={2} />

      <TextBox_p>{products.commitment}</TextBox_p>
      {/* 苦労したこと */}
      <ProductsTitle title='苦労したこと' size={2} />
      <TextBox_p>{products.hardship}</TextBox_p>
      {/* 画像スライダー */}
      <Slider_div>
        {products.images.map((images, index) => {
          return (
            <Image
              key={index}
              src={images.sliderimage.url}
              alt={images.alt}
              width={350}
              height={500}
            ></Image>
          );
        })}
      </Slider_div>

      {/* back home */}
      <Link href='/'>
        <HomeButton_a>home</HomeButton_a>
      </Link>
    </ProductDetailStyle>
  );
}

// --------------- Styled ---------------

const ProductDetailStyle = styled.div`
  background-color: var(--white);
  padding-top: 2rem;
  padding-bottom: 5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  .productsTitle {
    margin-bottom: 1rem;
  }
`;
const InfoBox_div = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: center;
  padding: 5rem 0;
  p,
  li {
    font-size: 1.8rem;
    color: var(--subprimary);
    font-weight: bold;
    margin-bottom: 1rem;
  }
  li {
    list-style: inside;
    margin-left: 2rem;
    margin-bottom: 0;
  }
  ${Medias.custom(450)} {
    flex-direction: column;
    gap: 3rem;
    p,
    li {
      font-size: 1.6rem;
    }
  }
`;
const Box_div = styled.div`
  width: 40%;
  ${Medias.custom(450)} {
    width: 100%;
  }
`;
const UrlBox_div = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const TextBox_p = styled.p`
  padding: 5rem 2rem;
  color: var(--primary);
  font-size: 1.6rem;
  max-width: 1000px;
  margin: 0 auto;
  line-height: 1.8;
  border: 1px solid var(--subprimary);
  margin-bottom: 3rem;
  ${Medias.custom(450)} {
    font-size: 1.2rem;
    padding: 1rem 2rem;
  }
`;
const HomeButton_a = styled.a`
  display: block;
  max-width: 200px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background-color: var(--subprimary);
  color: var(--white);
  letter-spacing: 0.3em;
  font-weight: bold;
  font-size: 2rem;
  margin: 0 auto;
  cursor: pointer;
  margin-top: 2rem;
  border-radius: 5px;
  ${Medias.custom(450)} {
    font-size: 1.5rem;
  }
`;
const Slider_div = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
