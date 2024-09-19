"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Typography } from "@mui/material";

import Form from "./base-form";
import { Row, Column, Button } from "@/components";

import { RegisterProps } from "@/lib/interface/register";

import type { RegisterForm } from "@/lib/schemas/register";
import { registerFormSchema } from "@/lib/schemas/register";

import { theme } from "@/lib/theme";

import Google from "@/assets/images/google.svg";
import RegisterBanner from "@/assets/images/register-banner.svg";

const RegisterForm = () => {
  const route = useRouter();

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<RegisterForm>({
    mode: "all",
    resolver: zodResolver(registerFormSchema),
  });

  const registerSubmit = (data: RegisterProps) => {
    console.log(data);
  };

  return (
    <Row width="100%" height="100vh" alignItems="center">
      <Column width="50%" height="65%" paddingX="s15">
        <Column marginBottom="s6">
          <Typography fontSize={20} fontWeight={600}>
            Cadastre-se
          </Typography>
          <Typography sx={{ color: theme.colors.gray[300] }} fontWeight={300}>
            Crie sua conta agora mesmo e tenha acesso aos nossos serviços!
          </Typography>
        </Column>
        <Form onSubmit={handleSubmit(registerSubmit)}>
          <Column height="100%">
            <TextField label="Nome" sx={{ mb: 2 }} {...register("name")} />
            <TextField
              label="Email"
              type="email"
              sx={{ mb: 2 }}
              {...register("email")}
            />
            <TextField label="Telefone" sx={{ mb: 2 }} {...register("phone")} />
            <TextField
              label="Tipo de usuário"
              sx={{ mb: 2 }}
              {...register("type_user")}
            />
            <TextField
              label="Senha"
              type="password"
              sx={{ mb: 4 }}
              {...register("password")}
            />
            <Button mb="s3" disabled={!isValid}>
              Finalizar cadastro
            </Button>
            <Button type="button" variant="google">
              <Image src={Google} alt="google-image" /> Entrar com o Google
            </Button>
            <Row m="0 auto" mt="s3">
              <Typography fontSize="12px">Já possui uma conta?</Typography>
              <Typography
                fontSize="12px"
                sx={{ ml: 1, color: theme.colors.blue[100] }}
                onClick={() => route.push("/login")}
              >
                Logue-se aqui
              </Typography>
            </Row>
          </Column>
        </Form>
      </Column>
      <Column width="50%" height="100%">
        <Column position="relative" width="100%" height="100%">
          <Image
            src={RegisterBanner}
            alt="register-banner"
            layout="fill"
            objectFit="cover"
          />
        </Column>
      </Column>
    </Row>
  );
};

export default RegisterForm;
