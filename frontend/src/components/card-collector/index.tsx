"use client";

import styled, { css } from "styled-components";
import { Column } from "../column";
import { theme } from "@/lib/theme";
import { Row } from "../row";
import { TextField, Typography } from "@mui/material";
import RegisterCategoriaForm from "../forms/categoria-form";




const Container = styled.div(
  ({ theme }) => css`
    position: absolute;
    display: block grid;
    z-index: 1;
    padding: 32px;
    top: 180px;
    left: 300px;
    height: calc(100% - 180px);
    width: calc(100% - 300px);
    background-color: ${theme.colors.blue[200]};
  `
);



export async function CategoriasBody () {

  const data = await fetch("http://localhost:3001/categorys");

  const categorias = await data.json();



  return (
    
    <Container>
      <Row width='95%' height='450px' flexWrap='wrap' marginBottom={theme.space.s2}>
        {categorias.map((categoria: any) => (
          <Column
            width='30%'
            height='48%'
            marginX={theme.space.s3}
            marginY={theme.space.s3}
            backgroundColor={theme.colors.white}
            key={categoria.id}
          >
            <Typography>{categoria.name}</Typography>
            <Typography>{categoria.created_at}</Typography>
            <Typography>{categoria.description}</Typography>
          </Column>
        ))}
      </Row>
      <Row width='80%' height='200px'>
        <RegisterCategoriaForm />
      </Row>
    </Container>
  );
}

export default CategoriasBody;
