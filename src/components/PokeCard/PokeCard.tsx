import * as C from "./styles";
import { Link } from 'react-router-dom'

interface Poke {
  name: string;
  image: any;
  id: number;
}

const PokeCard = ({ name, image, id}: Poke) => {
  return (
    <C.CardContainer>
      <C.Card>
        <Link to={`/details/${id}`}>
        <img src={image} alt={name} />
        </Link>
        <C.CardText>
          <h5>#{id}</h5>
          <p>{name}</p>
        </C.CardText>
      </C.Card>
    </C.CardContainer>
  );
};

export default PokeCard;
