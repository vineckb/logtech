import { useParams } from 'react-router-dom';
import { useFetchItem, useSave } from './service';
import { Form } from './Form';
import { Box } from '@chakra-ui/react';
import { PageTitle } from '@/components/PageTitle';
import { resourceName } from './settings';

export function EnderecoEdit() {
  const { id } = useParams();
  const { data, isLoading } = useFetchItem(id || '');
  const { mutateAsync: handleSave } = useSave(id);

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
