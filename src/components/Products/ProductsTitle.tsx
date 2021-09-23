import styled from 'styled-components';
import { Medias } from '../../styles/Media';
// --------------- Function ---------------
export default function ProductsTitle({ title, size }: { title: string; size: number }) {
  return (
    <ProductsTitleStyle className='productsTitle' size={size}>
      {title}
    </ProductsTitleStyle>
  );
}
// --------------- Style ---------------
const ProductsTitleStyle = styled.h2<{ size: number }>`
  text-align: center;
  font-size: ${(props) => props.size}rem;
  font-weight: bold;
  color: var(--subprimary);
  ${Medias.custom(450)} {
    font-size: ${(props) => props.size - 0.5}rem;
  }
`;
