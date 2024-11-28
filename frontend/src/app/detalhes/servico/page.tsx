"use client";

import { Column, Row } from "@/components";
import Card from "@mui/material/Card";
import React from "react";
import { theme } from "@/lib/theme";
import { Typography } from "@mui/material";
import Layout from "@/components/layout/Layout";

const DetalhesServico = () => {
  return (
    <Layout header="Detalhes do serviço">
      <Row
        width="90%"
        height="64vh"
        marginLeft={theme.space.s11}
        marginTop={theme.space.s9}
        marginRight={theme.space.s10}
        backgroundColor={theme.colors.white}
        border="1px solid #E7E7E7"
        marginBottom={theme.space.s4}
      >
        <Column width="50%" height="100%" borderRight="1px solid #E7E7E7">
          <Typography
            marginTop={theme.space.s9}
            marginLeft={theme.space.s8}
            marginBottom={theme.space.s2}
            fontSize={14}
            fontWeight={600}
          >
            Categoria
          </Typography>
          <Row
            width="140px"
            height="36px"
            marginLeft={theme.space.s8}
            marginBottom={theme.space.s7}
          >
            <Card
              sx={{
                background: theme.colors.blue[700],
                alignItems: "center",
                padding: "8px",
                boxShadow: "none",
              }}
            >
              <Typography
                fontSize={12}
                fontWeight={600}
                color={theme.colors.blue[800]}
              >
                Limpeza Residencial
              </Typography>
            </Card>
          </Row>
          <Typography
            marginTop={theme.space.s3}
            marginLeft={theme.space.s8}
            marginBottom={theme.space.s2}
            fontSize={14}
            fontWeight={600}
          >
            Serviços Selecionados
          </Typography>
          <Row
            width="auto"
            height="34px"
            marginLeft={theme.space.s8}
            marginBottom={theme.space.s7}
          >
            <Card
              sx={{
                mr: theme.space.s2,
                background: theme.colors.pink[100],
                alignItems: "center",
                padding: "8px",
                boxShadow: "none",
              }}
            >
              <Typography
                fontSize={12}
                fontWeight={600}
                color={theme.colors.pink[200]}
              >
                Limpeza Residencial
              </Typography>
            </Card>
            <Card
              sx={{
                mr: theme.space.s2,
                background: theme.colors.orange[100],
                alignItems: "center",
                padding: "8px",
                boxShadow: "none",
              }}
            >
              <Typography
                fontSize={12}
                fontWeight={600}
                color={theme.colors.orange[200]}
              >
                Limpeza de Janelas
              </Typography>
            </Card>
            <Card
              sx={{
                mr: theme.space.s2,
                background: theme.colors.green[200],
                alignItems: "center",
                padding: "8px",
                boxShadow: "none",
              }}
            >
              <Typography
                fontSize={12}
                fontWeight={600}
                color={theme.colors.green[300]}
              >
                Limpeza de Tapetes
              </Typography>
            </Card>
          </Row>
          <Typography
            marginLeft={theme.space.s8}
            marginBottom={theme.space.s2}
            fontSize={14}
            fontWeight={600}
          >
            Título
          </Typography>
          <Typography
            marginLeft={theme.space.s8}
            marginBottom={theme.space.s6}
            fontSize={12}
            fontWeight={300}
          >
            Limpeza residencial em Messejana
          </Typography>
          <Typography
            marginLeft={theme.space.s8}
            marginBottom={theme.space.s2}
            fontSize={14}
            fontWeight={600}
          >
            Descrição
          </Typography>
          <Typography
            marginLeft={theme.space.s8}
            marginBottom={theme.space.s5}
            paddingRight={theme.space.s5}
            fontSize={12}
            fontWeight={300}
          >
            ”Gostaria de sua ajuda para realizar uma limpeza geral na minha
            casa. Possuo muitas janelas que precisam de uma limpeza profunda e
            só, não consigo.”
          </Typography>
        </Column>
        <Column width="auto">
          <Typography
            marginTop={theme.space.s9}
            marginLeft={theme.space.s8}
            marginBottom={theme.space.s2}
            fontSize={14}
            fontWeight={600}
          >
            Data do Serviço
          </Typography>
          <Typography
            marginLeft={theme.space.s8}
            marginBottom={theme.space.s10}
            fontSize={12}
            fontWeight={300}
          >
            17/05/2024, 11:00
          </Typography>
          <Typography
            marginLeft={theme.space.s8}
            marginBottom={theme.space.s2}
            fontSize={14}
            fontWeight={600}
          >
            Status
          </Typography>
          <Typography
            marginLeft={theme.space.s8}
            marginBottom={theme.space.s5}
            paddingRight={theme.space.s5}
            fontSize={12}
            fontWeight={300}
          >
            Finalizado
          </Typography>
        </Column>
      </Row>
    </Layout>
  );
};

export default DetalhesServico;
