import { MdKeyboardArrowUp } from 'react-icons/md';
import styled from 'styled-components';
import AboutSection from '../components/Home/AboutSection';
import CareerSection from '../components/Home/CareerSection';
export default function Home() {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {/* about section */}
      <AboutSection />
      {/* career section */}
      <CareerSection />

      {/* products section */}
      <h2>Products</h2>
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
