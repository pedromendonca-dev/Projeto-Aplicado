"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Typography } from "@mui/material";
import Form from "./base-form";
import { theme } from "@/lib/theme";
import { Row, Column, Button } from "@/components";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/services/api/api-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { z } from "zod";

    type CategoriaType = {
    id: number,
    created_at: string,
    name: string,
    description?: string,
    image?: string,
    }

    // Tipagem para o formulário de categoria
    const categoriaSchema = z.object({
    name: z.string().min(8,"Teste"),
    description: z.string().optional(),
    image: z.string().optional(),
    });
  
  type CategoriaForm = z.infer<typeof categoriaSchema>;



  const RegisterCategoriaForm = () => {

    const router = useRouter();
    const {
        handleSubmit,
        register,
        formState: { isValid },
      } = useForm<CategoriaForm>({
        mode: "all",
        resolver: zodResolver(categoriaSchema),
      });
    
      const mutateCreate = useMutation({
        mutationFn: ({ data }: any) => {
          return apiClient.post("/api/categorys", data);
        },
        onSuccess: () => {
          console.log("Deu bom");
          router.back();
        },
        onError: () => {
          toast.error("Erro ao registrar categoria");
        },
      });
    
      const registerSubmit = (data: CategoriaForm) => {
        mutateCreate.mutate({ data });
      };

      return (
            <Row width='80%' height='100%' backgroundColor={theme.colors.white} marginLeft={theme.space.s8} marginTop={theme.space.s8} padding={theme.space.s5} justifyContent={"center"}>
            <form onSubmit={handleSubmit(registerSubmit)}>
                <Column height="100%">
                    <TextField
                    label="nome"
                    sx={{ mb: 2 }}
                    {...register("name")}
                    />
                    <TextField
                    label="descricao"
                    sx={{ mb: 2 }}
                    {...register("description")}
                    />
                    <TextField
                    sx={{ mb: 4 }}
                    label="image"
                    {...register("image")}
                    />
                <Button mb="s3">
                Finalizar cadastro
                </Button>
                </Column>
            </form>
        </Row>
      )
  }

  export default RegisterCategoriaForm;