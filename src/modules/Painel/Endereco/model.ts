import { z } from "zod";

export interface Resource {
  altura: string;
  andar: string;
  apto: string;
  ativo: string;
  direcao: string;
  iddeposito: string;
  idendereco?: number;
  idestacao: string;
  idtipoendereco: string;
  largura: string;
  m3: string;
  predio: string;
  profundidade: string;
  qtdpalete: string;
  rua: string;
}

export const schema = z.object({
  idendereco: z.number().optional(),
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
  idestacao: z.string().min(1, "Campo obrigatório"),
  iddeposito: z.string().min(1, "Campo obrigatório"),
  ativo: z.boolean(),
});

export type FormValues = z.infer<typeof schema>;

export function resourceToFormValues({
  ativo,
  andar,
  apto,
  idtipoendereco,
  iddeposito,
  idestacao,
  qtdpalete,
  ...values
}: Resource): FormValues {
  return {
    ...values,
    ativo: ativo === "s" ? true : false,
    idestacao: String(idestacao),
    andar: String(andar),
    apto: String(apto),
    iddeposito: String(iddeposito),
    idtipoendereco: String(idtipoendereco),
    qtdpalete: String(qtdpalete),
  };
}

export function formValuesToResource({
  ativo,
  ...values
}: FormValues): Resource {
  return {
    ...values,
    ativo: ativo ? "s" : "n",
  };
}
