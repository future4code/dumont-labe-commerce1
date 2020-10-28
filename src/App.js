import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from 'styled-components';
import Foto1 from './img/Foto1.png';
import Foto2 from "./img/Foto2.png";
import Foto3 from "./img/Foto3.png";
import Foto4 from "./img/Foto4.png";
import Foto5 from "./img/Foto5.png";
import Foto6 from "./img/Foto6.png";
import Foto7 from "./img/Foto7.png";
import Foto8 from "./img/Foto8.png";
import Foto9 from "./img/Foto9.png";
import Foto10 from "./img/Foto10.png";
import Foto11 from "./img/Foto11.png";
import Foto12 from "./img/Foto12.png";


const AppContainer = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
padding: 16px;
gap: 12px;
font-family: 'Grandstander', cursive;
font-size: 1.2em;
font-weight: bolder;
color: #1E3E59;
`


const products = [

  {
    id: 1,
    nome:"Camisa1",
    preco: 20.0,
    imagem: Foto1
  },

  {
    id: 2,
    nome:"Camisa2",
    preco: 50.0,
    imagem: Foto2
  },

  {
    id: 3,
    nome:"Camisa3",
    preco: 85.0,
    imagem: Foto3
  },

  {
    id: 4,
    nome:"Camisa4",
    preco: 90.0,
    imagem: Foto4
  },

  {
    id: 5,
    nome: "Camisa5",
    preco:  80.0,
    imagem: Foto5
  },

  {
    id: 6,
    nome: "Camisa6",
    preco: 90.00,
    imagem: Foto6
  },

  {
    id: 7,
    nome: "Camisa7",
    preco: 75.00,
    imagem: Foto7
  },

  {
    id: 8,
    nome: "Camisa8",
    preco:  80.0,
    imagem: Foto8
  },

  {
    id: 9,
    nome: "Camisa9",
    preco:  85.0,
    imagem: Foto9
  },

  {
    id: 10,
    nome: "Camisa10",
    preco:  69.0,
    imagem: Foto10
  },

  {
    id: 11,
    nome: "Camisa11",
    preco:  80.0,
    imagem: Foto11
  },

  {
    id: 12,
    nome: "Camisa12",
    preco:  90.0,
    imagem: Foto12
  }


]

class App extends React.Component {
   state ={
   filtroMinimo: 0,
   filtroMaximo: 200,
   nomeFiltro: "",
   
   productsInCart: [

     {
      
     },

     {
     
    }
   ] 
  }

  
onChangeFiltroMinimo=(event)=>{
  this.setState({filtroMinimo: event.target.value})
}

onChangeFiltroMaximo=(event)=>{
  this.setState({filtroMaximo: event.target.value})
}

onChangeNomeFiltro=(event)=>{
  this.setState({nomeFiltro: event.target.value})
}

onAddProductToCart=(productId) => {
  const productInCart = this.state.productsInCart.find(product=> productId === product.id)

  if(productInCart){
    const newProductsInCart = this.state.productsInCart.map(product => {
      if(productId === product.id) {
        return {
          ...product,
          quantidade: product.quantidade + 1
        }
      }
      return product
    })
    this.setState({productsInCart: newProductsInCart})
    }else{
      const productToAdd = products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantidade: 1}]

      this.setState ({productsInCart: newProductsInCart})

    }
}

onRemoveProductFromCart=(productId) => {
  const newProductsInCart = this.state.productsInCart.map((product) => {
    if(product.id === productId) {
      return {
        ...product,
        quantidade: product.quantidade - 1
      }
    }
    return product
  }).filter((product) => product.quantidade > 0)

  this.setState({productsInCart: newProductsInCart})
}

  render(){
  return (
    <AppContainer>
      <Filters
      filtroMinimo={this.state.filtroMinimo}
      filtroMaximo={this.state.filtroMaximo}
      nomeFiltro={this.state.nomeFiltro}
      onChangeFiltroMinimo= {this.onChangeFiltroMinimo}
      onChangeFiltroMaximo={this.onChangeFiltroMaximo}
      onChangeNomeFiltro= {this.onChangeNomeFiltro}
      />
      <Products 
      products={products}
      filtroMinimo={this.state.filtroMinimo}
      filtroMaximo={this.state.filtroMaximo}
      nomeFiltro={this.state.nomeFiltro}
      onAddProductToCart={this.onAddProductToCart}
      />
      <ShoppingCart
      productsInCart={this.state.productsInCart}
      onRemoveProductFromCart={this.onRemoveProductFromCart}
      
      
      />

    </AppContainer>
  );
}
}
export default App;