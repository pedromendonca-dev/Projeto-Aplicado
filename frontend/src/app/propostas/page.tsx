"use client";

import React from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import Header from "@/components/header";
import SideNavbarProfessional from "@/components/side-navbar/index-professional";
import ProfessionalTable from "@/components/table-proposal";



const Wrapper = styled.div`
  background-color: ${({ theme }) => 
    theme.colors.blue[200]};
  min-height: 100vh;
`;

const Proposal = () => {
  const theme = useTheme();

  return (
      
      
    <Wrapper theme={theme}>
      <SideNavbarProfessional/>
      <Header headerTitle="Propostas" />
      <ProfessionalTable/>
    </Wrapper>
    );
};

export default Proposal;
