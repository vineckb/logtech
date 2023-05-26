import { z } from 'zod';

export interface Resource {
  idrotina?: number;
  ativo: string;
  idaplicacao: number;
  idmenu: number;
  idtiporotina: number;
  nomerotina: string;
  ordem: number;
}

export const schema = z.object({
  nomerotina: z.string().min(1, 'Campo obrigatório'),
  idaplicacao: z.number().min(1, 'Campo obrigatório'),
  idmenu: z.number().min(1, 'Campo obrigatório'),
  idtiporotina: z.number().min(1, 'Campo obrigatório'),
  ativo: z.boolean(),
  ordem: z.number(),
});

export type FormValues = z.infer<typeof schema>;

export function resourceToFormValues({
  ativo,
  ...values
}: Resource): FormValues {
  return {
    ...values,
    ativo: ativo === 's',
  };
}

export function formValuesToResource({
  ativo,
  ...values
}: FormValues): Resource {
  return {
    ...values,
    ativo: ativo ? 's' : 'n',
  };
}
