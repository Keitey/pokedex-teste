import styled from "styled-components";

export const PokeDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin: 1rem;
  padding: 2rem 1rem 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 1rem;
    margin: .3rem;
  }
`;

export const Poke = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${props => props.theme.colors.textPrincipalPageDetails};
    font-weight: bold;
    font-size: 40px;
    text-decoration: shadow;
    text-transform: uppercase;
  }

  img {
    height: 500px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px){
    margin: auto;
  }
`;

export const Title = styled.span`
  font-size: 25px;
  color: ${props => props.theme.colors.textPrincipalPageDetails};
  font-weight: bold;
  padding-bottom: 0.2rem;
`;

export const Content = styled.div`
  padding-bottom: 1rem;
  font-size: 19px;

  li {
    list-style-type: none;
    font-size: 20px;
    color: ${props => props.theme.colors.textPageDetails};
  }

  .ability {
    h4 {
      text-transform: uppercase;
      font-size: 18px;
      padding: 0.6rem 0;
      color: ${props => props.theme.colors.texth4PageDetails};
    }

    p {
      width: 350px;
      text-align: justify;
      font-size: 15px;
      margin: auto;
      color: ${props => props.theme.colors.textPageDetails};

      @media (max-width: 600px) {
        width: 250px;
      }
    }
  }
`;
