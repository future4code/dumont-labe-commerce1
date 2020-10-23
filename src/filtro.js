import React, { Component } from "react";
import styled from 'styled-components'

const ContainerDoFiltro = styled.div`
  background-color:gray;
`
const ListaDeFiltros = styled.ul`
    font-size:28px;
`
const ElementoLista = styled.li`

`
 export default class Filtro extends Component{ 
     render(){ 

        return(
    <ContainerDoFiltro> 
       <h2>Filtros:</h2> <hr/>
         <ListaDeFiltros><br/>
            <ElementoLista>Nome: <br/>
            <input placeholder="Nome do produto" type="text"></input>
            </ElementoLista>
            <hr></hr>
             <ElementoLista>Preço:</ElementoLista> <br/>
            DE <input type="range"/>
            ATÉ <input type="range"/>
         </ListaDeFiltros>
        
    </ContainerDoFiltro> 
        )
        } 
    } 