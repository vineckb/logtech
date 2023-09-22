import { FormLabel, Input, FormControl, Switch } from "@chakra-ui/react";
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
          <FormControl isInvalid={!!errors.descricao}>
            <FormLabel>Descrição:</FormLabel>
            <Input {...register("descricao")} />

            <FieldError error={errors.descricao} />
          </FormControl>

          <FormControl isInvalid={!!errors.idtipomotivo}>
            <FormLabel>Tipo:</FormLabel>
            <Input {...register("idtipomotivo")} />

            <FieldError error={errors.idtipomotivo} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email-alerts" mb="0">
              Bloqueia estoque?
            </FormLabel>
            <Switch {...register("bloqestoque")} ml={2} />
          </FormControl>

          <FormControl>
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
