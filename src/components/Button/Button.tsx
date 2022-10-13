import * as C from "./styles";

interface MyBtn {
  text: string;
}

const Button = ({ text }: MyBtn) => {
  return <C.Button>{text}</C.Button>;
};

export default Button;
