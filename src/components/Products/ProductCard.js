import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
border: 1px solid red;
display: flex;
flex-direction: column;
`;

const CardInfo = styled.div`
display:  flex;
flex-direction: column;
padding: 20px;

p {
    margin: 10px 2px;
}
`
const AddToCartButton = styled.button`
 align-self: center;
 margin-top: 5px;
`


export class ProductCard extends React.Component {
    render() {
        return <CardContainer>
            <img src={"https://picsum.photos/100/150?random=1"}/>
            <CardInfo>
                <p>Produto</p>
                <p>Preço: R$50</p>
                <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
            </CardInfo>
        </CardContainer>
    }
}