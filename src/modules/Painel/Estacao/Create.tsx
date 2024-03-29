import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PageTitle } from "@/components/PageTitle";
import { resourceName } from "./settings";
import { useSave } from "./service";
import { FormValues } from "./model";
import { Form } from "./Form";

export function EstacaoCreate() {
  const navigate = useNavigate();
  const { mutateAsync } = useSave();

  async function handleSave(values: FormValues) {
    try {
      await mutateAsync(values);
      navigate("/painel/cadastro-de-estacoes");
    } catch (e) {}
  }

  return (
    <Box p={5}>
      <PageTitle>
        <Text>Adicionar {resourceName}</Text>
      </PageTitle>
      <Form handleSave={handleSave} />
    </Box>
  );
}
