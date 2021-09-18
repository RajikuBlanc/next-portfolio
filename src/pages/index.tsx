import { GetStaticProps } from 'next';
import { MdKeyboardArrowUp } from 'react-icons/md';
import styled from 'styled-components';
import AboutSection from '../components/Home/AboutSection';
import CareerSection from '../components/Home/CareerSection';
import ProductsSection from '../components/Home/ProductsSection';
import { client } from '../libs/client';
import { CMSProductList, CMSProductProps } from '../types/product';
// --------------- SSG ---------------

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data: CMSProductList = await client.get({ endpoint: 'products' });
  return {
    props: {
      products: data.contents,
    },
  };
};

// --------------- Function ---------------
export default function Home({ products }: { products: CMSProductProps }) {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {/* about section */}
      <div id='about'></div>
      <AboutSection />
      {/* career section */}
      <CareerSection />

      {/* products section */}
      <div id='products'></div>
      <ProductsSection productList={products} />

      <TopButton_div onClick={returnTop}>
        <MdKeyboardArrowUp color={'#ffffff'} size={30} />
      </TopButton_div>
    </>
  );
}

const TopButton_div = styled.div`
  width: 60px;
  height: 60px;
  background-color: var(--primary);
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  border-radius: 50%;
  border: 3px solid var(--subprimary);
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;
