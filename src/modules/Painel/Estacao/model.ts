import { z } from "zod";

export interface Resource {
  idestacao: number;
  nome: string;
  tiposeparacao?: string;
  idtipoestacao: string;
  iddeposito: string;
  enderecosdeposito?: {
    iddeposito: string;
    nome: string;
  };
  tipoestacao?: {
    idtipoestacao: string;
    nome: string;
  };
  ativo: string;
}

export const schema = z.object({
  nome: z.string().min(1, "Campo obrigatório"),
  idtipoestacao: z.number().min(1, "Campo obrigatório"),
  iddeposito: z.string().min(1, "Campo obrigatório"),
  ativo: z.boolean().optional(),
  tiposeparacao: z.string().optional(),

  ordenacao: z.string().optional(),
  tipo: z.string().optional(),
  idestacao: z.number(),
});

export type FormValues = z.infer<typeof schema>;

export function resourceToFormValues({
  ativo,
  idtipoestacao,
  iddeposito,
  ...values
}: Resource): FormValues {
  return {
    ...values,
    idtipoestacao: Number(idtipoestacao) as number,
    iddeposito: String(iddeposito) as string,
    ativo: ativo === "s",
  };
}

export function formValuesToResource({
  ativo,
  idtipoestacao,
  iddeposito,
  ...values
}: FormValues): Resource {
  return {
    ...values,
    idtipoestacao: String(idtipoestacao) as string,
    iddeposito: String(iddeposito) as string,
    ativo: ativo ? "s" : "n",
  };
}
