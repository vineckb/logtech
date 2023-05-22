import { useParams } from 'react-router-dom';
import { useFetchItem, useSave } from './service';
import { LicencasForm } from './Form';
import { Box } from '@chakra-ui/react';
import { PageTitle } from '@/components/PageTitle';

export function LicencasEdit() {
  const { id } = useParams();

  const { data } = useFetchItem(Number(id));
  const { mutateAsync: handleSave } = useSave(id);

  return (
    <Box p={5}>
      <PageTitle>Editar Licença #{id}</PageTitle>
      <LicencasForm defaultValues={data} handleSave={handleSave} />
    </Box>
  );
}
