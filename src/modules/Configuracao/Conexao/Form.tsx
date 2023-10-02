import {
  FormLabel,
  Input,
  FormControl,
  Switch,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, schema } from "./model";
import { UpsertForm } from "@/components/UpsertForm";
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
          <Grid templateColumns="repeat(10, 1fr)" gap={5}>
            <GridItem colSpan={3}>
              <FormControl isInvalid={!!errors.nomebd}>
                <FormLabel>Nome do banco de dados:</FormLabel>
                <Input {...register("nomebd")} />

                <FieldError error={errors.nomebd && errors.nomebd.message} />
              </FormControl>
            </GridItem>
            <GridItem colSpan={3}>
              <FormControl isInvalid={!!errors.servidor}>
                <FormLabel>Servidor:</FormLabel>
                <Input {...register("servidor")} />

                <FieldError
                  error={errors.servidor && errors.servidor.message}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
              <FormControl isInvalid={!!errors.usuario}>
                <FormLabel>Usuário:</FormLabel>
                <Input {...register("usuario")} />

                <FieldError error={errors.usuario && errors.usuario.message} />
              </FormControl>
            </GridItem>
          </Grid>

          <Grid templateColumns="repeat(12, 1fr)" gap={5}>
            <GridItem colSpan={5}>
              <FormControl isInvalid={!!errors.senha}>
                <FormLabel>Senha:</FormLabel>
                <Input {...register("senha")} />

                <FieldError error={errors.senha && errors.senha.message} />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isInvalid={!!errors.iderp}>
                <FormLabel>ID ERP:</FormLabel>
                <Input {...register("iderp")} />

                <FieldError error={errors.iderp && errors.iderp.message} />
              </FormControl>
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
