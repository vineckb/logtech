import { FieldEstacaoSelect } from "@/components/Fields/EstacaoSelect";
import { UpsertForm } from "@/components/UpsertForm";
import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Switch,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, schema } from "./model";
import { Controller } from "react-hook-form";
import { FieldTipoDeposito } from "@/components/Fields/TipoDeposito";
import { FieldError } from "@/components/FieldError";

interface Props {
  defaultValues?: { [x: string]: any };
  handleSave: (values: FormValues) => Promise<any>;
  isLoading?: boolean;
}

export function Form({ isLoading = false, ...props }: Props) {
  return (
    <UpsertForm<FormValues>
      resolver={zodResolver(schema)}
      isLoading={isLoading}
      {...props}
      display="flex"
      flexDirection="column"
      gap={5}
    >
      {(register, errors, control) => (
        <>
          <Grid templateColumns="repeat(12, 1fr)" gap={5}>
            <GridItem colSpan={4}>
              <FormControl isInvalid={!!errors.rua}>
                <FormLabel>Rua:</FormLabel>
                <Input {...register("rua")} />

                <FieldError error={errors.rua} />
              </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
              <FormControl isInvalid={!!errors.predio}>
                <FormLabel>Prédio:</FormLabel>
                <Input {...register("predio")} />

                <FieldError error={errors.predio} />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isInvalid={!!errors.andar}>
                <FormLabel>Andar:</FormLabel>
                <Input {...register("andar")} />

                <FieldError error={errors.andar} />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isInvalid={!!errors.apto}>
                <FormLabel>Apartamento:</FormLabel>
                <Input {...register("apto")} />

                <FieldError error={errors.apto} />
              </FormControl>
            </GridItem>
          </Grid>

          <Grid templateColumns="repeat(12, 1fr)" gap={5}>
            <GridItem colSpan={4}>
              <FormControl isInvalid={!!errors.direcao}>
                <FormLabel>Direção:</FormLabel>
                <Input {...register("direcao")} />

                <FieldError error={errors.direcao} />
              </FormControl>
            </GridItem>
            <GridItem colSpan={8}>
              <Grid templateColumns="repeat(5, 1fr)" gap={5}>
                <GridItem>
                  <FormControl isInvalid={!!errors.altura}>
                    <FormLabel>Altura:</FormLabel>
                    <Input {...register("altura")} />

                    <FieldError error={errors.altura} />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={!!errors.largura}>
                    <FormLabel>Largura:</FormLabel>
                    <Input {...register("largura")} />

                    <FieldError error={errors.largura} />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={!!errors.profundidade}>
                    <FormLabel>Profundidade:</FormLabel>
                    <Input {...register("profundidade")} />

                    <FieldError error={errors.profundidade} />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={!!errors.m3}>
                    <FormLabel>M³:</FormLabel>
                    <Input {...register("m3")} />

                    <FieldError error={errors.m3} />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={!!errors.qtdpalete}>
                    <FormLabel>Qtde Palete:</FormLabel>
                    <Input {...register("qtdpalete")} />

                    <FieldError error={errors.qtdpalete} />
                  </FormControl>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <FormControl isInvalid={!!errors.idtipoendereco}>
                <FormLabel>Tipo de Endereço:</FormLabel>
                <Input {...register("idtipoendereco")} />

                <FieldError error={errors.idtipoendereco} />
              </FormControl>
            </GridItem>
            <GridItem>
              <Controller
                name="idestacao"
                control={control}
                render={({ field }) => (
                  <FieldEstacaoSelect
                    {...field}
                    isInvalid={!!errors.idestacao}
                    error={errors.idestacao}
                  />
                )}
              />
            </GridItem>
            <GridItem>
              <Controller
                name="iddeposito"
                control={control}
                render={({ field }) => (
                  <FieldTipoDeposito
                    {...field}
                    isInvalid={!!errors.iddeposito}
                    error={errors.iddeposito}
                  />
                )}
              />
            </GridItem>
          </Grid>

          <FormControl isInvalid={!!errors.status}>
            <FormLabel htmlFor="email-alerts" mb="0">
              Ativo?
            </FormLabel>
            <Switch {...register("ativo")} ml={2} />
          </FormControl>
        </>
      )}
    </UpsertForm>
  );
}
