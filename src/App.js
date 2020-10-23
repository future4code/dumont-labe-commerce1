import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from 'styled-components';
import Foto1 from './img/Foto1.jpg';
import Foto2 from "./img/Foto2.jpg";
import Foto3 from "./img/Foto3.jpg";
import Foto4 from "./img/Foto4.jpg";

const AppContainer = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
padding: 16px;
gap: 10px;
`

const products = [

  {
    id: 1,
    nome:"Camisa Gatos no espaço",
    preco: 20.0,
    imagem: Foto1
  },

  {
    id: 2,
    nome:"Camisa Triângulos",
    preco: 50.0,
    imagem: Foto2
  },

  {
    id: 3,
    nome:"Camisa Nasa",
    preco: 85.0,
    imagem: Foto3
  },

  {
    id: 4,
    nome:"Camisa Objetos Viajantes",
    preco: 90.0,
    imagem: Foto4
  }



]

class App extends React.Component {
   state ={
   filtroMinimo: 0,
   filtroMaximo: 90,
   nomeFiltro: "",
   productsInCart: [
     {
       id: 5,
       nome: "ahsuaha",
       preco: 100,
       imagem: "https://picsum.photos/200/300?random=1",
       quantidade: 1
     },

     {
      id: 6,
      nome: "ahsuaha",
      preco: 200,
      imagem: "https://picsum.photos/200/300?random=2",
      quantidade: 3
    }
   ] 
  }
  render(){
  return (
    <AppContainer>
      <Filters
      filtroMinimo={this.state.filtroMinimo}
      filtroMaximo={this.state.filtroMaximo}
      nomeFiltro={this.state.nomeFiltro}
      />
      <Products 
      products={products}
      filtroMinimo={this.state.filtroMinimo}
      filtroMaximo={this.state.filtroMaximo}
      nomeFiltro={this.state.nomeFiltro}
      />
      <ShoppingCart
      productsInCart={this.state.productsInCart}
      
      
      />

    </AppContainer>
  );
}
}
export default App;