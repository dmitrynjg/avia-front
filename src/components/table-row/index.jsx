import { useState } from 'react';

const TableRow = function ({ data = {} }) {
  const [editData, setData] = useState(data);

  return (
    <tr>
      {Object.keys(editData).map((key) => (
        <td
          class='px-1 py-1 whitespace-nowrap text-sm text-gray-500'
          onClick={() => {
            if (editData[key].type === 'button' && typeof editData[key].callback === 'function') {
              editData[key].callback(editData);
            }
          }}
        >
          <div className='text-center w-full'>
            {editData[key].type !== 'button' ? (
              editData[key].isTextArea ? (
                <textarea
                  className='w-auto text-center'
                  onChange={(event) => {
                    setData({ ...editData, [key]: { ...editData[key], title: event.target.value } });
                  }}
                >
                  {editData[key].title}
                </textarea>
              ) : (
                <input
                  type={editData[key].type}
                  defaultValue={editData[key].title}
                  className='w-auto text-center'
                  onChange={(event) => {
                    setData({ ...editData, [key]: { ...editData[key], title: event.target.value } });
                  }}
                />
              )
            ) : (
              <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center outline-none'>
                {editData[key].title}
              </button>
            )}
          </div>
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
