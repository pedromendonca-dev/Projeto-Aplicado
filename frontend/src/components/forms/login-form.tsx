"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import Form from "./base-form";
import { Row, Column, Button } from "@/components";

import { LoginProps } from "@/lib/interface/login";

import type { LoginForm } from "@/lib/schemas/login";
import { loginFormSchema } from "@/lib/schemas/login";

import { theme } from "@/lib/theme";

import Google from "@/assets/images/google.svg";
import Banner from "@/assets/images/login-banner.svg";
import { getAllUsers } from "@/lib/services/client/users";
import { useQuery } from "@tanstack/react-query";

const LoginForm = () => {
  const route = useRouter();

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<LoginForm>({
    mode: "all",
    resolver: zodResolver(loginFormSchema),
  });

  const { data: users } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: () => {
      return getAllUsers();
    },
  });

  console.log(users)

  const loginSubmit = (data: LoginProps) => {
    console.log(data);
  };

  return (
    <Row
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      style={{
        backgroundImage: `url(${Banner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Column
        width="620px"
        backgroundColor={theme.colors.white}
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        borderRadius="8px"
        padding="s9"
      >
        <Column marginBottom="s7">
          <Typography fontSize={20} fontWeight={600}>
            Login
          </Typography>
          <Typography
            fontSize={14}
            sx={{ color: theme.colors.gray[300] }}
            fontWeight={300}
          >
            Entre na sua conta para acessar todos os nossos recursos!
          </Typography>
        </Column>
        <Form onSubmit={handleSubmit(loginSubmit)}>
          <Column height="100%">
            <TextField
              label="Email"
              type="email"
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.colors.gray[300],
                  },
                  "&:hover fieldset": {
                    borderColor: theme.colors.green[100],
                  },
                },
                "& .MuiFormLabel-root": {
                  color: theme.colors.gray[300],
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: theme.colors.green[100],
                },
                "& .MuiInputBase-input::placeholder": {
                  color: theme.colors.gray[300],
                },
                "& .MuiOutlinedInput-root:hover .MuiInputBase-input::placeholder":
                  {
                    color: theme.colors.green[100],
                  },
              }}
              {...register("email")}
            />
            <TextField
              label="Senha"
              type="password"
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.colors.gray[300],
                  },
                  "&:hover fieldset": {
                    borderColor: theme.colors.green[100],
                  },
                },
                "& .MuiFormLabel-root": {
                  color: theme.colors.gray[300],
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: theme.colors.green[100],
                },
                "& .MuiInputBase-input::placeholder": {
                  color: theme.colors.gray[300],
                },
                "& .MuiOutlinedInput-root:hover .MuiInputBase-input::placeholder":
                  {
                    color: theme.colors.green[100],
                  },
              }}
              {...register("password")}
            />
            <Row justifyContent="space-between" alignItems="center" mb="s4">
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography fontSize="12px">Mantenha-me conectado</Typography>
                }
                sx={{ marginRight: 0 }}
              />
              <Typography
                fontSize="12px"
                sx={{ color: theme.colors.blue[100] }}
                onClick={() => route.push("/forgot-password")}
              >
                Esqueci minha senha
              </Typography>
            </Row>
            <Button
              mb="s3"
              disabled={!isValid}
              onClick={() => route.push("/categorias")}
            >
              Entrar
            </Button>
            <Button type="button" variant="google">
              <Image src={Google} alt="google-image" /> Entrar com o Google
            </Button>
            <Row m="0 auto" mt="s3">
              <Typography fontSize="12px">Não possui uma conta?</Typography>
              <Typography
                fontSize="12px"
                sx={{ ml: 1, color: theme.colors.blue[100] }}
                onClick={() => route.push("/cadastro")}
              >
                Cadastre-se aqui
              </Typography>
            </Row>
          </Column>
        </Form>
      </Column>
    </Row>
  );
};

export default LoginForm;
