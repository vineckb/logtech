import { useNavigate, useParams } from "react-router-dom";
import { useFetchItem, useSave } from "./service";
import { Form } from "./Form";
import { Box } from "@chakra-ui/react";
import { PageTitle } from "@/components/PageTitle";
import { resourceName } from "./settings";
import { FormValues } from "./model";

export function EstacaoEdit() {
  const { id } = useParams();
  const { data, isLoading } = useFetchItem(id || "");
  const { mutateAsync } = useSave(id);
  const navigate = useNavigate();

  async function handleSave(values: FormValues) {
    try {
      await mutateAsync(values);
      navigate("/painel/cadastro-de-estacoes");
    } catch (e) {}
  }

  return (
    <Box p={5}>
      <PageTitle>
        Editar {resourceName} #{id}
      </PageTitle>
      <Form
        defaultValues={data}
        isLoading={isLoading}
        handleSave={handleSave}
      />
    </Box>
  );
}
