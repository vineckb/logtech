import { dateToResource } from "@/utils/date-to-resource";
import moment from "moment";
import { z } from "zod";

export interface Resource {
  idlicenca?: number;
  chave: string;
  cliente: string;
  dataliberacao: string;
  qtd_usuarios: number;
  status: boolean;
  cnpj: string;
}

export const schema = z.object({
  idlicenca: z.number().optional(),
  cnpj: z.string().min(1, "Campo obrigatório"),
  chave: z.string().min(1, "Campo obrigatório"),
  cliente: z.string().min(1, "Campo obrigatório"),
  dataliberacao: z.date(),
  qtd_usuarios: z.string().min(1, "Campo obrigatório"),
  status: z.boolean(),
});

export type FormValues = z.infer<typeof schema>;

export function resourceToFormValues({
  qtd_usuarios,
  dataliberacao,
  ...values
}: Resource): FormValues {
  return {
    ...values,
    qtd_usuarios: `${qtd_usuarios}`,
    dataliberacao: moment(dataliberacao).toDate(),
  };
}

export function formValuesToResource({
  qtd_usuarios,
  dataliberacao,
  ...values
}: FormValues): Resource {
  console.log(dataliberacao);
  return {
    ...values,
    qtd_usuarios: ~~qtd_usuarios,
    dataliberacao: dateToResource(dataliberacao),
  };
}
