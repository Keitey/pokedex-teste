import styled from 'styled-components'

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
    margin: 3rem;
`;

export const Card = styled.div`
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 3px;

    img{
        border-radius: 3px 3px 0px 0px;
    }
`;

export const CardText = styled.div`
    background: #424656;
    border-radius: 0px 0px 3px 3px;
    padding: 0.3rem;
    color: #fff;
    font-size: 18px;
`;