import { z } from "zod";

export interface Resource {
  altura: any;
  andar: any;
  apto: any;
  ativo: any;
  direcao: any;
  iddeposito: any;
  idendereco: any;
  idestacao: any;
  idtipoendereco: string;
  largura: any;
  m3: any;
  predio: any;
  profundidade: any;
  qtdpalete: any;
  rua: any;
}

export const schema = z.object({
  idendereco: z.number(),
  rua: z.string().min(1, "Campo obrigatório"),
  predio: z.string().min(1, "Campo obrigatório"),
  andar: z.string(),
  apto: z.string(),
  direcao: z.string(),
  altura: z.string(),
  largura: z.string(),
  profundidade: z.string(),
  m3: z.string(),
  qtdpalete: z.string(),
  idtipoendereco: z.string().min(1, "Campo obrigatório"),
  idestacao: z.object({ value: z.number(), label: z.string() }),
  iddeposito: z.string().min(1, "Campo obrigatório"),
  ativo: z.boolean(),
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
