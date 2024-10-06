import Image from "next/image";
import styled, { css } from "styled-components";

import Costumer from "@/assets/images/costumer.svg"
import Notification from "@/assets/images/notification.svg"
import Password from "@/assets/images/password.svg"
import { Typography } from "@mui/material";



export const SideNavbarPerfil = () => (

  <SideNavbarPerfilContainer >

    <NavItem href="#categories">
        <Image style={{ marginRight: 24 }} src={Costumer} alt="Categorias" />  
            Meu Perfil
    </NavItem>

    <NavItem href="#services" style={{ marginLeft: '2px'}}>
        <Image style={{ marginRight: 22 }} src={Password} alt="senha" />
         Senha
    </NavItem>

    <NavItem href="#about">
        <Image style={{ marginRight: 14 }} src={Notification} alt="notificações" />
       Notificações
    </NavItem>

  </SideNavbarPerfilContainer>
);

const SideNavbarPerfilContainer = styled.div(
  ({ theme }) => css`
    position: absolute;
    display: flex;

    width: 300px;
    height: 100%;

    top: 70px;
    left: 0px;

    align-items: center;
    flex-direction: column;

    z-index: 3;
    padding: ${theme.space.s4} ${theme.space.s6};
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};

    border-right: 1px solid #DADADA;
  `
);

const NavLabel = styled.label(
  ({ theme }) => css`
    width: 100%;
    margin-top: ${theme.space.s4};
    margin-bottom: ${theme.space.s6};
    
    text-align: left;
    color: ${theme.colors.black};
    font-size: ${theme.space.s4};
    font-weight: bold;    
  `
);

const NavItem = styled.a(
  ({ theme }) => css`

    display: flex;
    align-items: center;

    width: 100%;
    padding: ${theme.space.s4} ${theme.space.s4};

    text-decoration: none;
    text-align: left;

    font-size: ${theme.space.s3};
    color: ${theme.colors.black};   
    transition: background-color 0.3s, color 0.3s;

    border-radius: ${theme.space.s2};
    margin-bottom: ${theme.space.s4};
    padding-left: ${theme.space.s6};

    font-weight: 600;

     &:hover,
     &:focus {
        color: ${theme.colors.white};
        background-color:${theme.colors.black};
        border: 1px solid ${theme.colors.white};
        img {
          filter: invert(1);
          }
        }
  `
);