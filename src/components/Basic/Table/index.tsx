import Table from './Table.react';
export default Table;

export interface TableColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value) => React.ReactNode;
}
