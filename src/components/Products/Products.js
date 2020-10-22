import React from 'react'
import { ProductCard } from './ProductCard'
import styled from 'styled-components';

const ProductsContainer = styled.div`
border: 1px solid blue;
`;

const ProductsHeader = styled.div`
  padding:  4px 18px;
  display: flex;
  align-items:center;
  justify-content: space-between;
`
const ProductsGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 8px;
padding: 8px;
`

export class Products extends React.Component {
  render(){
    return <ProductsContainer>
      <ProductsHeader>
        <p>Quantidade de Produtos: 4</p>
        <label>
          Ordem:
          <select>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
        </label>
      </ProductsHeader>
      <ProductsGrid>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsGrid>
      
    </ProductsContainer>
  }
}