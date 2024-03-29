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
      {(register, errors) => (
        <>
          <Grid templateColumns="repeat(3, 1fr)" gap={5} mb={5}>
            <GridItem>
              <FormControl isInvalid={!!errors.idrotina}>
                <FormLabel>ID Rotina:</FormLabel>
                <Input {...register("idrotina")} />

                <FieldError
                  error={errors.idrotina && errors.idrotina.message}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isInvalid={!!errors.idfuncionalidade}>
                <FormLabel>ID Funcionalidade:</FormLabel>
                <Input {...register("idfuncionalidade")} />

                <FieldError
                  error={
                    errors.idfuncionalidade && errors.idfuncionalidade.message
                  }
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isInvalid={!!errors.idusuario}>
                <FormLabel>ID Usuário:</FormLabel>
                <Input {...register("idusuario")} />

                <FieldError
                  error={errors.idusuario && errors.idusuario.message}
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(2, 1fr)" gap={5} mb={5}>
            <GridItem>
              <FormControl isInvalid={!!errors.dataliberacao}>
                <FormLabel>Data Liberação:</FormLabel>
                <Input {...register("dataliberacao")} />

                <FieldError
                  error={errors.dataliberacao && errors.dataliberacao.message}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isInvalid={!!errors.chave}>
                <FormLabel>Chave:</FormLabel>
                <Input {...register("chave")} />

                <FieldError error={errors.chave && errors.chave.message} />
              </FormControl>
            </GridItem>
          </Grid>
          <FormControl isInvalid={!!errors.status} mb={5}>
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
