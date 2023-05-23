import { FaShippingFast } from 'react-icons/fa';
import { MovimentacoesDashboard } from './Dashboard';

export const MovimentacoesModule = {
  menuItem: {
    to: '/movimentacoes',
    title: 'Movimentações',
    icon: FaShippingFast,
  },
  routes: [
    {
      path: 'movimentacoes',
      element: <MovimentacoesDashboard />,
    },
  ],
};
