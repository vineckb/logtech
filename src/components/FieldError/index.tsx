import { FormErrorMessage } from "@chakra-ui/react";
import { FieldError as Error } from "react-hook-form";

export interface FieldErrorProps {
  error?: Error;
}

export function FieldError({ error }: FieldErrorProps) {
  if (!error || !error.type) return null;

  return <FormErrorMessage>{errorMessage(error)}</FormErrorMessage>;
}

export function errorMessage(error: Error): string {
  switch (error.type) {
    case "too_small":
      return error.message as string;
    case "required":
      return "Campo Obrigatório";
    default:
      return error.message as string;
  }
}
