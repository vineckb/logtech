import { FaRegEdit } from 'react-icons/fa';
import { AuditoriaIndex } from './Index/index';

const Module = {
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

export default Module;
