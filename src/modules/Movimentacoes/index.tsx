import { FaShippingFast } from 'react-icons/fa';
import { MovimentacoesDashboard } from './Dashboard';

const Module = {
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

export default Module;
