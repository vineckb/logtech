import { z } from "zod";

export interface Resource {
  iddeposito?: number;
  iddepositoerp: string;
  idtipodeposito: number;
  nome: string;
  ativo: string;
}

export const schema = z.object({
  iddeposito: z.number().optional(),
  iddepositoerp: z.string().min(1, "Campo obrigatório"),
  nome: z.string().min(1, "Campo obrigatório"),
  idtipodeposito: z.number().min(1, "Campo obrigatório"),
  ativo: z.boolean(),
});

export type FormValues = z.infer<typeof schema>;

export function resourceToFormValues({
  ativo,
  iddepositoerp,
  ...values
}: Resource): FormValues {
  return {
    ...values,
    ativo: ativo === "s",
    iddepositoerp: `${iddepositoerp}`,
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
