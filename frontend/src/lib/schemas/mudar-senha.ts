import { z } from "zod"

export const mudarSenhaFormSchemaZod = z.object({
    senhaAntiga: z.string().min(1, {message: "Esse campo precisa ser preenchido"}),
    senhaNova: z.string().min(1, {message: "Esse campo precisa ser preenchido"}),
    confirmarSenha: z.string().min(1, {message: "Esse campo precisa ser preenchido"}),
});

export type mudarSenhaFormSchema = z.infer<typeof mudarSenhaFormSchemaZod>;
