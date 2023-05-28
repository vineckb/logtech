import { useDataGrid } from '@/hooks/useDataGrid';
import { Checkbox, Tbody, Td, Text, Th, Tr } from '@chakra-ui/react';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponseType } from '../types';
import { TableSkeleton } from './TableSkeleton';
import { TableElement, TableHeading } from './styles';

interface Props {
  idKey?: string;
  headers: {
    key: string;
    title: string;
    filter?: (value: any) => string;
  }[];
  selectable?: boolean;
  deletable?: boolean;
  editable?: boolean;
  canOpen?: boolean;
}

export function Table<DataType>({
  selectable = true,
  editable = true,
  headers,
  idKey = 'id',
  canOpen = false,
}: Props) {
  const [allSelected, setAllSelected] = useState<boolean>(false);
  const { selecteds, setSelecteds, queryResult } = useDataGrid();
  const navigate = useNavigate();

  if (!queryResult || queryResult.isLoading || !queryResult.data) {
    return <TableSkeleton />;
  }

  const {
    data: { content: items },
  } = queryResult.data as ResponseType<DataType>;

  function onRowClick(id: string) {
    return (e: MouseEvent<HTMLElement>) => {
      if (!editable && !canOpen) return null;
      if (e.currentTarget.nodeName !== 'TR') return;

      navigate(`${id}`);
    };
  }

  function toggleSelectAll(e: ChangeEvent<HTMLInputElement>) {
    const { checked } = e.target;
    if (!checked) {
      setSelecteds([]);
      setAllSelected(false);
    } else {
      setSelecteds(
        items.map((item) => item[idKey as keyof DataType] as string)
      );
      setAllSelected(true);
    }
  }

  function toggleItem(id: string) {
    return () => {
      if (selecteds.find((_id) => id === _id)) {
        setSelecteds(selecteds.filter((_id) => id !== _id));
      } else {
        setSelecteds([...selecteds, id]);
      }

      if (allSelected && selecteds.length < 2) {
        setAllSelected(false);
      }

      if (selecteds.length + 1 === items.length) {
        setAllSelected(true);
      }
    };
  }

  function applyFilter(
    filter: undefined | ((v: any) => string),
    value: any
  ): string {
    if (typeof filter === 'function') {
      return filter(value);
    }

    return value;
  }

  return (
    <TableElement>
      <TableHeading>
        <Tr>
          {selectable && (
            <Th width={10}>
              <Checkbox
                isIndeterminate={
                  !!selecteds.length && selecteds.length < items.length
                }
                isChecked={selecteds.length === items.length}
                onChange={toggleSelectAll}
              />
            </Th>
          )}
          {headers.map(({ title }, index) => (
            <Th key={index}>{title}</Th>
          ))}
        </Tr>
      </TableHeading>
      <Tbody>
        {!items.length && (
          <Tr>
            <Td colSpan={headers.length + 1}>
              <Text p={10} textAlign="center">
                Nenhum item para exibir
              </Text>
            </Td>
          </Tr>
        )}
        {!!items.length &&
          items.map((item: DataType, row: number) => (
            <Tr
              key={row}
              onClick={onRowClick(item[idKey as keyof DataType] as string)}
            >
              {selectable && (
                <Td onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    isChecked={
                      !!selecteds.find(
                        (id) => item[idKey as keyof DataType] === id
                      )
                    }
                    onChange={toggleItem(
                      item[idKey as keyof DataType] as string
                    )}
                  />
                </Td>
              )}
              {headers.map(({ key }, column) => (
                <Td key={`${row}-${column}`}>
                  {applyFilter(
                    headers[column].filter,
                    item[key as keyof DataType]
                  )}
                </Td>
              ))}
            </Tr>
          ))}
      </Tbody>
    </TableElement>
  );
}
