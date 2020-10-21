import React from 'react';
import './App.css';
import Home from './components/Home';
import Filtro from './components/Filtro';
import Carrinho from './components/Carrinho';

function App() {
  return (
  <> 
    <h1>Bem vindo a LOJA ASTRODEV</h1>
    <Home texto={"Camiseta 1"} valor={70.00} foto={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2osbyk0xeMUiSmiDjiaHEvgoT1xkrORSJ5g&usqp=CAU"}/>
    <Home texto={"Camiseta 2"} valor={70.00} foto={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEczzDxJOa8et8vXP-5ULM_yBuVcVoziVM_Q&usqp=CAU"}/>
    <Home texto={"Camiseta 3"} valor={75.00}foto={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTwEAtr8QnZXeEnLxRPj6zhtj9bx1QKBEQ8A&usqp=CAU"}/>
    <Home texto={"Camiseta 4"} valor={80.00}foto ={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMITmylloZKZpovCgCzx2Q8nNY9S2LGdHYOMI3pKEQaH3iNkOe6iugIlG7h6yqbG7QSHPxkqA&usqp=CAc"}/>
    <Home texto={"Camiseta 5"} valor={80.00}foto={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_xwB6ITpYn3oU3QoC-kxfLfBWsfYrNIBauu7zLhOj3KP4KZwqM3UxgR7SB0_1U4ry7qJYKy0&usqp=CAc"}/>
    <Home texto={"Camiseta 6"} valor={60.00}foto={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1FESAFNHHqF6HX58XuQc4zkMJdI_Y8fzYPA&usqp=CAU"}/>
  
  </>
  );
}

export default App;
