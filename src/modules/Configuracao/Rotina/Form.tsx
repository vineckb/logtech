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
          <FormControl isInvalid={!!errors.nomerotina}>
            <FormLabel>Nome da Rotina:</FormLabel>
            <Input {...register("nomerotina")} />

            <FieldError
              error={errors.nomerotina && errors.nomerotina.message}
            />
          </FormControl>

          <FormControl isInvalid={!!errors.idaplicacao}>
            <FormLabel>Aplicação:</FormLabel>
            <Input {...register("idaplicacao")} />

            <FieldError
              error={errors.idaplicacao && errors.idaplicacao.message}
            />
          </FormControl>

          <FormControl isInvalid={!!errors.idmenu}>
            <FormLabel>Menu:</FormLabel>
            <Input {...register("idmenu")} />

            <FieldError error={errors.idmenu && errors.idmenu.message} />
          </FormControl>

          <FormControl isInvalid={!!errors.idtiporotina}>
            <FormLabel>Tipo:</FormLabel>
            <Input {...register("idtiporotina")} />

            <FieldError
              error={errors.idtiporotina && errors.idtiporotina.message}
            />
          </FormControl>

          <FormControl isInvalid={!!errors.ordem}>
            <FormLabel>Ordem:</FormLabel>
            <Input {...register("ordem")} />

            <FieldError error={errors.ordem && errors.ordem.message} />
          </FormControl>

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
