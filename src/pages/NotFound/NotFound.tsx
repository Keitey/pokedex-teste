import { Link } from "react-router-dom";
import * as C from "./styles";

const NotFound = () => {
  return (
    <C.Error>
      <h1>404</h1>
      <h3>Página não localizada!</h3>
      <Link to="/">Ir para Home</Link>
    </C.Error>
  );
};

export default NotFound;
