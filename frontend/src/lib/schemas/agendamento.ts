
import { z } from "zod";

export const agendamentoFormSchema = z.object({
  categorias: z.string().min(1, {message: "Esse campo precisa ser preenchido"}),
  titulo: z.string().min(1, {message: "Esse campo precisa ser preenchido"}),
  info: z.string().min(1, {message: "Esse campo precisa ser preenchido"}),
});

export type AgendamentoFormType = z.infer<typeof agendamentoFormSchema>;