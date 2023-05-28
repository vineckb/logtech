import {
  DetailsModal,
  Field,
  FieldLabel,
  FieldValue,
} from '@/components/DetailsModal';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useFetchItem } from './service';

export function ClientesDetails() {
  const { id } = useParams();
  const { data, isLoading } = useFetchItem(String(id));

  return (
    <DetailsModal
      title={<Text as="h1">Detalhes do Cliente #{id}</Text>}
      isLoading={isLoading}
      minWidth={800}
    >
      <Grid templateColumns="repeat(8, 1fr)" gap={10} mb={10}>
        <GridItem colSpan={3}>
          <Field>
            <FieldLabel>Nome</FieldLabel>
            <FieldValue>{data?.nome}</FieldValue>
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
            <FieldLabel>Rota</FieldLabel>
            <FieldValue>{data?.rota}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Cidade</FieldLabel>
            <FieldValue>{data?.cidade}</FieldValue>
          </Field>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(8, 1fr)" gap={10} mb={10}>
        <GridItem colSpan={6}>
          <Field>
            <FieldLabel>Logradouro</FieldLabel>
            <FieldValue>{data?.logradouro}</FieldValue>
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
            <FieldLabel>Status</FieldLabel>
            <FieldValue>{data?.status}</FieldValue>
          </Field>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={10} mb={10}>
        <GridItem>
          <Field>
            <FieldLabel>Latitude</FieldLabel>
            <FieldValue>{data?.latitude}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Longitude</FieldLabel>
            <FieldValue>{data?.longitude}</FieldValue>
          </Field>
        </GridItem>
      </Grid>

      <Field mb={10}>
        <FieldLabel>Shelflife</FieldLabel>
        <FieldValue>{data?.shelflife}</FieldValue>
      </Field>
    </DetailsModal>
  );
}
