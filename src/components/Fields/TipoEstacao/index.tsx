import { api } from "@/services/api";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import { FieldError as Error } from "react-hook-form";
import Select from "react-select";
import { AddButton } from "./AddButton";
import { FieldError } from "@/components/FieldError";

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

export function FieldTipoEstacao({
  isInvalid,
  error,
  value: _value,
  onChange,
  ...rest
}: Props) {
  const { data: options, isLoading } = useQuery({
    queryKey: ["tipoestacao"],
    queryFn: () => api.get("/tipoestacao"),
    select: (response: any) =>
      response.data.content.map(
        ({ idtipoestacao, nome }: { idtipoestacao: string; nome: string }) => ({
          value: idtipoestacao,
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
    return selected as unknown as OptionType;
  }, [options, _value]);

  return (
    <FormControl isInvalid={isInvalid} mb="0.40rem">
      <FormLabel
        sx={{ display: "flex", flexWrap: "nowrap", whiteSpace: "nowrap" }}
      >
        Tipo de Estação
        <AddButton />
      </FormLabel>

      <Select
        {...rest}
        isLoading={isLoading}
        isClearable={true}
        isSearchable={true}
        options={options}
        value={value}
        onChange={(newValue) => {
          console.log(newValue);
          onChange(newValue?.value || "");
        }}
      />

      <FieldError error={error} />
    </FormControl>
  );
}
