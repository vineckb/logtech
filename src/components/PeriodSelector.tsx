import { usePeriodContext } from '@/hooks/usePeriodContext';
import { CalendarIcon } from '@chakra-ui/icons';
import { InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Box } from '@chakra-ui/layout';
import { RangeDatepicker } from 'chakra-dayzed-datepicker';
import moment from 'moment';
import React from 'react';

export function PeriodSelector() {
  const {
    period: [_startDate, _endDate],
    setPeriod,
  } = usePeriodContext();
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([
    moment(_startDate, 'DD/MM/YYYY').toDate(),
    moment(_endDate, 'DD/MM/YYYY').toDate(),
  ]);

  React.useEffect(() => {
    if (selectedDates.length < 2) return;

    setPeriod([
      moment(selectedDates[0]).format('DD/MM/YYYY'),
      moment(selectedDates[1]).format('DD/MM/YYYY'),
    ]);
  }, [selectedDates, setPeriod]);

  return (
    <Box flexGrow={0} overflow="hidden" position="relative">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="#0f4f6d"
          fontSize="1.2em"
          children={<CalendarIcon />}
          h="full"
        />
        <RangeDatepicker
          usePortal={true}
          configs={{
            dateFormat: 'dd/MM/yyyy',
          }}
          propsConfigs={{
            inputProps: {
              bg: '#fff',
              pl: 10,
            },
          }}
          selectedDates={selectedDates}
          onDateChange={setSelectedDates}
        />
      </InputGroup>
    </Box>
  );
}
