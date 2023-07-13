import { z } from 'zod';

export interface Resource {
  idconexao?: number;
  ativo: number;
  nomebd: string;
  senha: string;
  servidor: string;
  usuario: string;
  iderp: number;
}

export const schema = z.object({
  ativo: z.boolean(),
  iderp: z.string(),
  nomebd: z.string(),
  senha: z.string(),
  servidor: z.string(),
  usuario: z.string(),
});

export type FormValues = z.infer<typeof schema>;

export function resourceToFormValues({
  ativo,
  iderp,
  ...values
}: Resource): FormValues {
  return {
    ...values,
    iderp: `${iderp}`,
    ativo: ativo === 1,
  };
}

export function formValuesToResource({
  ativo,
  iderp,
  ...values
}: FormValues): Resource {
  return {
    iderp: ~~iderp,
    ...values,
    ativo: ativo ? 1 : 0,
  };
}
