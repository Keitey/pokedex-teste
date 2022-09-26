import NavBar from "../../components/NavBar/NavBar";
import * as C from "./styles";
import axios from "axios";

const Home = () => {
  return (
    <>
      <NavBar />
      <C.CardContainer>
        <C.Card>
          <img
            src="https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png"
            alt=""
          />
          <C.CardText>
            <p>Pikachu</p>
          </C.CardText>
        </C.Card>

        <C.Card>
          <img
            src="https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png"
            alt=""
          />
          <C.CardText>
            <p>Pikachu</p>
          </C.CardText>
        </C.Card>

        <C.Card>
          <img
            src="https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png"
            alt=""
          />
          <C.CardText>
            <p>Pikachu</p>
          </C.CardText>
        </C.Card>
      </C.CardContainer>
    </>
  );
};

export default Home;
