import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PageTitle } from "@/components/PageTitle";
import { resourceSingularName } from "./settings";
import { useSave } from "./service";
import { FormValues } from "./model";
import { Form } from "./Form";

export function DepositoCreate() {
  const navigate = useNavigate();
  const { mutateAsync } = useSave();

  async function handleSave(values: FormValues) {
    await mutateAsync(values);
    navigate("/painel/cadastro-de-depositos");
  }

  return (
    <Box p={5}>
      <PageTitle>
        <Text>Adicionar {resourceSingularName}</Text>
      </PageTitle>
      <Form handleSave={handleSave} />
    </Box>
  );
}
