"use client";

import { Column } from "@/components/column";
import styled, { css } from "styled-components";
import { theme } from "@/lib/theme";
import { Row } from "@/components/row";
import Image from "next/image";
import { Avatar, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import ProfissionalPhoto from "@/assets/images/profissional_exemplo.png";
import Galeria1 from "@/assets/images/galeria_1.png";
import Galeria2 from "@/assets/images/galeria_2.png";
import Galeria3 from "@/assets/images/galeria_1.png";
import ratings from "@/assets/images/estrelas.png";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { Button } from "@/components";
import { useRouter } from "next/navigation";
import FeedbackDialog from "@/components/feedback-dialog";

const Detalhes = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const galeria = [Galeria1, Galeria2, Galeria3];

  const profGeral = {
    nome: "Ana Silva",
    especialidade: "Serviços de limpeza residencial",
    sobre:
      "Olá, meu nome é Ana Silva e ofereço serviços de limpeza residencial há mais de 5 anos. Meu objetivo é proporcionar um ambiente limpo e acolhedor para você e sua família, utilizando produtos de alta qualidade e técnicas eficientes.",
  };

  const profDetalhes = {
    atuacao_bairros: "Aldeota, Meireles, Guararapes, Messejana e Papicu",
    preco_detalhes: "R$ 100,00 (Serviços extras , valor a combinar)",
    disponibilidade_detalhes: [
      "Segunda a Sexta: 7h - 12h",
      "Sábado e Domingo: 10h - 14h",
    ],
    contato: {
      telefone: "(85) 99948-3252",
      email: "anasilva@gmail.com",
      social: "@analsilvam",
    },
  };

  const router = useRouter();

  return (
    <Layout header="Detalhes do Profissional">
      <FlexBox>
        <Column width="100%" height="260vh">
          <Row
            width="82%"
            height="185px"
            backgroundColor={theme.colors.white}
            border="1px solid #E7E7E7"
            marginBottom={theme.space.s4}
          >
            <Column
              marginY={theme.space.s7}
              marginLeft={theme.space.s7}
              marginRight={theme.space.s5}
            >
              <Image
                src={ProfissionalPhoto}
                alt="Teste"
                width={103}
                height={103}
              />
            </Column>
            <Column width="85%" marginTop={theme.space.s7}>
              <Typography fontSize={16} fontWeight={600}>
                {profGeral.nome}
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={200}
                marginBottom={theme.space.s3}
                color={theme.colors.gray[200]}
              >
                {profGeral.especialidade}
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={100}
                marginTop={theme.space.s3}
                overflow="hidden"
                paddingRight={theme.space.s2}
              >
                {profGeral.sobre}
              </Typography>
            </Column>
          </Row>
          {/* Começo do Card de Especializações, apagar depois*/}
          <Row
            width="82%"
            height="330px"
            backgroundColor={theme.colors.white}
            border="1px solid #E7E7E7"
            marginBottom={theme.space.s4}
            flexShrink="true"
          >
            <Column
              width="65%"
              marginY={theme.space.s6}
              marginLeft={theme.space.s7}
              borderRight="1px solid #E7E7E7"
            >
              <Typography
                fontSize={16}
                fontWeight={600}
                marginBottom={theme.space.s4}
              >
                Especializações
              </Typography>
              <Row width="90%" marginBottom={theme.space.s6}>
                <Card
                  sx={{
                    background: theme.colors.pink[100],
                    alignItems: "center",
                    mr: 1,
                    boxShadow: "none",
                  }}
                >
                  <Typography
                    fontWeight={500}
                    fontSize={12}
                    color={theme.colors.pink[200]}
                    sx={{ pt: 1, pb: 1, pl: 2, pr: 2 }}
                  >
                    Limpeza Residencial
                  </Typography>
                </Card>
                <Card
                  sx={{
                    background: theme.colors.green[200],
                    alignItems: "center",
                    mr: 1,
                    boxShadow: "none",
                  }}
                >
                  <Typography
                    fontWeight={500}
                    fontSize={12}
                    color={theme.colors.green[300]}
                    sx={{ pt: 1, pb: 1, pl: 2, pr: 2 }}
                  >
                    Limpeza de Janelas
                  </Typography>
                </Card>
                <Card
                  sx={{
                    background: theme.colors.orange[100],
                    alignItems: "center",
                    mr: 1,
                    boxShadow: "none",
                  }}
                >
                  <Typography
                    fontWeight={500}
                    fontSize={12}
                    color={theme.colors.orange[200]}
                    sx={{ pt: 1, pb: 1, pl: 2, pr: 2 }}
                  >
                    Limpeza de Tapetes
                  </Typography>
                </Card>
              </Row>
              <Typography
                fontSize={16}
                fontWeight={600}
                marginBottom={theme.space.s2}
              >
                Locais de atuação
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={100}
                overflow="hidden"
                marginBottom={theme.space.s8}
              >
                {profDetalhes.atuacao_bairros}
              </Typography>
              <Typography
                fontSize={16}
                fontWeight={600}
                marginBottom={theme.space.s2}
              >
                Preço por hora
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={100}
                overflow="hidden"
                marginBottom={theme.space.s2}
              >
                {profDetalhes.preco_detalhes}
              </Typography>
            </Column>
            <Column height="332px" width="30%" marginLeft={theme.space.s2}>
              <Typography
                fontSize={16}
                fontWeight={600}
                marginBottom={theme.space.s4}
                paddingTop={theme.space.s6}
                paddingLeft={theme.space.s7}
                overflow="hidden"
              >
                Disponibilidade
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={100}
                marginBottom={theme.space.s4}
                paddingLeft={theme.space.s7}
                overflow="hidden"
              >
                {profDetalhes.disponibilidade_detalhes[0]}
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={100}
                marginBottom={theme.space.s6}
                paddingLeft={theme.space.s7}
                overflow="hidden"
              >
                {profDetalhes.disponibilidade_detalhes[1]}
              </Typography>
              <Divider />
              <Typography
                fontSize={16}
                fontWeight={600}
                paddingTop={theme.space.s5}
                marginBottom={theme.space.s3}
                paddingLeft={theme.space.s7}
                overflow="hidden"
              >
                Contato
              </Typography>
              <Row marginBottom={theme.space.s1}>
                <Typography
                  fontSize={12}
                  fontWeight={550}
                  marginBottom={theme.space.s2}
                  paddingLeft={theme.space.s7}
                  paddingRight={theme.space.s1}
                  overflow="hidden"
                >
                  Telefone:
                </Typography>
                <Typography fontSize={12} fontWeight={100} overflow="hidden">
                  {profDetalhes.contato.telefone}
                </Typography>
              </Row>
              <Row marginBottom={theme.space.s1}>
                <Typography
                  fontSize={12}
                  fontWeight={550}
                  marginBottom={theme.space.s2}
                  paddingLeft={theme.space.s7}
                  paddingRight={theme.space.s1}
                  overflow="hidden"
                >
                  E-mail:
                </Typography>
                <Typography fontSize={12} fontWeight={100} overflow="hidden">
                  {profDetalhes.contato.email}
                </Typography>
              </Row>
              <Row marginBottom={theme.space.s1}>
                <Typography
                  fontSize={12}
                  fontWeight={550}
                  marginBottom={theme.space.s2}
                  paddingLeft={theme.space.s7}
                  paddingRight={theme.space.s1}
                  overflow="hidden"
                >
                  Redes sociais:
                </Typography>
                <Typography fontSize={12} fontWeight={100} overflow="hidden">
                  {profDetalhes.contato.social}
                </Typography>
              </Row>
            </Column>
          </Row>
          {/* Começo da Galeria de Fotos, apagar depois*/}
          <Column
            width="82%"
            paddingX={theme.space.s6}
            paddingY={theme.space.s6}
            backgroundColor={theme.colors.white}
            border="1px solid #E7E7E7"
            marginBottom={theme.space.s4}
            flexWrap="wrap"
          >
            <Typography fontSize={16} fontWeight={600}>
              Galeria de fotos
            </Typography>
            <Row width="98%" marginTop={theme.space.s3}>
              {galeria.map((image, index) => (
                <Image
                  src={image}
                  alt={`image-${index}`}
                  width={292}
                  height={164}
                  style={{ marginRight: theme.space.s5 }}
                />
              ))}
            </Row>
          </Column>
          {/* Agendamento ...*/}
          <Row
            width="82%"
            height="402px"
            backgroundColor={theme.colors.white}
            border="1px solid #E7E7E7"
            marginBottom={theme.space.s4}
            flexShrink="true"
          >
            <Column
              width="50%"
              borderRight="1px solid #E7E7E7"
              padding={theme.space.s8}
            >
              <Row width="100%" height="36px">
                <Typography
                  fontSize={16}
                  fontWeight={600}
                  marginBottom={theme.space.s2}
                >
                  Agendamento
                </Typography>
              </Row>
              <Column width={76}>
                <Button onClick={() => router.push("/agendamento/inicial")}>
                  20:00
                </Button>
              </Column>
            </Column>
            <Column width="50%" padding={theme.space.s8}>
              <Typography
                fontSize={16}
                fontWeight={600}
                marginBottom={theme.space.s5}
              >
                Políticas de Cancelamento e Reagendamento
              </Typography>

              <Typography
                fontSize={12}
                fontWeight={100}
                marginBottom={theme.space.s6}
                lineHeight={1.8}
                letterSpacing={1.1}
                textAlign={"justify"}
              >
                <strong>1. Política de Cancelamento:</strong> Cancelamentos
                devem ser feitos com pelo menos 24 horas de antecedência para
                reembolso total.Política de Cancelamento: Cancelamentos devem
                ser feitos com pelo menos 24 horas de antecedência para
                reembolso total.Política de Cancelamento: Cancelamentos devem
                ser feitos com pelo menos 24 horas de antecedência para
                reembolso total.
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={100}
                marginBottom={theme.space.s2}
                lineHeight={1.8}
                letterSpacing={1.1}
                textAlign={"justify"}
              >
                <strong>Política de Reagendamento:</strong> Serviços podem ser
                reagendados até 12 horas antes do horário marcado sem custos
                adicionais.
              </Typography>
            </Column>
          </Row>
          {/* Feedback */}
          <Row
            width="82%"
            height="420px"
            backgroundColor={theme.colors.white}
            border="1px solid #E7E7E7"
            marginBottom={theme.space.s4}
            flexShrink="true"
          >
            <Column width="100%" padding={theme.space.s8}>
              <Typography
                fontSize={16}
                fontWeight={600}
                marginBottom={theme.space.s4}
              >
                Feedbacks
              </Typography>
              <Row
                width="92%"
                height="86px"
                padding="32px 24px 32px 24px"
                alignItems={"center"}
                justifyContent={"space-between"}
                borderBottom={"1px solid #EFEFEF"}
              >
                <Avatar />
                <Column
                  marginLeft={theme.space.s5}
                  marginBottom={theme.space.s2}
                  flex="1"
                >
                  <Typography fontSize={16} fontWeight={600}>
                    João M.
                  </Typography>
                  <Typography fontSize={14} fontWeight={100}>
                    "Ana foi fantástica! Minha casa nunca esteve tão limpa."
                  </Typography>
                </Column>
                <Image src={ratings} alt={"rating"} />
              </Row>
              <Row
                width="92%"
                height="86px"
                padding="32px 24px 32px 24px"
                alignItems={"center"}
                justifyContent={"space-between"}
                borderBottom={"1px solid #EFEFEF"}
              >
                <Avatar />
                <Column marginLeft={theme.space.s5} flex="1">
                  <Typography fontSize={16} fontWeight={600}>
                    João M.
                  </Typography>
                  <Typography fontSize={14} fontWeight={100}>
                    "Ana foi fantástica! Minha casa nunca esteve tão limpa."
                  </Typography>
                </Column>
                <Image src={ratings} alt={"rating"} />
              </Row>
              <Row
                width="92%"
                height="86px"
                padding="32px 24px 32px 24px"
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Avatar />
                <Column marginLeft={theme.space.s5} flex="1">
                  <Typography fontSize={16} fontWeight={600}>
                    João M.
                  </Typography>
                  <Typography fontSize={14} fontWeight={100}>
                    "Ana foi fantástica! Minha casa nunca esteve tão limpa."
                  </Typography>
                </Column>
                <Image src={ratings} alt={"rating"} />
              </Row>
              <Button
                width={"136px"}
                padding={theme.space.s2}
                alignSelf={"flex-end"}
                marginTop={theme.space.s2}
                onClick={() => setIsDialogOpen(true)}
              >
                Avaliar Serviço
              </Button>

              <FeedbackDialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                providerId="f472d043-09cc-4c84-8d0e-f6b7f5a39b18"
                consumerId={localStorage.getItem("userId") || ""}
              />
            </Column>
          </Row>
        </Column>
      </FlexBox>
    </Layout>
  );
};

const FlexBox = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    align-items: flex-start;
    padding-right: ${(props) => props.theme.space.s8};
    padding-left: ${(props) => props.theme.space.s8};
    padding-top: ${(props) => props.theme.space.s7};
    padding-bottom: ${(props) => props.theme.space.s5};
    height: 65%;
    width: 98%;
  `
);

export default Detalhes;
