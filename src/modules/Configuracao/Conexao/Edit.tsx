import { useParams } from 'react-router-dom';
import { useFetchItem, useSave } from './service';
import { Form } from './Form';
import { Box } from '@chakra-ui/react';
import { PageTitle } from '@/components/PageTitle';
import { resourceTitle } from './settings';

export function ConexaoEdit() {
  const { id } = useParams();
  const { data, isLoading } = useFetchItem(Number(id));
  const { mutateAsync: handleSave } = useSave(id);

  return (
    <Box p={5}>
      <PageTitle>
        Editar {resourceTitle} #{id}
      </PageTitle>
      <Form
        defaultValues={data}
        isLoading={isLoading}
        handleSave={handleSave}
      />
    </Box>
  );
}
