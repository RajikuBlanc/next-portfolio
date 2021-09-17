import styled from 'styled-components';
import { Medias } from '../../styles/Media';
import { CMSProductProps } from '../../types/product';
import ProductItem from '../Products/ProductItem';
import Container from '../common/Container';
import { SectionTitleLeft } from '../common/SectionTitle';

export default function ProductsSection({ productList }: { productList: CMSProductProps }) {
  return (
    <Products_section>
      {/*  @ts-ignore */}
      <SectionTitleLeft>products</SectionTitleLeft>
      <Container>
        <ProductList_ul>
          <ProductItem productData={productList} />
        </ProductList_ul>
      </Container>
    </Products_section>
  );
}
const Products_section = styled.section`
  position: relative;
  padding-top: 30rem;
  ${Medias.tab} {
    padding-top: 15rem;
  }
`;
const ProductList_ul = styled.ul``;
