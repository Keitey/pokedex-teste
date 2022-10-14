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
    color: ${props => props.theme.colors.textNotFound};
  }

  h3 {
    font-size: 31px;
    color: ${props => props.theme.colors.textNotFound};
    @media (max-width: 600px) {
      font-size: 21px;
    }
  }

  button {
    border: none;
    background: #feca1b;
    color: #3761a8;
    border-radius: 30px;
    padding: .9rem;
    font-weight: bold;
    transition: .4s;
    cursor: pointer;

    &:hover{
      background: #FFC255;
    }
  }
`;
