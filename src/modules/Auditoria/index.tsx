import { FaRegEdit } from 'react-icons/fa';
import { AuditoriaIndex } from './Index/index';

export const AuditoriaModule = {
  menuItem: {
    to: '/auditoria',
    title: 'Auditoria',
    icon: FaRegEdit,
  },

  routes: [
    {
      path: 'auditoria',
      element: <AuditoriaIndex />,
    },
  ],
};
