import React from 'react'
import { ShoppingCartItem } from './ShoppingCartItem'
import styled from 'styled-components';

const ShoppingCartContainer = styled.div`
border: 1px solid black;
padding: 10px;
`;

const CartListContainer = styled.div`
display: grid;
gap: 4px;

`

export class ShoppingCart extends React.Component {
  render(){
    return <ShoppingCartContainer>
      <h3>Carrinho: </h3>
      
      <CartListContainer>
        {this.props.productsInCart.map((product)=>{
            return <ShoppingCartItem cartItem={product}/>
        })}
        
      </CartListContainer>
      <p>Valor Total: R$ 100</p>
    </ShoppingCartContainer>
  }
}