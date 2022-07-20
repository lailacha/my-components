import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CoolComponentsProps {}

const StyledCoolComponents = styled.div`
  color: pink;
`;

export function CoolComponents(props: CoolComponentsProps) {
  return (
    <StyledCoolComponents>
      <h1>Welcome to CoolComponents!</h1>
    </StyledCoolComponents>
  );
}

export default CoolComponents;
