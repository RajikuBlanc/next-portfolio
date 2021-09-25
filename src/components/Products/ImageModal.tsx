import Image from 'next/image';
import styled from 'styled-components';
import { Medias } from '../../styles/Media';

export default function ImageModal({ closeModal, imgUrl }: { closeModal: any; imgUrl: string }) {
  return (
    <ModalStyle
      onClick={() => {
        closeModal(false);
      }}
    >
      <div>
        <Image src={imgUrl} alt='画像' width={300} height={500} objectFit='contain'></Image>
      </div>
    </ModalStyle>
  );
}
const ModalStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  left: 0;
  div {
    display: block;
    width: 400px;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    ${Medias.sp} {
      width: 300px;
    }
  }
`;
