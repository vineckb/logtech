import { FaRegEdit } from 'react-icons/fa';
import { AuditoriasDashboard } from './Dashboard';

const Module = {
  menuItem: {
    to: '/auditoria',
    title: 'Auditoria',
    icon: FaRegEdit,
  },

  routes: [
    {
      path: 'auditoria',
      element: <AuditoriasDashboard />,
    },
  ],
};

export default Module;
