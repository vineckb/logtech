import { z } from 'zod';

export interface Resource {
  altura: string;
  andar: number;
  apto: number;
  ativo: string;
  direcao: string;
  iddeposito: number;
  idendereco: number;
  idestacao: number;
  idtipoendereco: number;
  largura: string;
  m3: string;
  predio: string;
  profundidade: string;
  qtdpalete: number;
  rua: string;
}

export const schema = z.object({
  idendereco: z.number(),
  rua: z.string().min(1, 'Campo obrigatório'),
  predio: z.string().min(1, 'Campo obrigatório'),
  andar: z.number(),
  apto: z.number(),
  direcao: z.string(),
  altura: z.string(),
  largura: z.string(),
  profundidade: z.string(),
  m3: z.string(),
  qtdpalete: z.number(),
  idtipoendereco: z.number().min(1, 'Campo obrigatório'),
  idestacao: z.number().min(1, 'Campo obrigatório'),
  iddeposito: z.number().min(1, 'Campo obrigatório'),
  ativo: z.boolean(),
});

export type FormValues = z.infer<typeof schema>;

export function resourceToFormValues({
  ativo,
  ...values
}: Resource): FormValues {
  return {
    ...values,
    ativo: ativo === '1',
  };
}

export function formValuesToResource({
  ativo,
  ...values
}: FormValues): Resource {
  return {
    ...values,
    ativo: ativo ? '1' : '0',
  };
}
