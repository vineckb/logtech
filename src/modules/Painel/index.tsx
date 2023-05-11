import { PainelDashboard } from './Dashboard';
import { PainelDeposito } from './Deposito/index';
import { PainelEndereco } from './Endereco';
import { PainelEstacao } from './Estacao';
import { PainelMotivo } from './Motivo';
import { PainelUsuario } from './Usuario';
import { PainelUsuariosLogados } from './UsuariosLogados';

const routes = [
  {
    path: 'painel',
    element: <PainelDashboard />,
  },
  {
    path: 'painel/cadastro-de-deposito',
    element: <PainelDeposito />,
  },
  { path: '/painel/cadastro-de-depositos', element: <PainelDeposito /> },
  { path: '/painel/cadastro-de-estacoes', element: <PainelEstacao /> },
  { path: '/painel/cadastro-de-enderecos', element: <PainelEndereco /> },
  { path: '/painel/cadastro-de-usuarios', element: <PainelUsuario /> },
  { path: '/painel/cadastro-de-motivos', element: <PainelMotivo /> },
  {
    path: '/painel/consulta-de-usuarios-logados',
    element: <PainelUsuariosLogados />,
  },
];

export default routes;
