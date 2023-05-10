import { ChangeEvent, useState } from 'react';
import { Checkbox, Tbody, Td, Th, Tr } from '@chakra-ui/react';
import { TableHeading, TableElement } from './styles';
import { useDataGrid } from '@/hooks/useDataGrid';

interface Props {
  items: any;
  headers: {
    key: string;
    title: string;
  }[];
  selectable?: boolean;
  deletable?: boolean;
  editable?: boolean;
  handleRowClick: (id: string) => void;
}

export function Table({
  selectable = true,
  deletable = true,
  editable = true,
  items,
  headers,
  handleRowClick,
}: Props) {
  const [allSelected, setAllSelected] = useState<boolean>(false);
  const { selecteds, setSelecteds } = useDataGrid();

  function _handleRowClick(id: string) {
    if (!handleRowClick || typeof handleRowClick !== 'function') return;

    return () => handleRowClick(id);
  }

  function toggleSelectAll(e: ChangeEvent<HTMLInputElement>) {
    const { checked } = e.target;
    if (!checked) {
      setSelecteds([]);
      setAllSelected(false);
    } else {
      setSelecteds(items.map(({ id }: { id: string }) => id));
      setAllSelected(true);
    }
  }

  function toggleItem(id: string) {
    return (e: any) => {
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
            <Th>
              <Checkbox isChecked={allSelected} onChange={toggleSelectAll} />
            </Th>
          )}
          {headers.map(({ title }, index) => (
            <Th key={index}>{title}</Th>
          ))}

          {(deletable || editable) && <Th>&nbsp;</Th>}
        </Tr>
      </TableHeading>
      <Tbody>
        {items.map((item: any, row: string) => (
          <Tr key={row} onClick={_handleRowClick(item.id)}>
            {selectable && (
              <Td>
                <Checkbox
                  isChecked={!!selecteds.find((id) => item.id === id)}
                  onChange={toggleItem(item.id)}
                />
              </Td>
            )}
            {headers.map(({ key }, column) => (
              <Td key={`${row}-${column}`}>{item[key] as string}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </TableElement>
  );
}
