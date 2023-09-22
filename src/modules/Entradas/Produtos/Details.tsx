import {
  DetailsModal,
  Field,
  FieldLabel,
  FieldValue,
} from "@/components/DetailsModal";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useFetchItem } from "./service";

export function ProdutosDetails() {
  const { id } = useParams();
  const { data, isLoading } = useFetchItem(String(id));

  return (
    <DetailsModal
      title={<Text as="h1">Detalhes do Produto #{id}</Text>}
      isLoading={isLoading}
      minWidth={800}
    >
      <Grid templateColumns="repeat(3, 1fr)" gap={10} mb={10}>
        <GridItem>
          <Field>
            <FieldLabel>Descrição</FieldLabel>
            <FieldValue>{data?.nome}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Fornecedor</FieldLabel>
            <FieldValue>{data?.fornecedores.nome}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>ID Produto</FieldLabel>
            <FieldValue>{data?.idproduto}</FieldValue>
          </Field>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" gap={10} mb={10}>
        <GridItem>
          <Field>
            <FieldLabel>Un. Padrão</FieldLabel>
            <FieldValue>{data?.unidadepadrao}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Grupo</FieldLabel>
            <FieldValue>{data?.grupos.nome}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Subgrupo</FieldLabel>
            <FieldValue>{data?.subgrupos.nome}</FieldValue>
          </Field>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(4, 1fr)" gap={10} mb={10}>
        <GridItem>
          <Field>
            <FieldLabel>Estoque mínimo</FieldLabel>
            <FieldValue>{data?.estoqueminimo}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Estoque máximo</FieldLabel>
            <FieldValue>{data?.estoquemaximo}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Controla Validade</FieldLabel>
            <FieldValue>{data?.controlavalidade}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Controla Lote</FieldLabel>
            <FieldValue>{data?.controlalote}</FieldValue>
          </Field>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" gap={10} mb={10}>
        <GridItem>
          <Field>
            <FieldLabel>Controla Série</FieldLabel>
            <FieldValue>{data?.controlanumserie}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Peso Bruto </FieldLabel>
            <FieldValue>{data?.pesobruto}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Peso Líquido</FieldLabel>
            <FieldValue>{data?.pesoliquido}</FieldValue>
          </Field>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={10} mb={10}>
        <GridItem>
          <Field>
            <FieldLabel>ID Endereço </FieldLabel>
            <FieldValue>{data?.idendereco}</FieldValue>
          </Field>
        </GridItem>
        <GridItem>
          <Field>
            <FieldLabel>Shelflife </FieldLabel>
            <FieldValue>{data?.shelflife}</FieldValue>
          </Field>
        </GridItem>
      </Grid>
    </DetailsModal>
  );
}
