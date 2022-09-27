import * as C from "./styles";

const PokeCard: any = ({ name, image }: { name: string; image: string }) => {
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
