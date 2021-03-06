/* eslint-disable @next/next/link-passhref */
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import styled from 'styled-components';
import ImageModal from '../components/Products/ImageModal';
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
  const [openModal, setOpenModal] = useState<string>('');
  const onOpenModal = (url: string) => {
    setOpenModal(url);
  };

  return (
    <ProductDetailStyle>
      {/* タイトル */}
      <ProductsTitle title={products.title} size={4} />
      <InfoBox_div>
        <Box_div>
          {/* 制作期間 */}
          <p data-aos='fade-right'>制作期間 : {products.date}</p>
          {/* 使用技術 */}
          <p data-aos='fade-right'>使用技術 :</p>
          <ul>
            {products.skill.map((skill, index) => {
              return (
                <li key={index} data-aos='fade-right' data-aos-duration='1500'>
                  {skill.name}
                </li>
              );
            })}
          </ul>
        </Box_div>
        <Box_div>
          <Image
            src={products.thumbnail.url}
            alt='サムネイル'
            width={800}
            height={520}
            data-aos='zoom-in'
          ></Image>
          <UrlBox_div>
            {/* url */}
            {products.url && (
              <Link href={products.url}>
                <a target='_blank' data-aos='fade-up'>
                  <BiLinkExternal size={30} color='#6e7886' />
                </a>
              </Link>
            )}
            {/* github */}
            {products.github && (
              <Link href={products.github}>
                <a target='_blank' data-aos='fade-up'>
                  <AiFillGithub size={30} color='#6e7886' />
                </a>
              </Link>
            )}
          </UrlBox_div>
        </Box_div>
      </InfoBox_div>
      {/* 技術選定理由 */}
      <ProductsTitle title='技術選定理由' size={2} />

      <TextBox_p data-aos='fade-up'>{products.skillreason}</TextBox_p>
      {/* こだわり */}
      <ProductsTitle title='こだわり' size={2} />

      <TextBox_p data-aos='fade-up'>{products.commitment}</TextBox_p>
      {/* 苦労したこと */}
      <ProductsTitle title='苦労したこと' size={2} />
      <TextBox_p data-aos='fade-up'>{products.hardship}</TextBox_p>
      {/* 画像スライダー */}
      <ImageList_ul data-aos='fade-up'>
        {products.images.map((images, index) => {
          return (
            <li key={index}>
              <figure>
                <Image
                  src={images.sliderimage.url}
                  alt={images.alt}
                  width={350}
                  height={500}
                  onClick={() => {
                    onOpenModal(images.sliderimage.url);
                  }}
                ></Image>
              </figure>
              {images.sliderimage.url === openModal && (
                <ImageModal closeModal={setOpenModal} imgUrl={images.sliderimage.url} />
              )}
            </li>
          );
        })}
      </ImageList_ul>

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
  ${Medias.custom(600)} {
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
  max-width: 800px;
  ${Medias.custom(600)} {
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
  ${Medias.custom(600)} {
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
  ${Medias.custom(600)} {
    font-size: 1.5rem;
  }
`;

const ImageList_ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  gap: 6rem;
  figure {
    width: 200px;
  }
`;
