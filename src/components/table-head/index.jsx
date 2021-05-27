const TableHead = function ({ headerList = [] }) {
  return (
    <tr class='w-full'>
      {headerList.map((text) => (
        <th scope='col' class='px-2 py-1 whitespace-nowrap text-sm text-gray-500'>
          {text}
        </th>
      ))}
    </tr>
  );
};

export default TableHead;
