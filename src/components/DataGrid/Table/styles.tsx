import { Thead, Table } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const TableHeading = styled(Thead)`
  color: #555c72;
  font-weight: bold;
  background: #eff2f7;

  th {
    text-transform: none;
  }
`;

export const TableElement = styled(Table)`
  td,
  th {
    padding: 8px 16px;
  }
  tr {
    border-bottom: 1px solid #e4e8ef;
  }
`;
