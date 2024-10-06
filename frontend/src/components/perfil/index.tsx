"use client"

import styled, { css } from "styled-components"
import { Column } from "../column";
import { Row } from "../row"
import { theme } from "@/lib/theme";
import  Avatar from '@mui/material/Avatar';
import { Typography , TextField} from "@mui/material";
import Image from "next/image";
import Estrelas from "@/assets/images/estrelas.png"


// type PerfilData = {
//     nome: string,
//     email: string,
//     photo?: string,
//   }


    const PerfilContainer = styled.div(
        ({ theme }) => css`
        display: flex;
        position: relative;
        z-index: 2;
        background-color: ${theme.colors.white};
        width: 80%;
        height: 800px;
        padding-top: ${theme.space.s6};
        padding-left: ${theme.space.s7};

        top: 70px;
        left: 300px;
        alignItems: center,

        

        `);
    

    const PerfilBody = () => {
        return(
            <>
                <PerfilContainer>
                    <Column width='100%' height='100%'>
                        <Row width='100%' height='182px' backgroundColor='#AAE6BB' borderRadius={theme.space.s3} />
                            <Row width='862px' height='386px' position='absolute' top='116px' left='186px'>
                                <Column mr={theme.space.s7}>
                                    <Avatar
                                        alt="Marianne"
                                        sx={{ width: 170, height: 170, bgcolor: theme.colors.gray[100], fontSize: '32px', mb: theme.space.s8 }}
                                        >
                                            M
                                    </Avatar>
                                    <Typography fontSize={14} fontWeight={600} mb={theme.space.s7} align="left" mt='20px' ml={theme.space.s5}>
                                        Seu nome
                                    </Typography>

                                    <Typography fontSize={14} fontWeight={600} mb={theme.space.s7} align="left" mt='20px' ml={theme.space.s5}>
                                        Seu e-mail
                                    </Typography>
                                </Column>
                                <Column width='100%'>
                                    <Typography fontSize={20} fontWeight={600} mt='116px' mb={theme.space.s1} >
                                        Marianne Gomes
                                    </Typography>
                                    <Row mb={theme.space.s8} width='100%' justifyContent={'space-between'}>
                                        <Typography fontSize={12} fontWeight={200} color="#333333">
                                            Atualize sua foto e personalize suas informações pessoais
                                        </Typography>

                                        <Image
                                            src={Estrelas}
                                            alt="estrelas-rating"
                                        />
                                    </Row>
                                    <TextField
                                        label=""
                                        sx={{ width: '100%', mb: theme.space.s5}}
                                        />
                                    <TextField
                                        label=""
                                        sx={{ width: '100%', mb: theme.space.s3}}
                                        />
                                </Column>
                            </Row>
                            
                        <Row position='absolute' top='500px' width='100%' height='1px' backgroundColor='#F2F2F2' />

                        <Row position='absolute' top='522px' left='194px' width='858px' height='246px'>
                            <Column width='170px' marginRight={theme.space.s10}>
                                <Typography ml={theme.space.s4} fontSize={14} fontWeight={600} mt={theme.space.s2} mb={theme.space.s2} >
                                    Sua foto
                                </Typography>
                                <Typography ml={theme.space.s4} fontSize={12} fontWeight={200} mb={theme.space.s2} color="#333333" maxWidth='160px'>
                                    Essa é a foto que aparece em seu perfil
                                </Typography>
                            </Column>
                            <Column mt={theme.space.s1} ml={theme.space.s2} width='95%' backgroundColor={theme.colors.white} borderRadius={theme.space.s3} border={'1.5px dashed #A2A2A2'}>

                            </Column>
                        </Row>
                    </Column>
                </PerfilContainer>
            </>
        )
    }

    

  


  export default PerfilBody;