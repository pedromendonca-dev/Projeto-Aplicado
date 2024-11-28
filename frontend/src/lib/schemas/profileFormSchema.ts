import { z } from "zod";

export const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres." })
    .max(50, { message: "O nome pode ter no máximo 50 caracteres." }),
  email: z
    .string()
    .email({ message: "Digite um e-mail válido." }),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Digite um telefone válido." }), // 
  about: z
    .string()
    .max(500, { message: "A apresentação pode ter no máximo 500 caracteres." })
    .optional(),
  locations: z
    .string()
    .min(3, { message: "Digite pelo menos 3 caracteres para o local." })
    .max(100, { message: "O local pode ter no máximo 100 caracteres." }),
  price: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, { message: "Digite um valor válido para o preço." }),
  availability: z
    .enum(["manha", "tarde", "noite"], { message: "Escolha uma disponibilidade válida." }),
  category: z
    .enum(["limpeza", "manutencao", "outros"], { message: "Escolha uma categoria válida." }),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
