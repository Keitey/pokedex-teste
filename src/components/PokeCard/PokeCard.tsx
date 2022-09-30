import * as C from "./styles";
import { Link } from 'react-router-dom'

interface MainProps {
  name: string;
  image: string;
}

const PokeCard = ({ name, image}: MainProps) => {
  return (
    <C.CardContainer>
      <C.Card>
        <Link to={`/details/${name}`}>
        <img src={image} alt={name} />
        </Link>
        <C.CardText>
          <p>{name}</p>
        </C.CardText>
      </C.Card>
    </C.CardContainer>
  );
};

export default PokeCard;
