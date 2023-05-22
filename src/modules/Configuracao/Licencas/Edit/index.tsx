import { useParams } from 'react-router-dom';
import { ConfiguracaoLicencasEditForm } from './Form';
import { Text } from '@chakra-ui/react';
import { EditModal } from '@/components/EditModal';
import { useFetchItem } from '../service';

export function ConfiguracaoLicencasEdit() {
  const { id } = useParams();

  const { data, isLoading } = useFetchItem(Number(id));

  return (
    <EditModal
      title={
        <Text as="h3" mb={5}>
          Definição de licença
        </Text>
      }
      onCloseURL="/configuracao/definica-de-licencas"
      isLoading={isLoading}
    >
      <ConfiguracaoLicencasEditForm defaultValues={data} />
    </EditModal>
  );
}
