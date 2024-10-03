"use client"
import { SideNavbar } from '@/components';
import CardCollector from '@/components/card-collector';
import Header from '@/components/header'
import React from 'react'


 
 const Teste = () => {
  return (
    <>
    <Header headerTitle="Categorias" />
    <SideNavbar />
    <CardCollector />
    </>
  )
}

export default Teste;

