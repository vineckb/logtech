import { api } from "@/services/api";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Select from "react-select";
import { AddButton } from "./AddButton";
import { AxiosResponse } from "axios";
import { FieldError as Error } from "react-hook-form";
import { FieldError } from "@/components/FieldError";

export interface TipoDepositoResource {
  idtipodeposito: string;
  nome: string;
}

interface Props {
  isInvalid: boolean;
  error?: Error;
  value: string;
  onChange: (value: string) => void;
}

export interface OptionType {
  label: string;
  value: string;
}

export function FieldTipoDeposito({
  isInvalid,
  error,
  value: _value,
  onChange,
  ...rest
}: Props) {
  const { data: options, isLoading } = useQuery({
    queryKey: ["tipodeposito"],
    queryFn: () => api.get("/tipodeposito"),
    select: (
      response: AxiosResponse<{
        content: Array<TipoDepositoResource>;
      }>
    ): OptionType[] =>
      response.data.content.map(
        ({
          idtipodeposito,
          nome,
        }: {
          idtipodeposito: string;
          nome: string;
        }) => ({
          value: idtipodeposito,
          label: nome,
        })
      ),
  });

  const value: OptionType = React.useMemo(() => {
    const selected = options?.filter((option) => option.value === _value);
    if (!options || !selected) {
      return { value: _value, label: "" };
    }
    return (selected || {}) as unknown as OptionType;
  }, [options, _value]);

  return (
    <FormControl isInvalid={isInvalid} mb="0.40rem">
      <FormLabel>
        Tipo de Depósito
        <AddButton />
      </FormLabel>

      <Select
        {...rest}
        isLoading={isLoading}
        isClearable={true}
        isSearchable={true}
        options={options}
        value={value}
        onChange={(newValue) => onChange(newValue?.value || "")}
      />

      <FieldError error={error} />
    </FormControl>
  );
}
