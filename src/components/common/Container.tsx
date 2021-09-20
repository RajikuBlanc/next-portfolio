import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export default function Container({ children, className }: PropsWithChildren<any>) {
  return <div className={className}>{children}</div>;
}

// --------------- Styled ---------------
export const ContainerStyle = styled(Container)`
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
`;
export const MinContainerStyle = styled(ContainerStyle)`
  max-width: 1440px;
`;
