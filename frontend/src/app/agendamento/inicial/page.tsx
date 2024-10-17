"use client"

import { SideNavbar } from '@/components';
import AgendamentoForm from '@/components/forms/agendamento-form';

import Header from '@/components/header'
import React from 'react'


 
 const Agendamento = () => {
  return (
    <>
    <Header headerTitle="O que você precisa?" />
    <SideNavbar />
    <AgendamentoForm />
    </>
  )
}



export default Agendamento