import { api } from "@/services/api";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Select from "react-select";
import { AddButton } from "./AddButton";
import { AxiosResponse } from "axios";

export interface TipoDepositoResource {
  idtipoendereco: string;
  nome: string;
}

interface Props {
  isInvalid: boolean;
  errorMessage?: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
}

export interface OptionType {
  label: string;
  value: string;
}

export function FieldTipoDeposito({
  isInvalid,
  errorMessage,
  value: _value,
  onChange,
  ...rest
}: Props) {
  const { data: options, isLoading } = useQuery({
    queryKey: ["tipodeposito"],
    queryFn: () => api.get("/tipoendereco"),
    select: (
      response: AxiosResponse<{
        content: Array<TipoDepositoResource>;
      }>
    ): OptionType[] =>
      response.data.content.map(
        ({
          idtipoendereco,
          nome,
        }: {
          idtipoendereco: string;
          nome: string;
        }) => ({
          value: idtipoendereco,
          label: nome,
        })
      ),
  });

  const value: OptionType = React.useMemo(() => {
    const selected = options?.filter((option) => option.value === _value);
    if (!options || !selected) {
      return { value: _value, label: "" };
    }
    return selected as unknown as OptionType;
  }, [options, _value]);

  return (
    <FormControl isInvalid={isInvalid} mb="0.40rem">
      <FormLabel>
        Tipo de Depósito
        <AddButton />
      </FormLabel>

      <Select
        isLoading={isLoading}
        isClearable={true}
        isSearchable={true}
        options={options}
        value={value}
        onChange={(newValue) => onChange(newValue?.value || "")}
        {...rest}
      />

      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}
