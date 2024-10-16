
import styled, { css } from "styled-components"

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { theme } from "@/lib/theme";
import { Typography , TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Form from "./base-form";
import { AgendamentoFinalForm, agendamentoFinalFormSchema } from "@/lib/schemas/agendamento-final";
import { AgendamentoFinalProps } from "@/lib/interface/agendamento-final";
import { Row, Column, Button} from "@/components";
import Card from '@mui/material/Card'
import AlertDialog from "../dialog";

import MagneticCard from "@/assets/images/magnetic_card.svg"
import PixSvg from "@/assets/images/pix.svg"
import PagamentoImg from "@/assets/images/pagamento.svg"
import Boleto from "@/assets/images/boleto.svg"
import Calendario from "@/assets/images/calendar.svg"



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    paddingTop: theme.space.s6,
    paddingBottom: theme.space.s6,
    paddingLeft: theme.space.s7,
    paddingRight: theme.space.s6,
    textAlign: 'start',
    color: theme.colors.black,
    boxShadow: 'none',
  }));


const ContainerDiv = styled.div(
    ({ theme }) => css`
      position: absolute;
      display: block grid;
      z-index: 1;
      
  
      top: 180px;
      left:300px;
  
      height: calc(100% + 420x);
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
                        <Item variant="outlined" square>
                            <Typography fontSize={16} fontWeight={600} sx={{ mb: 2 }} >
                                Informações Pessoais 
                            </Typography>
                            <Typography fontSize={12} fontWeight={550} sx={{ mb: 2 }}>
                                Nome
                            </Typography>

                            <TextField
                                label=""
                                sx={{ width: '95%'}}
                                {...register("nome")}
                            />

                            <Typography fontSize={12} fontWeight={550} sx={{ mb: 2, mt: 2 }}>
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
                        <Item square variant="outlined">
                            <Typography fontSize={16} fontWeight={600} sx={{ mb: 2 }}>
                                Contato
                            </Typography>
                            <Typography fontSize={12} fontWeight={550} sx={{ mb: 2 }}>
                                Número de telefone
                            </Typography>

                            <TextField
                                label=""
                                sx={{ width: '95%'}}
                                {...register("contato")}
                            />

                            <Typography fontSize={12} fontWeight={550} sx={{ mb: 2, mt: 2 }}>
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
                        height: '300px'
                        }}>

                            <Row width='100%' height='72px' alignItems='center' marginX={theme.space.s7} marginBottom={theme.space.s2}>
                                <Typography fontSize={16} fontWeight={600} marginTop={theme.space.s3}>
                                    Endereço
                                </Typography>
                            </Row>
                            <Row height='74px' alignItems='center' marginX={theme.space.s7} marginLeft={theme.space.s7} marginBottom={theme.space.s5} >
                                <Column marginBottom='s1' width='24%' marginRight='s4'>
                                    <Typography fontSize={12} fontWeight={550} sx={{ mb: 2  }}>
                                        CEP
                                    </Typography>
                                    <TextField
                                        {...register("cep")}
                                        >
                                    </TextField>
                                </Column>

                                <Column marginBottom='s1' width='55%' marginRight='s4'>
                                    <Typography fontSize={12} fontWeight={550} sx={{ mb: 2 }} >
                                        Rua
                                    </Typography>
                                    <TextField
                                        {...register("rua")}
                                        >
                                    </TextField>
                                </Column>

                                <Column marginBottom='s1' marginRight='s4' width='20%'>
                                    <Typography fontSize={12} fontWeight={550} sx={{ mb: 2 }}>
                                        Número
                                    </Typography>
                                    <TextField
                                        {...register("numero")}
                                        >
                                    </TextField>
                                </Column>
                            </Row>
                            <Row height='74px' alignItems='center' marginX={theme.space.s7} marginLeft={theme.space.s7} marginBottom={theme.space.s6}>
                                <Column marginTop='s2' marginBottom='s2' width='36%' marginRight='s4'>
                                    <Typography fontSize={12} fontWeight={550} sx={{ mb: 1.5 }}>
                                        Bairro
                                    </Typography>
                                    <TextField
                                        {...register("bairro")}
                                        >
                                    </TextField>
                                </Column>

                                <Column marginTop='s2' marginBottom='s2' width='36%' marginRight='s4'>
                                    <Typography fontSize={12} fontWeight={550} sx={{ mb: 1.5 }} >
                                        Cidade
                                    </Typography>
                                    <TextField
                                        {...register("cidade")}
                                        >
                                    </TextField>
                                </Column>

                                <Column marginTop='s2' marginBottom='s2' marginRight='s4' width='31%' >
                                    <Typography fontSize={12} fontWeight={550} sx={{ mb: 1.5 }}>
                                        Estado
                                    </Typography>
                                    <TextField
                                        {...register("numero")}
                                        >
                                    </TextField>
                                </Column>
                            </Row>                 
                </Box>

                <Box sx={{ flexGrow: 1, backgroundColor: theme.colors.gray, mx: theme.space.s9, mb: theme.space.s6 ,boxShadow: 'none'}}>
                    <Grid container rowSpacing={theme.space.s5} columnSpacing={theme.space.s5}>
                        <Grid size={6}>
                            <Item square variant="outlined">
                                <Typography fontSize={16} fontWeight={600} sx={{ mb: 3}} >
                                    Formas de pagamento
                                </Typography>

                                <Button mb='s2' type="button" variant="image_card" width='95%' justifyContent='start'>
                                    <Image src={MagneticCard} alt="cartao-de-credito" /> Cartão de Credito
                                </Button>

                                <Button mb='s2' type="button" variant="image_card" width='95%' justifyContent='start'>
                                    <Image style={{ marginRight: 14, marginLeft: 24}} src={PagamentoImg} alt="debito-pagamento" /> Débito Online
                                </Button>

                                <Button mb='s2' type="button" variant="image_card" width='95%' justifyContent='start'>
                                    <Image src={Boleto} alt="boleto-bancario" /> Boleto bancário
                                </Button>

                                <Button mb='s2' type="button" variant="image_card" width='95%' justifyContent='start'>
                                    <Image style={{ marginRight: 18, marginLeft: 30}} src={PixSvg} alt="magnetic-card-image" /> Pix
                                </Button>
                            </Item>
                        </Grid>

                        <Grid size={6}>
                            <Item square variant="outlined">
                                <Row width='100%' mb={theme.space.s2}>
                                    <Typography fontSize={16} fontWeight={600} sx={{ mb: theme.space.s2 }}>
                                        Horário
                                    </Typography>
                                </Row>
                                <Row width='100%' alignContent='center' mb={theme.space.s5}>
                                    <Image src={Calendario} alt="imagem-calendario" width='20' height='20'>

                                    </Image>
                                    <Typography fontSize={14} fontWeight={200} sx={{ ml: 2 }} color={theme.colors.gray[300]}>
                                    26 de Maio, 11:00
                                </Typography>
                                </Row>
                                <Row width='100%'>
                                    <Typography fontSize={14} fontWeight='550' sx={{ mb: 2 }} >
                                        Serviço Selecionado
                                    </Typography>
                                </Row>
                                <Row width='100%' marginBottom={theme.space.s6}>
                                    <Card sx={{ background: theme.colors.pink[100], alignItems: 'center', mr: 1 , boxShadow: 'none' }}>
                                        <Typography fontWeight={500} fontSize={12} color={theme.colors.pink[200]} sx={{ pt: 1 , pb: 1, pl:2 , pr: 2 }} >
                                            Limpeza Residencial
                                        </Typography>
                                    </Card>
                                    <Card sx={{ background: theme.colors.green[200], alignItems: 'center', mr: 1, boxShadow: 'none' }}>
                                        <Typography fontWeight={500} fontSize={12} color={theme.colors.green[300]} sx={{ pt: 1 , pb: 1, pl:2 , pr: 2 }} >
                                            Limpeza de Janelas
                                        </Typography>
                                    </Card>
                                    <Card sx={{ background: theme.colors.orange[100], alignItems: 'center', mr: 1, boxShadow: 'none' }}>
                                        <Typography fontWeight={500} fontSize={12} color={theme.colors.orange[200]} sx={{ pt: 1 , pb: 1, pl:2 , pr: 2 }} >
                                            Limpeza de Tapetes
                                        </Typography>
                                    </Card>
                                </Row>

                                <Row width='100%' marginTop={theme.space.s1}>
                                    <Typography fontSize={14} fontWeight={550} sx={{ mb: 1.5 }}>
                                        Descrição do serviço
                                    </Typography>
                                </Row>
                                <Row width='85%'>
                                <Typography fontSize={12} fontWeight={200} textAlign={'left'} sx={{ mb: 2.8 }}>
                                        ”Gostaria de sua ajuda para realizar uma limpeza geral na minha casa.
                                         Possuo muitas janelas que precisam de uma limpeza profunda e só, não
                                          consigo.”
                                </Typography>
                                </Row>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
                <Column width='96%' height='70px' marginLeft={theme.space.s9} marginBottom={theme.space.s4}>
                        <Row flexDirection='row-reverse' marginRight='38px'>

                            <AlertDialog buttonTitle="Finalizar Agendamento" />

                            <Typography fontSize={16} fontWeight={700} alignSelf="center" marginRight={theme.space.s2}> 
                                Cancelar
                            </Typography>
                        </Row>
                </Column>
        </Form>
    </ContainerDiv>
  );
}

export default FinalizarAgendamentoForm;