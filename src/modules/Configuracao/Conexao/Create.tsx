import { Box, Text } from '@chakra-ui/react';
import { Form } from './Form';
import { useSave } from './service';
import { useNavigate } from 'react-router-dom';
import { FormValues } from './model';
import { resourceTitle } from './settings';
import { PageTitle } from '@/components/PageTitle';

export function ConexaoCreate() {
  const navigate = useNavigate();
  const { mutateAsync } = useSave();

  async function handleSave(values: FormValues) {
    console.log('aqui');
    try {
      const response = await mutateAsync(values);
      navigate(`${response.data.idconexao}`);
    } catch (e) {}
  }

  return (
    <Box p={5}>
      <PageTitle>
        <Text>Adicionar {resourceTitle}</Text>
      </PageTitle>
      <Form handleSave={handleSave} />
    </Box>
  );
}
