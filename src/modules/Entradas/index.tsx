import { FaChartPie } from 'react-icons/fa';
import { EntradasDashboard } from './Dashboard';
import { EntradasFornecedores } from './Fornecedores';
import { EntradasGrupos } from './Grupos';
import { EntradasProdutos } from './Produtos';
import { EntradasSubgrupos } from './Subgrupos';

export const EntradasModule = {
  menuItem: {
    to: '/entradas',
    title: 'Entradas',
    icon: FaChartPie,
    childrens: [
      {
        to: '/entradas/consulta-de-fornecedores',
        title: 'Consulta de Fornecedores',
      },
      {
        to: '/entradas/consulta-de-grupos',
        title: 'Consulta de Grupos',
      },
      {
        to: '/entradas/consulta-de-subgrupos',
        title: 'Consulta de Subgrupos',
      },
      {
        to: '/entradas/consulta-de-produtos',
        title: 'Consulta de Produtos',
      },
    ],
  },

  routes: [
    {
      path: 'entradas',
      element: <EntradasDashboard />,
    },
    {
      path: 'entradas/consulta-de-fornecedores',
      element: <EntradasFornecedores />,
    },
    {
      path: 'entradas/consulta-de-grupos',
      element: <EntradasGrupos />,
    },
    {
      path: 'entradas/consulta-de-subgrupos',
      element: <EntradasSubgrupos />,
    },
    {
      path: 'entradas/consulta-de-produtos',
      element: <EntradasProdutos />,
    },
  ],
};
