import { z } from "zod";

export const registerCategoriaSchema = z.object({
  nome: z.string().min(1, { message: "Este campo precisa ser preenchido" }),
  imagem: z.string().min(6, { message: "Este campo precisa ser preenchido" }),
});

export type RegisterCategoriaForm = z.infer<typeof registerCategoriaSchema>;
