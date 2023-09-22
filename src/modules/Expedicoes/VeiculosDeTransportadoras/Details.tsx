import {
  DetailsModal,
  Field,
  FieldLabel,
  FieldValue,
} from "@/components/DetailsModal";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useFetchItem } from "./service";

export function VeiculoTransportadoraDetails() {
  const { id } = useParams();
  const { data, isLoading } = useFetchItem(String(id));

  return (
    <DetailsModal
      title={<Text as="h1">Detalhes do Veículo Transportadora #{id}</Text>}
      isLoading={isLoading}
      minWidth={800}
    >
      <Grid templateColumns="repeat(3, 1fr)" gap={10} mb={10}>
        <GridItem>
          <Field>
            <FieldLabel>Descrição</FieldLabel>
            <FieldValue>{data?.nomeveiculo}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Transportadora</FieldLabel>
            <FieldValue>{data?.transportadora}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Placa</FieldLabel>
            <FieldValue>{data?.placa}</FieldValue>
          </Field>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={10} mb={10}>
        <GridItem>
          <Field>
            <FieldLabel>Nome Fantasia</FieldLabel>
            <FieldValue>{data?.nomefantasia}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Chassi</FieldLabel>
            <FieldValue>{data?.chassi}</FieldValue>
          </Field>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(4, 1fr)" gap={10} mb={10}>
        <GridItem>
          <Field>
            <FieldLabel>Tara</FieldLabel>
            <FieldValue>{data?.tara}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Peso Mínimo</FieldLabel>
            <FieldValue>{data?.pesominimo}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Peso Máximo</FieldLabel>
            <FieldValue>{data?.pesomaximo}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Lastro</FieldLabel>
            <FieldValue>{data?.lastro}</FieldValue>
          </Field>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" gap={10} mb={10}>
        <GridItem>
          <Field>
            <FieldLabel>Altura</FieldLabel>
            <FieldValue>{data?.altura}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Profundidade</FieldLabel>
            <FieldValue>{data?.profundidade}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>M³</FieldLabel>
            <FieldValue>{data?.m3}</FieldValue>
          </Field>
        </GridItem>
      </Grid>

      <Field mb={10}>
        <FieldLabel>Ativo</FieldLabel>
        <FieldValue>{data?.ativo === 1 ? "Sim" : "Não"}</FieldValue>
      </Field>
    </DetailsModal>
  );
}
