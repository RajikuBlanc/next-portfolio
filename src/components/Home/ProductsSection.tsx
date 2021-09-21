import styled from 'styled-components';
import { Medias } from '../../styles/Media';
import { CMSProductProps } from '../../types/product';
import ProductItem from '../Products/ProductItem';
import { SectionTitleLeft } from '../common/SectionTitle';

export default function ProductsSection({ productList }: { productList: CMSProductProps }) {
  return (
    <Products_section>
      <div id='products'></div>
      {/*  @ts-ignore */}
      <SectionTitleLeft>products</SectionTitleLeft>
      <ProductList_ul>
        <ProductItem productData={productList} />
      </ProductList_ul>
    </Products_section>
  );
}
const Products_section = styled.section`
  position: relative;
  padding-top: 30rem;
  margin-bottom: 10rem;
  ${Medias.tab} {
    padding-top: 15rem;
  }
  ${Medias.sp} {
    padding-top: 8rem;
    margin-bottom: 5rem;
  }
`;
const ProductList_ul = styled.ul`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  ${Medias.tab} {
    padding: 0 2.5rem;
  }
  ${Medias.sp} {
    gap: 8rem;
  }
`;
