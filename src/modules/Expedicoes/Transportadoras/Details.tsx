import {
  DetailsModal,
  Field,
  FieldLabel,
  FieldValue,
} from "@/components/DetailsModal";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useFetchItem } from "./service";

export function TransportadorasDetails() {
  const { id } = useParams();
  const { data, isLoading } = useFetchItem(id as string);

  return (
    <DetailsModal
      title={
        <Text as="h1">
          Detalhes da Transportadora #{id}({data?.idtransportadora})
        </Text>
      }
      isLoading={isLoading}
      minWidth={800}
    >
      <Grid templateColumns="repeat(8, 1fr)" gap={10} mb={10}>
        <GridItem colSpan={3}>
          <Field>
            <FieldLabel>Nome</FieldLabel>
            <FieldValue>{data?.nometransportadora}</FieldValue>
          </Field>
        </GridItem>
        <GridItem colSpan={3}>
          <Field>
            <FieldLabel>CPF ou CNPJ</FieldLabel>
            <FieldValue>{data?.cpfcnpj}</FieldValue>
          </Field>
        </GridItem>
        <GridItem colSpan={2}>
          <Field>
            <FieldLabel>IE</FieldLabel>
            <FieldValue>{data?.ie}</FieldValue>
          </Field>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={10} mb={10}>
        <GridItem>
          <Field>
            <FieldLabel>Nome fantasia</FieldLabel>
            <FieldValue>{data?.nomefantasia}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Cidade</FieldLabel>
            <FieldValue>{data?.codcidade}</FieldValue>
          </Field>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(8, 1fr)" gap={10} mb={10}>
        <GridItem colSpan={6}>
          <Field>
            <FieldLabel>Logradouro</FieldLabel>
            <FieldValue>{data?.endereco}</FieldValue>
          </Field>
        </GridItem>
        <GridItem colSpan={2}>
          <Field>
            <FieldLabel>Número</FieldLabel>
            <FieldValue>{data?.numero}</FieldValue>
          </Field>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={10} mb={10}>
        <GridItem>
          <Field>
            <FieldLabel>Complemento</FieldLabel>
            <FieldValue>{data?.complemento}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Bairro</FieldLabel>
            <FieldValue>{data?.bairro}</FieldValue>
          </Field>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={10} mb={10}>
        <GridItem>
          <Field>
            <FieldLabel>CEP</FieldLabel>
            <FieldValue>{data?.cep}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Telefone</FieldLabel>
            <FieldValue>{data?.telefone}</FieldValue>
          </Field>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={10} mb={10}>
        <GridItem>
          <Field>
            <FieldLabel>E-mail</FieldLabel>
            <FieldValue>{data?.email}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Avito</FieldLabel>
            <FieldValue>{data?.ativo === "s" ? "Sim" : "Não"}</FieldValue>
          </Field>
        </GridItem>
      </Grid>

      <Field mb={10}>
        <FieldLabel>Observação</FieldLabel>
        <FieldValue>{data?.obs}</FieldValue>
      </Field>
      <Grid templateColumns="repeat(3, 1fr)" gap={10} mb={10}>
        <GridItem>
          <Field>
            <FieldLabel>Data Cadastro</FieldLabel>
            <FieldValue>{data?.datacadastro}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field mb={10}>
            <FieldLabel>Contato</FieldLabel>
            <FieldValue>{data?.contato}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field mb={10}>
            <FieldLabel>ID Tipo Transportadora</FieldLabel>
            <FieldValue>{data?.idtipotransportadora}</FieldValue>
          </Field>
        </GridItem>
      </Grid>
    </DetailsModal>
  );
}
