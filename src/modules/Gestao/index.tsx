import { FaIndustry } from 'react-icons/fa';
import { GestaoIndex } from './Index/index';

export const GestaoModule = {
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
