import { MenuItemProps } from '../SideMenuItem';
import {
  FaChartLine,
  FaChartPie,
  FaIndustry,
  FaRegEdit,
  FaRegSun,
  FaShippingFast,
  FaRegCheckSquare,
} from 'react-icons/fa';

const childrens = [
  {
    to: '/configuracao/definicao-de-licencas',
    title: 'Definição de Licenças',
  },
  {
    to: '/configuracao/conexao-cliente',
    title: 'Conexão Cliente',
  },
  {
    to: '/configuracao/liberacao-de-rotinas',
    title: 'Liberação de rotinas',
  },
  {
    to: '/configuracao/permissao-de-usuarios',
    title: 'Permissão de Usuários',
  },
  {
    to: '/configuracao/permissao-de-filiais',
    title: 'Permissão de Filiais',
  },
];

export const menuItems: MenuItemProps[] = [
  {
    to: '/configuracao',
    title: 'Configuração da Aplicação',
    icon: FaRegSun,
    childrens,
  },
  {
    to: '/painel',
    title: 'Painel de Controle',
    icon: FaChartLine,
    childrens,
  },
  {
    to: '/entradas',
    title: 'Entradas',
    icon: FaChartPie,
    childrens,
  },
  {
    to: '/movimentacoes',
    title: 'Movimentações',
    icon: FaShippingFast,
    childrens,
  },
  {
    to: '/expedicoes',
    title: 'Expedições',
    icon: FaRegCheckSquare,
    childrens,
  },
  {
    to: '/gestao',
    title: 'Gestão',
    icon: FaIndustry,
    childrens,
  },
  {
    to: '/auditoria',
    title: 'Auditoria',
    icon: FaRegEdit,
    childrens,
  },
];