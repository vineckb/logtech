import { z } from "zod";

export interface Resource {
  ativo: string;
  email: string;
  idusuario?: number;
  login: string;
  nome: string;
  senha: string;
  telefone?: string;
}

export const schema = z.object({
  idusuario: z.number().optional(),
  nome: z.string().min(1, "Campo obrigatório"),
  email: z.string().min(1, "Campo obrigatório"),
  login: z.string().min(1, "Campo obrigatório"),
  senha: z.string().min(1, "Campo obrigatório"),
  telefone: z.string().optional(),
  cpf: z.string(),
  ativo: z.boolean(),
});

export type FormValues = z.infer<typeof schema>;

export function resourceToFormValues({
  ativo,
  ...values
}: Resource): FormValues {
  return {
    ...values,
    ativo: ativo === "s",
    cpf: "000.000.000-00",
  };
}

export function formValuesToResource({
  ativo,
  ...values
}: FormValues): Resource {
  return {
    ...values,
    ativo: ativo ? "s" : "n",
  };
}
