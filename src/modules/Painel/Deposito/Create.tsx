import { Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from '@/components/PageTitle';
import { resourceSingularName } from './settings';
import { useSave } from './service';
import { Resource } from './model';
import { Form } from './Form';

export function DepositoCreate() {
  const navigate = useNavigate();
  const { mutateAsync } = useSave();

  async function handleSave(values: Resource) {
    try {
      const newValue = {
        ...values,
        tipo: values.tipo.value
      }
      await mutateAsync(newValue);
      navigate('/painel/cadastro-de-depositos');
    } catch (e) {}
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
