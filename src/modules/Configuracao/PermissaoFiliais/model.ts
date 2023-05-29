import { z } from 'zod';

export interface Resource {
  idrotina: string;
  idfuncionalidade: string;
  idusuario: string;
  dataliberacao: string;
  ativo: boolean;
  chave: string;
}

export const schema = z.object({
  idrotina: z.string(),
  idfuncionalidade: z.string(),
  idusuario: z.string(),
  dataliberacao: z.string(),
  ativo: z.boolean(),
  chave: z.string(),
});

export type FormValues = z.infer<typeof schema>;

export function resourceToFormValues({ ...values }: Resource): FormValues {
  return {
    ...values,
  };
}

export function formValuesToResource({ ...values }: FormValues): Resource {
  return {
    ...values,
  };
}
