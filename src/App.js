import React from 'react';
import Home from './home.js'
import Carrinho from './carrinho.js'
import Filtro from './filtro.js'
import styled from 'styled-components';

const ContainerPagina = styled.div`
  margin:auto; 
  display:grid;
  grid-template-columns:9vw 70vw 20vw;
  grid-template-rows:98vh;

`;

function App() {
  return (
    
      <ContainerPagina>

        <Filtro/>
        <Home/>
        <Carrinho/>

      </ContainerPagina>
    
  );
}

export default App;
