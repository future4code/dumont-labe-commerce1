import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from 'styled-components';

const AppContainer = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
padding: 16px;
gap: 10px;
`

const Products = [

  {
    id: 1,
    nome:"Camisa 1",
    preco: 75.0,
    imagem: "https://picsum.photos/100/150?random=1"
  },

  {
    id: 2,
    nome:"Camisa 2",
    preco: 75.0,
    imagem: "https://picsum.photos/100/150?random=2"
  },

  {
    id: 3,
    nome:"Camisa 3",
    preco: 75.0,
    imagem: "https://picsum.photos/100/150?random=3"
  },

  {
    id: 4,
    nome:"Camisa 4",
    preco: 75.0,
    imagem: "https://picsum.photos/100/150?random=4"
  }

]

function App() {
  return (
    <AppContainer>
      <Filters />
      <Products />
      <ShoppingCart />
    </AppContainer>
  );
}
export default App;