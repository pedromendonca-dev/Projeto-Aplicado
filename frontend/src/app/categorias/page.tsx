"use client"

import React from 'react'

import Header from '@/components/header'
import CardCollector from '@/components/card-collector';

import { SideNavbar } from '@/components';

 const Teste = () => {
  return (
    <>
    <Header headerTitle="Serviços Contratados" />
    <SideNavbar />
    <CardCollector />
    </>
  )
}

export default Teste;

