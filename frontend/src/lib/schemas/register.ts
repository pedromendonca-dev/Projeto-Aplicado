import { z } from "zod";

export const registerFormSchema = z.object({
  nome: z.string().min(1, { message: "Este campo precisa ser preenchido" }),
  email: z.string().min(1, { message: "Este campo precisa ser preenchido" }),
  telefone: z.string().min(1, { message: "Este campo precisa ser preenchido" }),
  senha: z.string().min(1, { message: "Este campo precisa ser preenchido" }),
  tipoUsuario: z
    .string()
    .min(1, { message: "Este campo precisa ser preenchido" }),
});

export type RegisterForm = z.infer<typeof registerFormSchema>;
