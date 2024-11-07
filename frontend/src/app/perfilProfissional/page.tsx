"use client";

import styled from "styled-components"; 
import ProfileProfessionalForm from '@/components/forms/profissional-form';
import Header from "@/components/header";
import SideNavbarProfessional from '@/components/side-navbar/index-professional';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[200]};
  min-height: 175vh;
`;

const PerfilProfessional = () => {
    return (
        <>
            <Wrapper>
                <SideNavbarProfessional />
                <Header headerTitle="Meu Perfil" />
                <ProfileProfessionalForm />
            </Wrapper>
        </>
    );
}

export default PerfilProfessional;
