import { OverviewModal } from '@/components/OverviewModal';
import { ModalHeader } from '@chakra-ui/react';

export function ConfiguracaoConexaoOverview() {
  return (
    <OverviewModal back="/configuracao/conexao-cliente">
      <ModalHeader>
        <h3>Conexão Cliente Overview</h3>
      </ModalHeader>
    </OverviewModal>
  );
}
