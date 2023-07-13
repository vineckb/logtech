import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

import { Paper } from '@/components/Paper';

import { PageHeader } from '@/components/PageHeader';
import { PeriodSelector } from '@/components/PeriodSelector';
import { StatCard } from '@/components/StatCard';
import { PeriodProvider } from '@/providers/Period';
import { Chart1 } from './chart1';
import { Chart2 } from './chart2';
import { Chart3 } from './chart3';

export function MovimentacoesDashboard() {
  return (
    <PeriodProvider>
      <Box p={5}>
        <PageHeader title="Movimentações">
          <PeriodSelector />
        </PageHeader>

        <Flex mb={5} justifyContent="stretch" gap={5}>
          <StatCard label="Itens" number={102} />
          <StatCard label="Sku's" number={50} />
          <StatCard label="Ordens de serv" number={10} />
          <StatCard label="Movimentações" number={25} />
          <StatCard label="Fornecedores" number={8} />
          <StatCard label="Faltas" number={1} />
          <StatCard label="Avarias" number={3} />
        </Flex>

        <Grid templateColumns="repeat(8, 1fr)" gap={5}>
          <GridItem colSpan={5}>
            <Paper p={5} mb={5}>
              <Text textAlign="center" mb={5} fontWeight="bold">
                Itens e Sku's por fornecedor
              </Text>
              <Chart1 />
            </Paper>
            <Grid templateColumns="repeat(8, 1fr)" gap={5}>
              <GridItem colSpan={4}>
                <Paper p={5} mb={5}>
                  <Text textAlign="center" mb={5} fontWeight="bold">
                    Itens e Sku's por dia
                  </Text>
                  <Chart1 />
                </Paper>
              </GridItem>
              <GridItem colSpan={4}>
                <Paper p={5} mb={5}>
                  <Text textAlign="center" mb={5} fontWeight="bold">
                    Avarias e faltas por dia
                  </Text>
                  <Chart2 />
                </Paper>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={3}>
            <Paper p={5} mb={5}>
              <Text textAlign="center" mb={5} fontWeight="bold">
                Cargas e notas / dia
              </Text>
              <Chart2 />
            </Paper>
            <Paper p={5}>
              <Text textAlign="center" mb={5} fontWeight="bold">
                Status de finalização
              </Text>
              <Box mt={-20} justifyContent="center" display="flex">
                <Chart3 />
              </Box>
            </Paper>
          </GridItem>
        </Grid>
      </Box>
    </PeriodProvider>
  );
}
