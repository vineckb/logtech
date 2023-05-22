import { z } from 'zod';

export interface LicencaResource {
  chave: string;
}

export const licencaSchema = z.object({
  chave: z.string().min(1, 'errr'),
});

export type LicencaFormValues = z.infer<typeof licencaSchema>;

export function resourceToFormValues({
  ...values
}: LicencaResource): LicencaFormValues {
  return {
    ...values,
  };
}

export function formValuesToResource(
  values: LicencaFormValues
): LicencaResource {
  return values;
}
