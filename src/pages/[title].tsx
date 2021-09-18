import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
      <h2>{products.title}</h2>
      <p>{products.date}</p>
      {products.skill.map((skill, index) => {
        return <p key={index}>{skill.name}</p>;
      })}
      <p>{products.skillreason}</p>
      <p>{products.commitment}</p>
      <p>{products.hardship}</p>
      {products.images.map((images, index) => {
        return (
          <Image
            key={index}
            src={images.sliderimage.url}
            alt={images.alt}
            width={500}
            height={500}
          ></Image>
        );
      })}
    </div>
  );
}
