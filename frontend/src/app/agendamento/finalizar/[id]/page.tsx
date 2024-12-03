"use client";

import FinalizarAgendamento from "@/components/forms/agendamento-finalizar-form";

import Layout from "@/components/layout/Layout";
import React from "react";

const AgendamentoFinal = () => {
  return (
    <Layout header='Finalizar agendamento'>
      <FinalizarAgendamento />
    </Layout>
  );
};

export default AgendamentoFinal;
