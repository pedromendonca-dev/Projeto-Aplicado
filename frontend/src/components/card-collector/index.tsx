"use client"

import Image from "next/image";
import styled, { css } from "styled-components";





const Categorias = [
    {
        nome: "Limpeza Residencial",
        src: "/images/limpeza-residencial.png"
    },
    {
        nome: "Jardinagem e Paisagismo",
        src: "/images/jardinagem.png"
    },
    {
        nome: "Construção e Reforma",
        src: "/images/construcao.png"
    },
    {
        nome: "Serviços de Mudança",
        src: "/images/mudanca.png"
    },
    {
        nome: "Reparo elétrico",
        src: "/images/eletrico.png"
    },
    {
        nome: "Limpeza de Piscinas",
        src: "/images/piscina.png"
    },
]




const CardCollector = () => (
<>

  <CardBodyDiv>
    <CardCollectorDiv>
        {Categorias.map((categoria, indice ) => (
            <Cards key={indice}>
                <Image 
                src={categoria.src} 
                alt="imagem"
                width={249} 
                height={119}
                style={{ borderRadius: '8px 8px 0px 0px', overflow: "hidden", filter: 'brightness(0.6)'}} 
                />
                <CardName>{categoria.nome}</CardName>
            </Cards>
        )
        )}    
    </CardCollectorDiv>
  </CardBodyDiv>
</>
);

const CardBodyDiv = styled.div(
  ({ theme }) => css`
    position: absolute;
    display: flex;
    z-index: 1;
    

    top: 180px;
    left:300px;

    height: calc(100% - 180px);
    width: calc(100% - 300px);
    
    

    color: ${theme.colors.black};
    background-color: ${theme.colors.blue[200]};
  `
);

const CardCollectorDiv = styled.div(
 ({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 28px 28px; 
    max-width: calc(100% - 50px);
    max-height: 380px;
    margin-left: ${theme.space.s8};
    margin-top: ${theme.space.s7};
 `
);

const Cards = styled.div(
 ( { theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    width: 250px;
    height: 165px;
    border-radius: 9.5px;
    border-width: 1px;
    border-color: #C5C5C5;
    border-style: solid;

    justify-content: center;
    box-sizing: border-box;
 `
)

const CardName = styled.p(
    ( { theme }) => css`

    display: flex;
    padding: ${theme.space.s4};

    line-height: 18px;
    font-size: 12px;
    font-weight: 300;

    margin-left: 5px;
    letter-spacing: 0px;

    `
)

export default CardCollector;