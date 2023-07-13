import { FaIndustry } from 'react-icons/fa';
import { GestaoDashboard } from './Dashboard';

const Module = {
  menuItem: {
    to: '/gestao',
    title: 'Gestão',
    icon: FaIndustry,
  },

  routes: [
    {
      path: 'gestao',
      element: <GestaoDashboard />,
    },
  ],
};

export default Module;
