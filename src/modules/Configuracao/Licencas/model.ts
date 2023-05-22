import { z } from 'zod';

export interface LicencaResource {
  idlicenca: number;
  cnpj: string;
  cliente: number;
  qtd_usuarios: number;
  chave: string;
  status: number;
}

export const licencaSchema = z.object({
  idlicenca: z.number(),
  cnpj: z.string(),
  cliente: z.number(),
  qtd_usuarios: z.number(),
  chave: z.string(),
  status: z.boolean(),
});

export type LicencaFormValues = z.infer<typeof licencaSchema>;

export function resourceToFormValues({
  status,
  ...values
}: LicencaResource): LicencaFormValues {
  return {
    ...values,
    status: Number(status) === 1,
  };
}

export function formValuesToResource({
  status,
  ...values
}: LicencaFormValues): LicencaResource {
  return {
    ...values,
    status: status ? 1 : 0,
  };
}
