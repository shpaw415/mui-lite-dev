import Pagination, { TablePagination } from "@/mui/Pagination";
import { useState } from "react";

export default function PaginationTest() {
  const [page, setPage] = useState(3);
  const [rowPerPage, setRowPerPage] = useState<10 | 25 | 50 | 100>(10);
  return (
    <>
      <Pagination
        count={100000}
        page={3}
        siblingCount={1}
        boundaryCount={1}
        color="primary"
        size="medium"
        onChange={(e, page) => {
          setPage(page);
        }}
        showFirstButton
        showLastButton
      />
      <TablePagination
        count={102}
        page={page}
        onPageChange={(e, page) => setPage(page)}
        rowsPerPage={rowPerPage}
        onRowsPerPageChange={(c) => {
          setRowPerPage(c);
          setPage(0);
        }}
      />
      <TablePaginationTest />
    </>
  );
}

export function TablePaginationTest() {
  const [rowPerPage, setRowPerPage] = useState<10 | 25 | 50 | 100>(10);
  return (
    <TablePagination
      count={100}
      onRowsPerPageChange={setRowPerPage}
      rowsPerPage={rowPerPage}
    />
  );
}
