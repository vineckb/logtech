import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import { Paper } from './Paper';

export interface StatCardProps {
  label: string;
  number: number;
}

export function StatCard({ label, number }: StatCardProps) {
  return (
    <Paper p={2} px={5} textAlign="center" flex={1}>
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{number}</StatNumber>
      </Stat>
    </Paper>
  );
}
