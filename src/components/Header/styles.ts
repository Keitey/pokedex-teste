import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  padding: 0.8rem;
  
  img {
    width: 150px;
  }
`;
