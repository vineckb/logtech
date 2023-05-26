import { z } from 'zod';

export interface Resource {
  iderp: string;
  nome: string;
}

export const schema = z.object({
  iderp: z.string().min(1, 'Campo obrigatório'),
  nome: z.string().min(1, 'Campo obrigatório'),
  tipo: z.string().min(1, 'Campo obrigatório'),
  status: z.boolean(),
});

export type FormValues = z.infer<typeof schema>;

export function resourceToFormValues({ ...values }: Resource): FormValues {
  return {
    ...values,
    tipo: 'Geral',
    status: true,
  };
}

export function formValuesToResource({ ...values }: FormValues): Resource {
  return {
    ...values,
  };
}
