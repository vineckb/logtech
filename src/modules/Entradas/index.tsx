import { FaChartPie } from 'react-icons/fa';
import { EntradasDashboard } from './Dashboard';
import { FornecedoresList } from './Fornecedores/List';
import { GruposList } from './Grupos/List';
import { ProdutosDetails } from './Produtos/Details';
import { ProdutosList } from './Produtos/List';
import { SubgruposList } from './Subgrupos/List';

const Module = {
  menuItem: {
    to: '/entradas',
    title: 'Entradas',
    icon: FaChartPie,
    childrens: [
      {
        to: '/entradas/consulta-de-fornecedores',
        title: 'Fornecedores',
      },
      {
        to: '/entradas/consulta-de-grupos',
        title: 'Grupos',
      },
      {
        to: '/entradas/consulta-de-subgrupos',
        title: 'Subgrupos',
      },
      {
        to: '/entradas/consulta-de-produtos',
        title: 'Produtos',
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
      element: <FornecedoresList />,
    },
    {
      path: 'entradas/consulta-de-grupos',
      element: <GruposList />,
    },
    {
      path: 'entradas/consulta-de-subgrupos',
      element: <SubgruposList />,
    },
    {
      path: 'entradas/consulta-de-produtos',
      element: <ProdutosList />,
      children: [{ path: ':id', element: <ProdutosDetails /> }],
    },
  ],
};

export default Module;
