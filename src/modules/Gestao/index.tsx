import { FaIndustry } from 'react-icons/fa';
import { GestaoIndex } from './Index/index';

const Module = {
  menuItem: {
    to: '/gestao',
    title: 'Gestão',
    icon: FaIndustry,
  },

  routes: [
    {
      path: 'gestao',
      element: <GestaoIndex />,
    },
  ],
};

export default Module;
