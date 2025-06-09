export interface Column<T> {
    key: keyof T;
    title: string;
    render?: (value: any, record: T) => React.ReactNode;
    width?: string;
  }  

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (record: T) => void;
  selectedRows?: string[];
  onSelectRow?: (selectedIds: string[]) => void;
  rowKey: keyof T;
}

function Table<T extends { [key: string]: any }>({
  columns,
  data,
  onRowClick,
  selectedRows,
  onSelectRow,
  rowKey,
}: TableProps<T>) {
  const handleCheckboxChange = (id: string) => {
    if (!onSelectRow || !selectedRows) return;
    
    const newSelectedRows = selectedRows.includes(id)
      ? selectedRows.filter((rowId) => rowId !== id)
      : [...selectedRows, id];
    
    onSelectRow(newSelectedRows);
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {onSelectRow && (
              <th className="px-6 py-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  onChange={(e) => {
                    if (onSelectRow) {
                      onSelectRow(
                        e.target.checked ? data.map((item) => String(item[rowKey])) : []
                      );
                    }
                  }}
                  checked={selectedRows?.length === data.length}
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                style={{ width: column.width }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((record) => (
            <tr
              key={String(record[rowKey])}
              onClick={() => onRowClick && onRowClick(record)}
              className={`${
                onRowClick ? 'cursor-pointer hover:bg-gray-50' : ''
              }`}
            >
              {onSelectRow && (
                <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={selectedRows?.includes(String(record[rowKey]))}
                    onChange={() => handleCheckboxChange(String(record[rowKey]))}
                  />
                </td>
              )}
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {column.render
                    ? column.render(record[column.key], record)
                    : record[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;