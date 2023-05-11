import { MouseEvent, ChangeEvent, useState } from 'react';
import { Checkbox, Tbody, Td, Th, Tr } from '@chakra-ui/react';
import { TableHeading, TableElement } from './styles';
import { useDataGrid } from '@/hooks/useDataGrid';
import { ResponseType } from '../types';
import { TableSkeleton } from './TableSkeleton';

interface Props {
  idKey: string;
  headers: {
    key: string;
    title: string;
  }[];
  selectable?: boolean;
  deletable?: boolean;
  editable?: boolean;
  handleRowClick: (id: string) => void;
}

export function Table<DataType>({
  selectable = true,
  headers,
  handleRowClick,
  idKey,
}: Props) {
  const [allSelected, setAllSelected] = useState<boolean>(false);
  const { selecteds, setSelecteds, queryResult } = useDataGrid();

  if (queryResult.isLoading || queryResult.isRefetching) {
    return <TableSkeleton />;
  }

  if (!queryResult.data) return null;

  const {
    data: { content: items },
  } = queryResult.data as ResponseType<DataType>;

  function _handleRowClick(id: string) {
    if (!handleRowClick || typeof handleRowClick !== 'function') return;

    return (e: MouseEvent<HTMLElement>) => {
      if (e.currentTarget.nodeName !== 'TR') return;

      handleRowClick(id);
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
        {items.map((item: DataType, row: number) => (
          <Tr
            key={row}
            onClick={_handleRowClick(item[idKey as keyof DataType] as string)}
          >
            {selectable && (
              <Td onClick={(e) => e.stopPropagation()}>
                <Checkbox
                  isChecked={
                    !!selecteds.find(
                      (id) => item[idKey as keyof DataType] === id
                    )
                  }
                  onChange={toggleItem(item[idKey as keyof DataType] as string)}
                />
              </Td>
            )}
            {headers.map(({ key }, column) => (
              <Td key={`${row}-${column}`}>
                {item[key as keyof DataType] as string}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </TableElement>
  );
}
