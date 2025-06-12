import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(1, { message: "Este campo precisa ser preenchido" })
              .email({ message: "Formato de email inválido" }),
  senha: z.string().min(1, { message: "Este campo precisa ser preenchido" }),
});

export type LoginForm = z.infer<typeof loginFormSchema>;
