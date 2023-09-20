import { FieldTipoDeposito } from "@/components/Fields/TipoDeposito";
import { UpsertForm } from "@/components/UpsertForm";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Switch,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, schema } from "./model";
import { Controller } from "react-hook-form";

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
          <Grid templateColumns="repeat(2, 1fr)" gap={5}>
            <GridItem>
              <FormControl isInvalid={!!errors.iddepositoerp}>
                <FormLabel>ID ERP:</FormLabel>
                <Input {...register("iddepositoerp")} />

                <FormErrorMessage>
                  {errors.iddepositoerp && errors.iddepositoerp.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isInvalid={!!errors.nome}>
                <FormLabel>Descrição:</FormLabel>
                <Input {...register("nome")} />

                <FormErrorMessage>
                  {errors.nome && errors.nome.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
          </Grid>
          <Controller
            name="idtipodeposito"
            control={control}
            render={({ field }) => (
              <FieldTipoDeposito
                {...field}
                isInvalid={!!errors.idtipodeposito}
                errorMessage={
                  errors.idtipodeposito && errors.idtipodeposito.message
                }
              />
            )}
          />
          <FormControl isInvalid={!!errors.status}>
            <FormLabel htmlFor="email-alerts" mb="0">
              Ativo?
            </FormLabel>
            <Switch {...register("status")} ml={2} />
          </FormControl>
        </>
      )}
    </UpsertForm>
  );
}
