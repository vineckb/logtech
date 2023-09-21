import { FieldError } from "@/components/FieldError";
import { api } from "@/services/api";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FieldError as Error } from "react-hook-form";
import Select from "react-select";

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
export function FieldEstacaoSelect({
  isInvalid,
  error,
  value: _value,
  onChange,
  ...rest
}: Props) {
  const { data: options, isLoading } = useQuery({
    queryKey: ["enderecosestacao"],
    queryFn: () => api.get("/enderecosestacao"),
    select: (response: any) =>
      response.data.content.map(
        ({ idestacao, nome }: { idestacao: string; nome: string }) => ({
          value: String(idestacao),
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
    <FormControl isInvalid={isInvalid}>
      <FormLabel>Estação</FormLabel>

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
