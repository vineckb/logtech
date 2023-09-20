import { z } from "zod";

export interface Resource {
  iddeposito?: number;
  iddepositoerp: string;
  idtipodeposito: number;
  nome: string;
  ativo: string;
  tipoNome?: string;
}

export const schema = z.object({
  iddeposito: z.number().optional(),
  iddepositoerp: z.string().min(1, "Campo obrigatório"),
  nome: z.string().min(1, "Campo obrigatório"),
  idtipodeposito: z.number().min(1, "Campo obrigatório"),
  status: z.boolean(),
});

export type FormValues = z.infer<typeof schema>;

export function resourceToFormValues({
  ativo,
  iddepositoerp,
  ...values
}: Resource): FormValues {
  return {
    ...values,
    status: ativo === "s",
    iddepositoerp: `${iddepositoerp}`,
  };
}

export function formValuesToResource({
  status,
  ...values
}: FormValues): Resource {
  return {
    ...values,
    ativo: status ? "s" : "n",
  };
}
