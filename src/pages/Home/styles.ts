import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 2.1rem;
  row-gap: 4rem;
  margin: 2.5rem 4rem;
  padding-bottom: 1rem;
`;

export const Button = styled.button`
  margin: auto !important;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 61px;
  border: none;
  border-radius: 30px;
  background: #feca1b;
  color: #3761a8;
  font-weight: bold;
  padding: 1.3rem;
  width: 150px;
  cursor: pointer;

  &:hover {
    background: #ffc255;
  }
`;
