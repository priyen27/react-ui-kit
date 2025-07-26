/* eslint-disable @typescript-eslint/no-explicit-any */

// import { ColumnDef } from "@tanstack/react-table";

// import { Checkbox } from "../../checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "className",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Class Name" />
    ),
    cell: ({ row }: { row: any }) => <div>{row.getValue("className")}</div>,
  },
  {
    accessorKey: "capacity",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Capacity" />
    ),
    cell: ({ row }: { row: any }) => <div>{row.getValue("capacity")}</div>,
  },
  {
    accessorKey: "enrolled",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Enrolled" />
    ),
    cell: ({ row }: { row: any }) => <div>{row.getValue("enrolled")}</div>,
  },
  {
    accessorKey: "startDate",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Start Date" />
    ),
    cell: ({ row }: { row: any }) => <div>{row.getValue("startDate")}</div>,
  },
  {
    id: "actions",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }: { row: any }) => <DataTableRowActions row={row} />,
  },
];
