import { api } from "@/services/api";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Select from "react-select";
import { AddButton } from "./AddButton";
import { FieldError } from "@/components/FieldError";

import { FieldError as Error } from "react-hook-form";

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

export function FieldTipoEndereco({
  isInvalid,
  value: _value,
  onChange,
  error,
  ...rest
}: Props) {
  const { data: options, isLoading } = useQuery({
    queryKey: ["tipoendereco"],
    queryFn: () => api.get("/tipoendereco"),
    select: (response: any) =>
      response.data.content.map(
        ({
          idtipoendereco,
          nome,
        }: {
          idtipoendereco: string;
          nome: string;
        }): OptionType => ({
          value: String(idtipoendereco),
          label: nome,
        })
      ),
  });

  const value: OptionType = React.useMemo(() => {
    const selected = options?.filter(
      (option: OptionType) => option.value === _value
    );
    if (!options || !selected) {
      return { value: _value, label: "" };
    }
    return (selected || {}) as unknown as OptionType;
  }, [options, _value]);

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel mb="0.40rem">
        Tipo de Endereço
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
