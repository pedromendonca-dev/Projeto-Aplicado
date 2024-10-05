
import styled, { css } from "styled-components"

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { theme } from "@/lib/theme";
import { Typography , TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Form from "./base-form";
import { AgendamentoFinalForm, agendamentoFinalFormSchema } from "@/lib/schemas/agendamento-final";
import { AgendamentoFinalProps } from "@/lib/interface/agendamento-final";
import { Row, Column} from "@/components";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    paddingTop: theme.space.s6,
    paddingBottom: theme.space.s6,
    paddingLeft: theme.space.s7,
    paddingRight: theme.space.s6,
    textAlign: 'start',
    color: theme.colors.black,
    border: '1px solid #E7E7E7',
    boxShadow: 'none',
  }));


const ContainerDiv = styled.div(
    ({ theme }) => css`
      position: absolute;
      display: block grid;
      z-index: 1;
      
  
      top: 180px;
      left:300px;
  
      height: calc(100% - 180px);
      width: calc(100% - 300px);
   
  
      background-color: ${theme.colors.blue[200]}

      ;
    `
  );


const FinalizarAgendamentoForm = () => {

    const router = useRouter()

    const {
        handleSubmit,
        register,
        formState: { isValid },
     } = useForm<AgendamentoFinalForm>({
        mode: "all",
        resolver: zodResolver(agendamentoFinalFormSchema)
     });


     const agendamentoFinal = (data:AgendamentoFinalProps) => {
        console.log(data)
     }


  return (
   <ContainerDiv>
        <Form onSubmit={handleSubmit(agendamentoFinal)}>
            <Box sx={{ flexGrow: 1, backgroundColor: theme.colors.gray, mx: theme.space.s9, mt: theme.space.s8, mb: theme.space.s4 ,boxShadow: 'none'}}>
                <Grid container rowSpacing={theme.space.s5} columnSpacing={theme.space.s5}>
                    <Grid size={6}>
                        <Item square>
                            <Typography fontSize={16} fontWeight={550} sx={{ mb: 2 }}>
                                Informações Pessoais 
                            </Typography>
                            <Typography fontSize={12} fontWeight={545} sx={{ mb: 2 }}>
                                Nome
                            </Typography>

                            <TextField
                                label=""
                                sx={{ width: '95%'}}
                                {...register("nome")}
                            />

                            <Typography fontSize={12} fontWeight={545} sx={{ mb: 2, mt: 2 }}>
                                Sobrenome
                            </Typography>

                            <TextField
                                label=""
                                sx={{ width: '95%', mb: 1}}
                                {...register("sobrenome")}
                            />

                        </Item>
                    </Grid>

                    <Grid size={6}>
                        <Item square>
                            <Typography fontSize={16} fontWeight={550} sx={{ mb: 2 }}>
                                Contato
                            </Typography>
                            <Typography fontSize={12} fontWeight={545} sx={{ mb: 2 }}>
                                Número de telefone
                            </Typography>

                            <TextField
                                label=""
                                sx={{ width: '95%'}}
                                {...register("contato")}
                            />

                            <Typography fontSize={12} fontWeight={545} sx={{ mb: 2, mt: 2 }}>
                                E-mail
                            </Typography>

                            <TextField
                                label=""
                                sx={{ width: '95%', mb: 1}}
                                type="email"
                                {...register("email")}
                            />
                        </Item>
                    </Grid>
                </Grid>
            </Box>

            <Box 
                sx={{ flexGrow: 1, 
                        backgroundColor: '#fff',
                        mx: theme.space.s9, 
                        mt: theme.space.s5, 
                        mb: theme.space.s5,
                        textAlign: 'start',
                        color: theme.colors.black,
                        border: '1px solid #E7E7E7',
                        height: '280px'
                        }}>

                            <Row width='100%' height='72px' alignItems='center' marginX={theme.space.s7} marginBottom={theme.space.s2}>
                                <Typography fontSize={16} fontWeight={550}>
                                    Endereço
                                </Typography>
                            </Row>
                            <Row height='74px' alignItems='center' marginX={theme.space.s7} marginLeft={theme.space.s7} >
                                <Column marginBottom='s2' width='24%' marginRight='s4'>
                                    <Typography fontSize={12} fontWeight={545} sx={{ mb: 2 }}>
                                        CEP
                                    </Typography>
                                    <TextField
                                        {...register("cep")}
                                        >
                                    </TextField>
                                </Column>

                                <Column marginBottom='s2' width='51%' marginRight='s4'>
                                    <Typography fontSize={12} fontWeight={545} sx={{ mb: 2 }} >
                                        Rua
                                    </Typography>
                                    <TextField
                                        {...register("rua")}
                                        >
                                    </TextField>
                                </Column>

                                <Column marginBottom='s2' marginRight='s4'>
                                    <Typography fontSize={12} fontWeight={545} sx={{ mb: 2 }}>
                                        Número
                                    </Typography>
                                    <TextField
                                        {...register("numero")}
                                        >
                                    </TextField>
                                </Column>
                            </Row>
                </Box>
        </Form>
    </ContainerDiv>
  );
}

export default FinalizarAgendamentoForm;