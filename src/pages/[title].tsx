import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { client } from 'libs/client';
import { CMSProductList, CMSProduct } from 'types/product';
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

export default function ProductDetail({ products }: { products: CMSProduct }) {
  return (
    <div>
      {/* タイトル */}
      <h2>{products.title}</h2>
      {/* 制作期間 */}
      <p>{products.date}</p>
      {/* 使用技術 */}
      <ul>
        {products.skill.map((skill, index) => {
          return <li key={index}>{skill.name}</li>;
        })}
      </ul>
      {/* 技術選定理由 */}
      <p>{products.skillreason}</p>
      {/* こだわり */}
      <p>{products.commitment}</p>
      {/* 苦労したこと */}
      <p>{products.hardship}</p>
      {/* 画像スライダー */}
      <div>
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
      </div>
      {/* github */}
      <Link href={products.github}>
        <a target='_blank'>github</a>
      </Link>
      {/* url */}
      <Link href={products.url}>
        <a target='_blank'>url</a>
      </Link>
      {/* back home */}
      <Link href='/'>
        <a>home</a>
      </Link>
    </div>
  );
}
