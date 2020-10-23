import React from 'react'
import styled from 'styled-components';
import { Products } from './Products';

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
        const product = this.props.product
        return <CardContainer>
            <img src={product.imagem}/>
            <CardInfo>
                <p>{product.nome}</p>
                <p>{product.preco}</p>
                <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
            </CardInfo>
        </CardContainer>
    }
}