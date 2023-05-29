import { PageTitle } from '@/components/PageTitle';
import { Box } from '@chakra-ui/react';
import { FaIndustry } from 'react-icons/fa';

const Module = {
  menuItem: {
    to: '/gestao',
    title: 'Gestão',
    icon: FaIndustry,
  },

  routes: [
    {
      path: 'gestao',
      element: (
        <Box p={5}>
          <PageTitle>Gestão</PageTitle>
        </Box>
      ),
    },
  ],
};

export default Module;
