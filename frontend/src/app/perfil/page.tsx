"use client"

import HeaderPerfil from '@/components/header/perfil-index';
import PerfilBody from '@/components/perfil';
import SideNavbarPerfil from '@/components/side-navbar/index-perfil';




// AUTENTICAÇÃO

// CHECAR ID

const Perfil = () => {

    return(
        <>
        <HeaderPerfil />
        <SideNavbarPerfil />
        <PerfilBody />
        </>
    )
}

export default Perfil