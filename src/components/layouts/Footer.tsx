import styled from 'styled-components';
// --------------- Function ---------------
export default function Footer() {
  return (
    <FooterStyle>
      <p>
        &copy;<small>2021 ryotaro homma</small>
      </p>
    </FooterStyle>
  );
}

// --------------- Styled ---------------
const FooterStyle = styled.footer`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  text-transform: uppercase;
  color: var(--primary);
`;
