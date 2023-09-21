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
  iddeposito: string;
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

export function FieldDeposito({
  isInvalid,
  error,
  value: _value,
  onChange,
  ...rest
}: Props) {
  const { data: options, isLoading } = useQuery({
    queryKey: ["enderecosdeposito"],
    queryFn: () => api.get("/enderecosdeposito"),
    select: (
      response: AxiosResponse<{
        content: Array<TipoDepositoResource>;
      }>
    ): OptionType[] =>
      response.data.content.map(
        ({ iddeposito, nome }: { iddeposito: string; nome: string }) => ({
          value: String(iddeposito) as string,
          label: nome,
        })
      ),
  });

  const value: OptionType = React.useMemo(() => {
    const selected = options?.filter((option) => option.value === _value);
    if (!options || !selected) {
      return { value: String(_value), label: "" };
    }
    return (selected || {}) as unknown as OptionType;
  }, [options, _value]);

  return (
    <FormControl isInvalid={isInvalid} mb="0.40rem">
      <FormLabel>
        Depósito
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
