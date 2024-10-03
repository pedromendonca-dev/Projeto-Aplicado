"use client";

import Image from "next/image";
import styled, { css } from "styled-components";

import { categorys } from "@/lib/utils/constants/category";

const CardCollector = () => (
  <CardBodyDiv>
    <CardCollectorDiv>
      {categorys.map((categoria, indice) => (
        <Cards key={indice}>
          <Image
            src={categoria.src}
            alt="imagem"
            width={249}
            height={119}
            style={{
              borderRadius: "8px 8px 0px 0px",
              overflow: "hidden",
              filter: "brightness(0.6)",
            }}
          />
          <CardName>{categoria.nome}</CardName>
        </Cards>
      ))}
    </CardCollectorDiv>
  </CardBodyDiv>
);

const CardBodyDiv = styled.div(
  ({ theme }) => css`
    position: absolute;
    display: flex;
    z-index: 1;

    top: 180px;
    left: 300px;

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
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    background-color: ${theme.colors.white};

    width: 250px;
    height: 165px;

    border-radius: 9.5px;
    border-width: 1px;
    border-color: #c5c5c5;
    border-style: solid;
    z-index: 2;

    justify-content: center;
    box-sizing: border-box;

    &:hover,
    &:active {
      cursor: pointer;

      background-color: ${theme.colors.black};
      color: ${theme.colors.white};

      transform: translateY(-3%);
      -webkit-transition: transform 0.5s ease-out;
      -o-transition: transform 0.5s ease-out;
      transition: transform 0.5s ease-out;

      box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    }
  `
);

const CardName = styled.p(
  ({ theme }) => css`
    display: flex;
    padding: ${theme.space.s4};

    line-height: 18px;
    font-size: 12px;
    font-weight: 400;

    margin-left: 5px;
    letter-spacing: 0px;
  `
);

export default CardCollector;
