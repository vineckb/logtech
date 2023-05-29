import { PageTitle } from '@/components/PageTitle';
import { Box } from '@chakra-ui/react';
import { FaRegEdit } from 'react-icons/fa';

const Module = {
  menuItem: {
    to: '/auditoria',
    title: 'Auditoria',
    icon: FaRegEdit,
  },

  routes: [
    {
      path: 'auditoria',
      element: (
        <Box p={5}>
          <PageTitle>Auditoria</PageTitle>
        </Box>
      ),
    },
  ],
};

export default Module;
