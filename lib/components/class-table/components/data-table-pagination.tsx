import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "../../button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const pageInfo = table.getState().pagination;
  const totalItems = table.getCoreRowModel().rows.length; // Gets the total number of items
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  const handlePageChange = (value: string) => {
    const pageNumber = Number(value);
    if (pageNumber >= 0 && pageNumber < pageCount) {
      table.setPageIndex(pageNumber);
    }
  };
  return (
    <div className="flex items-center justify-between px-2 border-t border-t-[#E8E9EB] ">
      <Select
        value={`${table.getState().pagination.pageSize}`}
        onValueChange={(value) => {
          table.setPageSize(Number(value));
        }}
      >
        <SelectTrigger className=" !shadow-none border-none w-14">
          <SelectValue placeholder={table.getState().pagination.pageSize} />
        </SelectTrigger>
        <SelectContent side="top">
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <SelectItem key={pageSize} value={`${pageSize}`}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex-1 text-sm text-muted-foreground">
        {pageInfo.pageIndex * pageInfo.pageSize + 1} –{" "}
        {Math.min((pageInfo.pageIndex + 1) * pageInfo.pageSize, totalItems)} of{" "}
        {totalItems} items
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <Select
            value={`${pageIndex}`} // Display 1-based index in the UI
            onValueChange={handlePageChange}
          >
            <SelectTrigger className=" !shadow-none border-none w-14  ">
              <SelectValue />
            </SelectTrigger>
            <SelectContent side="top">
              {Array.from({ length: pageCount }, (_, index) => (
                <SelectItem key={index} value={`${index}`}>
                  {index + 1} {/* 1-based index display */}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex  items-center justify-center text-sm !ml-0">
          {/* Display the total number of pages */}
          of {pageCount} pages
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="secondary"
            className="h-8 w-8 p-0 focus:bg-transparent"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            className="h-8 w-8 p-0 focus:bg-transparent"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
