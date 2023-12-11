import React, { useMemo, useState } from "react";
import "../css/List.css";
import { useSelector } from "react-redux";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import { RootState } from "../store/store";
import { tableColumns as columns } from "../utils/consts";
import { Item } from "../store/slices/itemSlice";

function List() {
  const detail: Item = useSelector(
    (state: RootState) => state.itemSlice.items[0]
  );
  const data = useMemo(() => detail.sales, [detail]);

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
    onSortingChange: setSorting,
  });

  return (
    <div id="list-container">
      {/* Render table cells after get sales data from server side */}
      {data && (
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="thead-tr">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {
                      {
                        asc: "▲",
                        desc: "▼",
                      }[(header.column.getIsSorted() as string) ?? null]
                    }
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="tbody-tr">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={`td-${cell.id.slice(2)}`}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default List;
