import { z } from "zod";

export interface Resource {
  idmotivo?: number;
  descricao: string;
  idtipomotivo: string;
  bloqestoque: string;
  status: string;
}

export const schema = z.object({
  descricao: z.string().min(1, "Campo ogrigatório"),
  idtipomotivo: z.string().min(1, "Campo ogrigatório"),
  bloqestoque: z.boolean(),
  status: z.boolean(),
});

export type FormValues = z.infer<typeof schema>;

export function resourceToFormValues({
  status,
  bloqestoque,
  ...values
}: Resource): FormValues {
  return {
    ...values,
    bloqestoque: bloqestoque === "s",
    status: status === "s",
  };
}

export function formValuesToResource({
  status,
  bloqestoque,
  ...values
}: FormValues): Resource {
  return {
    ...values,
    bloqestoque: bloqestoque ? "s" : "n",
    status: status ? "s" : "n",
  };
}
