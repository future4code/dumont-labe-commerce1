import React from "react";
import Foto2 from "../img/Foto2.jpg";
import Foto3 from "../img/Foto3.jpg";
import Foto4 from "../img/Foto4.jpg";
import Foto5 from "../img/Foto5.jpg";
import Foto6 from "../img/Foto6.jpg";
import Foto7 from "../img/Foto7.jpg";
import './Home.css'

class Home extends React.Component {
  state = {
    produtos: [


      {
        id: 1,
        name: "Camisa1",
        valor: 75.0,
        imagem: Foto2
      },

      {
        id: 2,
        name: "Camisa2",
        valor: 60.0,
        imagem: Foto3
      },

      {
        id: 3,
        name: "Camisa3",
        valor: 75.0,
        imagem: Foto4
      },

      {
        id: 4,
        name: "Camisa4",
        valor: 70.0,
        imagem: Foto5
      },

      {
        id: 5,
        name: "Camisa5",
        valor: 70.0,
        imagem: Foto6
      },

      {
        id: 6,
        name: "Camisa6",
        valor: 70.0,
        imagem: Foto7
      },


    ]
  };
  render() {
    return (
    
      <div>

        <div id="container-produto">
        <div className="div-produto">
            <h3>{this.props.texto}</h3>
            <img className="produtos" src={this.props.foto}/>
            <h3>Preço: {this.props.valor}</h3>
            <button onClick={entraCarrinho()}>Comprar</button>
            </div>
        
        </div>
        
      </div>
    );
  }
}

export default Home;

