"use client"

import MudarSenhaForm from '@/components/forms/perfil-senha-form';
import HeaderPerfil from '@/components/header/perfil-index';
import PerfilBody from '@/components/perfil';
import SideNavbarPerfil from '@/components/side-navbar/index-perfil';






const PerfilSenha = () => {

    return(
        <>
        <HeaderPerfil />
        <SideNavbarPerfil />
        <MudarSenhaForm />
        </>
    )
}

export default PerfilSenha