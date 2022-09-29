import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: #ef5350;
  padding: 0.8rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  input {
    width: 300px;
    padding: 0.3rem;
    border: none;
    border-radius: 3px;

    @media (max-width: 600px) {
      width: 200px;
    }
  }

  img {
    width: 150px;
  }
`;
