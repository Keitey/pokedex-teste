import styled from 'styled-components'

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
    margin: 1rem;
`;

export const Card = styled.div`
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const CardText = styled.div`
    background: #868E96;
`;