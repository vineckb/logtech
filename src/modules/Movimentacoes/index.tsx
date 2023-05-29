import { PageTitle } from '@/components/PageTitle';
import { Box } from '@chakra-ui/react';
import { FaShippingFast } from 'react-icons/fa';

const Module = {
  menuItem: {
    to: '/movimentacoes',
    title: 'Movimentações',
    icon: FaShippingFast,
  },
  routes: [
    {
      path: 'movimentacoes',
      element: (
        <Box p={5}>
          <PageTitle>Movimentações</PageTitle>
        </Box>
      ),
    },
  ],
};

export default Module;
