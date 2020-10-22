import React, { Component } from "react"; 
import styled from 'styled-components'
import calango1 from './img/calango.jpeg'
import calango2 from './img/calango2.jpeg'
import calango3 from './img/calango3.jpeg'
import calango4 from './img/calango4.jpeg'
import calango5 from './img/calango5.jpeg'

const ContainerDaHome = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    grid-template-row:1fr 1fr 1fr;
`
export default class Home extends Component { 
    render() { 
        return ( 
        <ContainerDaHome>
            <img src= {calango1}></img>
            <img src= {calango2}></img>
            <img src= {calango3}></img>
            <img src= {calango4}></img>
            <img src= {calango5}></img>
        </ContainerDaHome>
        )
    } 
}