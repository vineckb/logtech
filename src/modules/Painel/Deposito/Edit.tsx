import { useNavigate, useParams } from "react-router-dom";
import { useFetchItem, useSave } from "./service";
import { Form } from "./Form";
import { Box } from "@chakra-ui/react";
import { PageTitle } from "@/components/PageTitle";
import { resourceSingularName } from "./settings";
import { FormValues } from "./model";

export function DepositoEdit() {
  const { id } = useParams();
  const { data, isLoading } = useFetchItem(id || "");
  const { mutateAsync } = useSave(id);
  const navigate = useNavigate();

  async function handleSave(values: FormValues) {
    await mutateAsync(values);
    navigate("/painel/cadastro-de-depositos");
  }

  return (
    <Box p={5}>
      <PageTitle>
        Editar {resourceSingularName} #{id}
      </PageTitle>
      <Form
        defaultValues={data}
        isLoading={isLoading}
        handleSave={handleSave}
      />
    </Box>
  );
}
