import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(1, { message: "Este campo precisa ser preenchido" }),
  email: z.string().min(1, { message: "Este campo precisa ser preenchido" }),
  phone: z.string().min(1, { message: "Este campo precisa ser preenchido" }),
  password: z.string().min(1, { message: "Este campo precisa ser preenchido" }),
  type_user: z
    .string()
    .min(1, { message: "Este campo precisa ser preenchido" }),
});

export type RegisterForm = z.infer<typeof registerFormSchema>;
