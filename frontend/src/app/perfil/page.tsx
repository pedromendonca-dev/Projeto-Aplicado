"use client"

import { SideNavbar } from '@/components';
import HeaderPerfil from '@/components/header/perfil-index';
import { SideNavbarPerfil } from '@/components/side-navbar/index-perfil';


// AUTENTICAÇÃO

// CHECAR ID

const Perfil = () => {
    return(
        <>
        <HeaderPerfil />
        <SideNavbarPerfil />
        </>
    )
}

export default Perfil