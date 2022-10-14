import styled from "styled-components";

export const CardContainer = styled.div``;

export const Card = styled.div`
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 3px;
  transition: .4s;
  background: ${props=> props.theme.colors.backgroundCard};

  &:hover{
    transform: scale(1.1)
  }

  img {
    border-radius: 3px 3px 0px 0px;
    height: 100px;
  }
`;

export const CardText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: ${props => props.theme.colors.backgroundCardPoke};
  border-radius: 0px 0px 3px 3px;
  padding: 0.3rem;
  color: ${props => props.theme.colors.textPokeCard};
  font-size: 18px;
  font-weight: bold;
`;
