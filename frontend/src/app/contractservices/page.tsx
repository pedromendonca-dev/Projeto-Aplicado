"use client";

import { SideNavbar } from "@/components";
import React from "react";
import Header from "@/components/header";
import Servicetable from "@/components/table-services";
import styled from "styled-components";
import { useTheme } from "styled-components";

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
