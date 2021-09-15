import styled from 'styled-components';
import { CMSProductProps } from '../../types/product';
import ProductItem from '../Products/ProductItem';
import { SectionTitleLeft } from '../common/SectionTitle';

export default function ProductsSection({ productList }: { productList: CMSProductProps }) {
  return (
    <Products_section>
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
`;
const ProductList_ul = styled.ul``;
