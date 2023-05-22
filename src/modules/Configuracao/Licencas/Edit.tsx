import { useParams } from 'react-router-dom';
import { useFetchItem } from './service';
import { LicencasForm } from './Form';
import { Box } from '@chakra-ui/react';
import { PageTitle } from '@/components/PageTitle';

export function LicencasEdit() {
  const { id } = useParams();

  const { data } = useFetchItem(Number(id));

  return (
    <Box p={5}>
      <PageTitle>Editar Licença #{id}</PageTitle>
      <LicencasForm defaultValues={data} />
    </Box>
  );
}
