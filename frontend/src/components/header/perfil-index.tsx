"use client"

import { Container, Paper } from "@mui/material"
import styled, { css } from "styled-components"
import { theme } from "@/lib/theme";
import { IconButton } from '@mui/material';
import { Button } from "../button";
import Image from "next/image";

import Left from "@/assets/images/left.svg";


const ContainerHead = styled(Container)(({ theme }) => ({

    backgroundColor: theme.colors.white,
    width: '100%',
    height: '70px',

    margin: 0,
    padding: 0,

    position: 'fixed', 
    top: 0,            
    left: 0,          
    zIndex: 1000,
    alignItems: 'center',

    boxShadow: 'none',
    borderBottom: '1px solid #E7E7E7',

    justifyItems: 'start',
    justifyContent: 'center',
}));


const HeaderPerfil = () => {
    return (
        <ContainerHead 
        disableGutters
        maxWidth={false}
        >
            <Button type="button" variant="arrow_back_button" justifyContent="center" alignItems="center" marginY={theme.space.s2} marginLeft={theme.space.s5}>
                <Image src={Left} alt="botão-de-voltar" />
            </Button>
        
        </ContainerHead>

    )

}

export default HeaderPerfil;