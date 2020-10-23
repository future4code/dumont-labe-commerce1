import React from 'react';
import Home from './home.js'
import Carrinho from './carrinho.js'
import Filtro from './filtro.js'
import styled from 'styled-components';
import GlobalStyle from './global.js'

const ContainerPrincipal = styled.div`
position:absolute;
  display:grid;
  grid-template-columns:15vw 56vw 29vw;
  grid-template-rows:100vh;
`


function App() {
  return (
    
      <ContainerPrincipal>
        <GlobalStyle/>
        <Filtro/>
        <Home/>
        <Carrinho/>
        
      </ContainerPrincipal>
    
  );
}

export default App;
