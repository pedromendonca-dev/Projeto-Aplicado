import { z } from "zod";

export const feedbackFormSchema = z.object({
  provider_id: z
    .string()
    .min(1, { message: "Este campo precisa ser preenchido" }),
  consumer_id: z
    .string()
    .min(1, { message: "Este campo precisa ser preenchido" }),
  rating: z
    .number()
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating must not exceed 5" }),
  comment: z.string().optional(),
});

export type RegisterForm = z.infer<typeof feedbackFormSchema>;
