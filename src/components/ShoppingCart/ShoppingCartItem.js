import React from 'react'
import { ShoppingCart } from './ShoppingCart'
import styled from 'styled-components';

const ItemContainer = styled.div`
display: grid;
grid-auto-flow: column;
gap: 5px;
align-items: center;

p {
    margin: 10px;
}
`

export class ShoppingCartItem extends React.Component {
    render() {
        return <ItemContainer>
            <p>1x</p>
            <p>Produto</p>
            <button>Remover</button>
                        
        </ItemContainer>
    }
}