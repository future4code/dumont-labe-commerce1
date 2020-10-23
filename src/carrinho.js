import React, { Component } from "react";
import styled from 'styled-components'

const ContainerDoCarrinho = styled.div`
    border:1px solid green;
    background-color:#FFBFBF;
`
 export default class Carrinho extends Component { 

    
     render() { 
         return (
              <ContainerDoCarrinho> 
              <h1>Carrinho:</h1>
              </ContainerDoCarrinho> 
              ); 
            } 
        } 