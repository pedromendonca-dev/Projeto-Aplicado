"use client";

import { Column, Row } from "@/components";
import Card from "@mui/material/Card";
import React from "react";
import { theme } from "@/lib/theme";
import { Typography } from "@mui/material";
import Layout from "@/components/layout/Layout";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getServicesById } from "@/lib/services/client/services";

const DetalhesServico = () => {
  const { id } = useParams();

  const { data: service } = useQuery({
    queryKey: ["getServicesById", id],
    queryFn: () => getServicesById({ serviceId: String(id) }),
    select: ({ data }) => data,
    enabled: !!id,
  });

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
                {service?.category_id}
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
            {service?.title}
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
            ”{service?.description}”
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
            {service?.date_time}
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
            {service?.status}
          </Typography>
        </Column>
      </Row>
    </Layout>
  );
};

export default DetalhesServico;
