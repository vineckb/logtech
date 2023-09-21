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
      {(register, errors) => {
        console.log(errors);
        return (
          <>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem>
                <FormControl isInvalid={!!errors.cnpj}>
                  <FormLabel>CNPJ:</FormLabel>
                  <Input {...register("cnpj")} />

                  <FieldError error={errors.cnpj && errors.cnpj.message} />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={!!errors.cliente}>
                  <FormLabel>Cliente:</FormLabel>
                  <Input {...register("cliente")} />

                  <FieldError
                    error={errors.cliente && errors.cliente.message}
                  />
                </FormControl>
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  <GridItem>
                    <FormControl isInvalid={!!errors.qtd_usuarios}>
                      <FormLabel>Quantidade Usuários:</FormLabel>
                      <Input {...register("qtd_usuarios")} />

                      <FieldError
                        error={
                          errors.qtd_usuarios && errors.qtd_usuarios.message
                        }
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isInvalid={!!errors.dataliberacao}>
                      <FormLabel>Data Liberação:</FormLabel>
                      <Input type="date" {...register("dataliberacao")} />

                      <FieldError
                        error={
                          errors.dataliberacao && errors.dataliberacao.message
                        }
                      />
                    </FormControl>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={!!errors.chave}>
                  <FormLabel>Chave:</FormLabel>
                  <Input {...register("chave")} />

                  <FieldError error={errors.chave && errors.chave.message} />
                </FormControl>
              </GridItem>
            </Grid>

            <FormControl isInvalid={!!errors.status}>
              <FormLabel htmlFor="email-alerts" mb="0">
                Ativo?
              </FormLabel>
              <Switch {...register("status")} ml={2} />
            </FormControl>
          </>
        );
      }}
    </UpsertForm>
  );
}
