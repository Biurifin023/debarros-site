import { z } from "zod";

export const quoteSchema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Informe um telefone válido"),
  estilo: z.enum(["colorida", "preto-e-cinza"], {
    message: "Selecione o estilo",
  }),
  bodyLocal: z.string().min(2, "Informe o local do corpo"),
  references: z
    .custom<FileList>()
    .optional()
    .refine(
      (files) =>
        !files ||
        files.length === 0 ||
        Array.from(files).every((file) => file.size <= 5_000_000),
      "Cada arquivo deve ter no máximo 5MB"
    ),
  description: z.string().min(15, "Descreva um pouco mais a ideia"),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;