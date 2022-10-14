import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      switchOn: string;
      switchOff: string;

      textPokeCard: string;
      backgroundbody: string;
      backgroundCardPoke: string;
    };
  }
}
