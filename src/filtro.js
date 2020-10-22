import React, { Component } from "react";
import styled from 'styled-components'

const ContainerDoFiltro = styled.div`
    border:1px solid red;
`
const ListaDeFiltros = styled.ul`
    color:green;
`
const ElementoLista = styled.li`

`
 export default class Filtro extends Component{ 
     render(){ 

        return(
    <ContainerDoFiltro> 
         <h2>Filtros:</h2>
         <ListaDeFiltros>
            <ElementoLista>cor: 
                 <select>
                    <option>selecione</option>
                    <option>vermelho</option>
                    <option>azul</option>
                    <option>verde</option>
                    <option>amarelo</option>
                 </select>
            </ElementoLista>
             <ElementoLista>preço: <input type="range"/></ElementoLista> 
         </ListaDeFiltros>
        
    </ContainerDoFiltro> 
        )
        } 
    } 