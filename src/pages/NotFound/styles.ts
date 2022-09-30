import styled from "styled-components";

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  gap: 30px;

  h1 {
    font-size: 90px;
  }

  h3 {
    font-size: 31px;
    @media (max-width: 600px) {
      font-size: 21px;
    }
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 23px;
  }
`;
