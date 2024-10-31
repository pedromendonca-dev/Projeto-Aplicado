"use client";

import FinalizarAgendamento from "@/components/forms/agendamento-finalizar-form";

import Header from "@/components/header";
import Aside from "@/components/shared/Sidemenu";
import React from "react";

const AgendamentoFinal = () => {
  return (
    <>
      <Header headerTitle="Finalizar Agendamento" />
      <Aside />
      <FinalizarAgendamento />
    </>
  );
};

export default AgendamentoFinal;
