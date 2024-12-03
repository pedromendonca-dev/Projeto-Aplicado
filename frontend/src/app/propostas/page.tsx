"use client";

import React from "react";
import Header from "@/components/header";
import SideNavbarProfessional from "@/components/side-navbar/index-professional";
import ProfessionalTable from "@/components/table-proposal";
import { Column, Row } from "@/components";

const Proposal = () => {
  return (
    <Row>
      <SideNavbarProfessional />
      <Column width="100%" height="100vh">
        <Header headerTitle="Propostas" />
        <Column width="100%" height="100%" padding="30px" backgroundColor='blue.200'>
          <ProfessionalTable />
        </Column>
      </Column>
    </Row>
  );
};

export default Proposal;
