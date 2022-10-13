import * as C from "./styles";

interface MyBtn {
  text: string;
  onClick: () => Promise<void>
}

const Button = ({ text }: MyBtn) => {
  return <C.Button>{text}</C.Button>;
};

export default Button;
