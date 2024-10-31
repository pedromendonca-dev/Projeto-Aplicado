"use client";

import React from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";

import { SideNavbar } from "@/components";

import Header from "@/components/header";
import Servicetable from "@/components/table-services";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[200]};
  min-height: 100vh;
`;

const ContractServices = () => {
  const theme = useTheme();

  return (
    <Wrapper theme={theme}>
      <Header headerTitle="Serviços contratados" />
      <SideNavbar />
      <Servicetable />
    </Wrapper>
  );
};

export default ContractServices;
