import { z } from 'zod';

export interface Resource {
  idlicenca: number;
  chave: string;
  cliente: string;
  dataliberacao: string;
  qtd_usuarios: number;
}

export const schema = z.object({
  idlicenca: z.number(),
  cnpj: z.string().min(1, 'Campo obrigatório'),
  chave: z.string().min(1, 'Campo obrigatório'),
  cliente: z.string().min(1, 'Campo obrigatório'),
  dataliberacao: z.string(),
  qtd_usuarios: z.number(),
  status: z.boolean(),
});

export type FormValues = z.infer<typeof schema>;

export function resourceToFormValues({ ...values }: Resource): FormValues {
  return {
    // @todo: remove placeholder fields
    status: true,
    cnpj: '00000000-0000',
    ...values,
  };
}

// @todo: remove ignoring fields
export function formValuesToResource({
  status,
  cnpj,
  ...values
}: FormValues): Resource {
  return {
    ...values,
  };
}
