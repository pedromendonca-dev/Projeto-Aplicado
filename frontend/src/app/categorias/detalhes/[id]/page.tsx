"use client";

import React from "react";

import Layout from "@/components/layout/Layout";
import { Column } from "@/components";
import CategoriesTable from "@/components/table-categories";

const DetalhesCategoria = () => {
  return (
    <Layout>
      <Column width="100%" height="100%" padding="30px">
        <CategoriesTable />
      </Column>
    </Layout>
  );
};

export default DetalhesCategoria;
