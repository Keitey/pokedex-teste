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
      textPrincipalPageDetails: string;
      textPageDetails: string;
      textNotFound: string;
      texth4PageDetails: string;
      background: string;
      backgroundCardPoke: string;
      backgroundCard: string;
    };
  }
}
