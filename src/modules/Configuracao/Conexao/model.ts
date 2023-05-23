import { z } from 'zod';

export interface Resource {
  idconexao?: number;
  ativo: number;
  nomebd: string;
  senha: string;
  servidor: string;
  usuario: string;
}

export const schema = z.object({
  ativo: z.boolean(),
  nomebd: z.string(),
  senha: z.string(),
  servidor: z.string(),
  usuario: z.string(),
});

export type FormValues = z.infer<typeof schema>;

export function resourceToFormValues({
  ativo,
  ...values
}: Resource): FormValues {
  return {
    ...values,
    ativo: ativo === 1,
  };
}

export function formValuesToResource({
  ativo,
  ...values
}: FormValues): Resource {
  return {
    ...values,
    ativo: ativo ? 1 : 0,
  };
}
