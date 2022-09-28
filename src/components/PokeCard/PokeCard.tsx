import * as C from "./styles";

interface MainProps {
  name: string;
  image: string;
}

const PokeCard = ({ name, image }: MainProps) => {
  return (
    <C.CardContainer>
      <C.Card>
        <img src={image} alt={name} />
        <C.CardText>
          <p>{name}</p>
        </C.CardText>
      </C.Card>
    </C.CardContainer>
  );
};

export default PokeCard;
