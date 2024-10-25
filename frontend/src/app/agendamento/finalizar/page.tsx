"use client"


import { SideNavbar } from '@/components';
import FinalizarAgendamento from '@/components/forms/agendamento-finalizar-form';

import Header from '@/components/header'
import React from 'react'


 
 const AgendamentoFinal = () => {
  return (
    <>
    <Header headerTitle="Finalizar Agendamento" />
    <SideNavbar />
    <FinalizarAgendamento />
    </>
  )
}



export default AgendamentoFinal