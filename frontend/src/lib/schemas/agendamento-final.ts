
import { z } from "zod";


export const agendamentoFinalFormSchema = z.object({
  nome: z.string().min(1, {message: "Esse campo precisa ser preenchido"}),
  sobrenome: z.string().min(1, {message: "Esse campo precisa ser preenchido"}),
  contato: z.string().min(1, {message: "Esse campo precisa ser preenchido"}),
  email: z.string().min(1, { message: "Este campo precisa ser preenchido" }).email({ message: "Formato de email inválido" }),
  cep: z.string().min(8, "O CEP deve ter no mínimo 8 caracteres").max(9, "O CEP deve ter no máximo 9 caracteres"), 
  rua: z.string().min(3, "O nome da rua deve ter no mínimo 3 caracteres"),
  numero: z.string().min(1, "Número é obrigatório"), 
  bairro: z.string().min(3, "O nome do bairro deve ter no mínimo 3 caracteres"),
  cidade: z.string().min(2, "O nome da cidade deve ter no mínimo 2 caracteres"),
  estado: z.string().length(2, "O estado deve ser a sigla de 2 caracteres"),
});

export type AgendamentoFinalForm = z.infer<typeof agendamentoFinalFormSchema>;