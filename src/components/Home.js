import React from "react";
import Carrinho from "./Carrinho";

import './Home.css'

class Home extends React.Component {
  


  
  render() {
    return (
      <div>
        <div className="div-produto">
          <h3>{this.props.texto}</h3>
          <img className="produtos" src={this.props.foto}/>
          <h3>Preço: {this.props.valor}</h3>
          <Carrinho />
        </div>
      </div>
    );
  }
}


export default Home;

