"use client"

import { SideNavbar } from '@/components';
import CategoriasBody from '@/components/card-collector';
import Header from '@/components/header'
import React from 'react'


 
 const Categorias = () => {
  return (
    <>
    <Header headerTitle="Categorias" userId={32} />
    <SideNavbar />
    <CategoriasBody />
    </>
  )
}

export default Categorias;

