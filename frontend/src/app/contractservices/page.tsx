"use client";

import React from "react";

import Servicetable from "@/components/table-services";
import Layout from "@/components/layout/Layout";
import { Column } from "@/components";

const ContractServices = () => {
  return (
    <Layout header='Serviços contratados'>
      <Column width="100%" height="100%" padding="30px">
        <Servicetable />
      </Column>
    </Layout>
  );
};

export default ContractServices;
