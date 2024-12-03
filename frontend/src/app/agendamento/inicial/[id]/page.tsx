"use client";

import AgendamentoForm from "@/components/forms/agendamento-form";

import Layout from "@/components/layout/Layout";
import React from "react";

const Agendamento = () => {
  return (
    <Layout header="Qual serviço você precisa?">
      <AgendamentoForm />
    </Layout>
  );
};

export default Agendamento;
