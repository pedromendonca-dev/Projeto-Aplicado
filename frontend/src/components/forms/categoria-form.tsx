"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Typography } from "@mui/material";
import { theme } from "@/lib/theme";
import { Row, Column, Button } from "@/components";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/services/api/api-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { z } from "zod";

type CategoriaType = {
  id?: number;
  created_at?: string;
  name: string;
  description: string;
  image: string;
}

const categoriaSchema = z.object({
  name: z.string().min(8, "Teste"),
  description: z.string().optional(),
  image: z.string().optional(),
});

type CategoriaForm = z.infer<typeof categoriaSchema>;

const RegisterCategoriaForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
  } = useForm<CategoriaForm>({
    mode: "all",
    resolver: zodResolver(categoriaSchema),
  });

  const mutateCreate = useMutation({
    mutationFn: (data: CategoriaType) => {
      return apiClient.post("/api/categorys", data);
    },
    onSuccess: () => {
      toast.success("Categoria registrada com sucesso!");
      router.back();
    },
    onError: (error) => {
      toast.error("Erro ao registrar categoria");
    },
  });

  const registerSubmit = (data: any) => {
    mutateCreate.mutate(data);
  };

  return (
    <Row 
      width='80%' 
      height='100%' 
      backgroundColor={theme.colors.white} 
      marginLeft={theme.space.s8} 
      marginTop={theme.space.s8} 
      padding={theme.space.s5} 
      justifyContent="center"
    >
      <form onSubmit={handleSubmit(registerSubmit)}>
        <Column height="100%">
          <TextField
            label="Nome"
            sx={{ mb: 2 }}
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register("name")}
          />
          <TextField
            label="Descrição"
            sx={{ mb: 2 }}
            error={!!errors.description}
            helperText={errors.description?.message}
            {...register("description")}
          />
          <TextField
            label="Imagem"
            sx={{ mb: 4 }}
            error={!!errors.image}
            helperText={errors.image?.message}
            {...register("image")}
          />
          <Button 
            mb="s3" 
            type="submit"
            disabled={!isValid || mutateCreate.isPending}
          >
            {mutateCreate.isPending ? "Cadastrando..." : "Finalizar cadastro"}
          </Button>
        </Column>
      </form>
    </Row>
  );
}

export default RegisterCategoriaForm;