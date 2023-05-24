import { z } from 'zod';

export interface Resource {
  chave: string;
}

export const schema = z.object({
  chave: z.string().min(1, 'errr'),
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
