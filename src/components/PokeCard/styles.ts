import styled from "styled-components";

export const CardContainer = styled.div``;

export const Card = styled.div`
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 3px;
  transition: .4s;

  &:hover{
    transform: scale(1.1)
  }

  img {
    border-radius: 3px 3px 0px 0px;
  }
`;

export const CardText = styled.div`
  background: #3761A8;
  border-radius: 0px 0px 3px 3px;
  padding: 0.3rem;
  color: #ffff;
  font-size: 18px;
  font-weight: bold;
`;
