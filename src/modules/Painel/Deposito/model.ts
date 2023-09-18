import { z } from 'zod';

export interface Resource {
  iddeposito?: number;
  iderp: string;
  nome: string;
  status: boolean;
  tipoNome?: string;
  tipo: any;
}

export const schema = z.object({
  iderp: z.string().min(1, 'Campo obrigatório'),
  nome: z.string().min(1, 'Campo obrigatório'),
  tipo: z.object({value: z.number(), label: z.string()}),
  status: z.boolean(),
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
