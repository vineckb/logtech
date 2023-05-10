import { useDataGrid } from '@/hooks/useDataGrid';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { ResponseType } from '../types';

export function Pagination<DataType>() {
  const { page, perPage, setPage, queryResult } = useDataGrid();

  if (!queryResult.data) return null;

  const {
    data: { totalElements: totalCount },
  } = queryResult.data as ResponseType<DataType>;

  const pages = Math.ceil(totalCount / perPage);

  const visiblePages = paginationNumbers(pages, page, 7);

  function handleNext() {
    if (page < pages) {
      setPage(page + 1);
    }
  }
  function handlePrev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  if (pages < 2) return null;

  return (
    <ButtonGroup mt={5}>
      <Button onClick={handlePrev}>
        <MdChevronLeft />
        Página anterior
      </Button>

      {visiblePages.map(function (pageNumber: number, index: number) {
        return (
          <Button
            key={index}
            onClick={() => setPage(pageNumber)}
            colorScheme={page === pageNumber ? 'facebook' : 'gray'}
          >
            {pageNumber}
          </Button>
        );
      })}

      <Button onClick={handleNext}>
        Próxima página
        <MdChevronRight />
      </Button>
    </ButtonGroup>
  );
}

function paginationNumbers(
  pages: number,
  page: number,
  showMax: number
): number[] {
  const paginationNumbers = [];

  if (pages) {
    let endPage;
    let startPage;

    if (pages <= showMax) {
      startPage = 1;
      endPage = pages;
    } else {
      startPage = page - 3;
      endPage = page + 3;

      if (startPage < 1) {
        startPage = 1;
        endPage = showMax;
      }

      if (endPage > pages) {
        endPage = pages;

        if (startPage - 1 - endPage <= showMax) {
          startPage = endPage - showMax;
        }
      }
    }
    for (let i = startPage; i <= endPage; i++) {
      paginationNumbers.push(i);
    }
  }
  return paginationNumbers;
}
