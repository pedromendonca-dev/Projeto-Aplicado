import styled, { css } from "styled-components"
import { theme } from "@/lib/theme";
import { Typography , TextField } from "@mui/material";
import Form from "./base-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MudarSenhaProps } from "@/lib/interface/mudarsenha";
import { mudarSenhaFormSchema, mudarSenhaFormSchemaZod } from "@/lib/schemas/mudar-senha";
import { useForm } from "react-hook-form";
import { Row, Column, Button } from "@/components";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ContainerSenha = styled.div(
    ({ theme }) => css`
      position: absolute;
      display: block grid;
      z-index: 1;
      
  
      top: 70px;
      left:300px;
  
      height: calc(100% - 70px);
      width: calc(100% - 300px);
   
  
      background-color: ${theme.colors.blue[200]}

      ;
    `
  );






  const MudarSenhaForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
    
      const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
    
    const {
        handleSubmit,
        register,
        formState: { isValid },
     } = useForm<mudarSenhaFormSchema>({
        mode: "all",
        resolver: zodResolver(mudarSenhaFormSchemaZod)
     });


     const senhaFinal = (data:MudarSenhaProps) => {
        console.log(data)
     }

     return(    
        <ContainerSenha>
            <Form onSubmit={handleSubmit(senhaFinal)}>
                <Row width="100%" height="76vh" alignItems="center">
                    <Column width="80%" height="100%" marginLeft='250px' marginRight='240px' paddingTop={theme.space.s12} alignItems='left'>
                        <Typography fontSize={20} fontWeight={600} mb={theme.space.s1}>
                            Alterar senha
                        </Typography>
                        <Typography fontSize={14} fontWeight={200} color="#333333" mb={theme.space.s10}>
                            Insira sua senha atual e escolha uma nova senha para proteger sua conta.
                        </Typography>
                        
                        <Typography fontSize={16} fontWeight={550} mb={theme.space.s2}>
                            Senha antiga
                        </Typography>

                        <OutlinedInput
                            sx={{ width: '80%', background: theme.colors.white, mb: 2}}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            {...register('senhaAntiga')}
                        />

                        <Typography fontSize={16} fontWeight={550} mb={theme.space.s2}>
                            Nova senha
                        </Typography>
                        <OutlinedInput
                            sx={{ width: '80%', background: theme.colors.white, mb: 2}}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            {...register('senhaNova')}
                        />

                        <Typography fontSize={16} fontWeight={550} mb={theme.space.s2}>
                            Confirmar senha nova
                        </Typography>

                        <OutlinedInput
                            sx={{ width: '80%', background: theme.colors.white, mb: 2}}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            {...register('confirmarSenha')}
                        />

                        <Typography fontSize={14} fontWeight={200} color="#666666" mb={theme.space.s9}>
                            Certifique-se de que tenha pelo menos 8 caracteres, incluindo um número e uma letra minúscula
                        </Typography>

                        <Button
                            disabled={!isValid}
                            fontSize={'12px'}
                            width='80%'
                            >
                                Atualizar senha

                        </Button>

                        


                    </Column>
                </Row>   
            </Form>
        </ContainerSenha>  
     );
  }

  export default MudarSenhaForm;