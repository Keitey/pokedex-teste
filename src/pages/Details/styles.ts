import styled from "styled-components";

export const PokeDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin: 2rem;
  padding: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Poke = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  h1 {
    color: #2c3f63;
    font-weight: bold;
    font-size: 40px;
    text-decoration: shadow;
  }

  img {
    height: 350px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 30px;
  color: #2c3f63;
  font-weight: bold;
  padding-bottom: 1rem;
`;

export const Content = styled.div`
  padding-bottom: 1rem;
  font-size: 19px;

  li {
    list-style-type: none;
  }
`;
