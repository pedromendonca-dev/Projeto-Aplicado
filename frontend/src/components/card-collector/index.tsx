"use client"

import Image from "next/image";
import styled, { css } from "styled-components";
import TesteImage from "@/assets/images/jardinagem.jpeg";
import { string } from "zod";




const Categorias = [
    {
        nome: "Limpeza Residencial",
        src: {TesteImage} 
    },
    {
        nome: "Jardinagem e Paisagismo",
        src: ""
    },
    {
        nome: "Construção e Reforma",
        src: ""
    },
    {
        nome: "Serviços de Mudança",
        src: ""
    },
    {
        nome: "Reparo elétrico",
        src: ""
    },
    {
        nome: "Limpeza de Piscinas",
        src: ""
    },
]




const CardCollector = () => (
<>

  <CardBodyDiv>
    <CardCollectorDiv>
        {Categorias.map((categoria, indice ) => (
            <Cards key={indice}>
                <Image 
                src={TesteImage} 
                alt="imagem"
                layout="intrinsic"
                width={250} 
                height={120}
                style={{ borderRadius: '8px 8px 0px 0px', overflow: "hidden"}} 
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
    max-width: 100%;
    max-height: 400px;
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
    border-radius: 8px;
    border-width: 0.8px;
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

    font-size: 12px;
    line-height: 18px;
    font-weight: 200;
    text-align: left;
    margin-left: 14px;

    `
)

export default CardCollector;