import { PageTitle } from '@/components/PageTitle';
import {
  Box,
  Grid,
  GridItem,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';

import { Paper } from '@/components/Paper';
import { MdOutlineList } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Module from '..';

export function ConfiguracaoDashboard() {
  return (
    <Box p={5}>
      <PageTitle>Configuração</PageTitle>

      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={2}>
          <Paper p={5}>
            <List>
              {Module.menuItem.childrens.map(
                ({ to, title, icon = MdOutlineList }: any, index: number) => (
                  <ListItem key={index} p={2}>
                    <Link to={to}>
                      <ListIcon as={icon} fontSize={20} />
                      {title}
                    </Link>
                  </ListItem>
                )
              )}
            </List>
          </Paper>
        </GridItem>
      </Grid>
    </Box>
  );
}
