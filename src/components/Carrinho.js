import React, { Component } from "react";




class Carrinho extends React.Component {
  state = {
    compras: []
  }
mandaParaCarrinho = () => {

}
  


  render() {
    return (
      <div>
        <button onClick={this.mandaParaCarrinho}>Comprar</button>
      </div>
    );
  }
}
export default Carrinho;