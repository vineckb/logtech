import { FieldTipoEstacao } from "@/components/Fields/TipoEstacao";
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
import { FieldError } from "@/components/FieldError";
import { FieldDeposito } from "@/components/Fields/Deposito";

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
          <Grid templateColumns="repeat(10, 1fr)" gap={5}>
            <GridItem colSpan={5}>
              <FormControl isInvalid={!!errors.nome}>
                <FormLabel>Descrição:</FormLabel>
                <Input {...register("nome")} />

                <FieldError error={errors.nome && errors.nome.message} />
              </FormControl>
            </GridItem>
            <GridItem colSpan={5}>
              <FormControl isInvalid={!!errors.tiposeparacao}>
                <FormLabel>Tipo de separação:</FormLabel>
                <Input {...register("tiposeparacao")} />

                <FieldError
                  error={errors.tiposeparacao && errors.tiposeparacao.message}
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(10, 1fr)" gap={5}>
            <GridItem colSpan={4}>
              <Controller
                name="idtipoestacao"
                control={control}
                render={({ field }) => (
                  <FieldTipoEstacao
                    {...field}
                    isInvalid={!!errors.idtipoestacao}
                    error={errors.idtipoestacao}
                  />
                )}
              />
            </GridItem>
            <GridItem colSpan={6}>
              <Controller
                name="iddeposito"
                control={control}
                render={({ field }) => (
                  <FieldDeposito
                    {...field}
                    isInvalid={!!errors.iddeposito}
                    error={errors.iddeposito}
                  />
                )}
              />
            </GridItem>
          </Grid>

          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              Ativo?
            </FormLabel>
            <Switch {...register("ativo")} />
          </FormControl>
        </>
      )}
    </UpsertForm>
  );
}
