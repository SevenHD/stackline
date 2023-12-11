import { addCommasToNumber } from "./functions";

interface TABLECOLUMN {
  header: any;
  accessorKey: string;
  cell?: (param1: any) => string;
}

//Ticks of X axis of Chart component
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

//Column object for creating table of List component
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
