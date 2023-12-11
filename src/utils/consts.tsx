import { addCommasToNumber } from "./functions";

interface TABLECOLUMN {
  header: any;
  accessorKey: string;
  cell?: (param1: any) => string;
}

export const ticks: string[] = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JULY",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export const tableColumns: TABLECOLUMN[] = [
  {
    header: "WEEK ENDING",
    accessorKey: "weekEnding",
  },
  {
    header: "RETAIL SALES",
    accessorKey: "retailSales",
    cell: (info) => addCommasToNumber(info.getValue()),
  },
  {
    header: "WHOLESALE SALES",
    accessorKey: "wholesaleSales",
    cell: (info) => addCommasToNumber(info.getValue()),
  },
  {
    header: "UNITS SOLD",
    accessorKey: "unitsSold",
  },
  {
    header: "RETAILER MARGIN",
    accessorKey: "retailerMargin",
    cell: (info) => addCommasToNumber(info.getValue()),
  },
];
