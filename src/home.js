import React, { Component } from "react"; 
import styled from 'styled-components'
import calango from './img/calango.jpeg'
import calango2 from './img/calango2.jpeg'
import calango3 from './img/calango3.jpeg'
import calango4 from './img/calango4.jpeg'
import calango5 from './img/calango5.jpeg'

const ContainerDaHome = styled.div`
    display:grid;
    background-color:aqua;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr ;
    justify-items:center;
    align-items:center;
    border:5px solid black;
    img{
        width:100px;height:100px;
    }
    div{border:1px solid black; text-align:center;}
    button{font-size:10px;}
`
export default class Home extends Component { 
    render() { 
        return ( 
        <ContainerDaHome>
            <div>
                <p>calango</p>
                <img src= {calango}></img>
                <p>preço: R$20,00</p>
                <button>adicionar ao carrinho</button> 
            </div>    

            <div>
                <p>calango</p>
                <img src= {calango2}></img>
                <p>preço: R$15,00</p>
                <button>adicionar ao carrinho</button> 
            </div>

            <div>
                <p>calango</p>
                <img src= {calango3}></img>
                <p>preço: R$25,00</p>
                <button>adicionar ao carrinho</button> 
            </div>

            <div>
                <p>calango</p>
                <img src= {calango4}></img>
                <p>preço: R$50,00</p>
                <button>adicionar ao carrinho</button> 
            </div>

            <div>
                <p>calango</p>
                <img src= {calango5}></img>
                <p>preço: R$6,00</p>
                <button>adicionar ao carrinho</button> 
            </div>

            <div>
                <p>calango</p>
                <img src= {calango4}></img>
                <p>preço: R$50,00</p>
                <button>adicionar ao carrinho</button> 
            </div>

            <div>
                <p>calango</p>
                <img src= {calango5}></img>
                <p>preço: R$50,00</p>
                <button>adicionar ao carrinho</button> 
            </div>

            <div>
                <p>calango</p>
                <img src= {calango}></img>
                <p>preço: R$50,00</p>
                <button>adicionar ao carrinho</button> 
            </div>

            <div>
                <p>calango</p>
                <img src= {calango}></img>
                <p>preço: R$50,00</p>
                <button>adicionar ao carrinho</button> 
            </div>

            <div>
                <p>calango</p>
                <img src= {calango}></img>
                <p>preço: R$50,00</p>
                <button>adicionar ao carrinho</button> 
            </div>

            <div>
                <p>calango</p>
                <img src= {calango}></img>
                <p>preço: R$50,00</p>
                <button>adicionar ao carrinho</button> 
            </div>

            <div>
                <p>calango</p>
                <img src= {calango}></img>
                <p>preço: R$50,00</p>
                <button>adicionar ao carrinho</button> 
            </div>

            <div>
                <p>calango</p>
                <img src= {calango}></img>
                <p>preço: R$50,00</p>
                <button>adicionar ao carrinho</button> 
            </div>

            <div>
                <p>calango</p>
                <img src= {calango}></img>
                <p>preço: R$50,00</p>
                <button>adicionar ao carrinho</button> 
            </div>

            <div>
                <p>calango</p>
                <img src= {calango}></img>
                <p>preço: R$50,00</p>
                <button>adicionar ao carrinho</button> 
            </div>

            
             
        </ContainerDaHome>
        )
    } 
}