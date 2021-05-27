import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from '../../components/table/';

const Tours = function () {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('../../api/get/tours').then((tourRes) => {
      if (tourRes.data.ok) {
        return setList(
          tourRes.data.list.map((data) => {
            //console.log(data.dateStart.split('T')[0], data.dateEnd.split('T')[0]);
            return {
              id: { title: data.id, type: 'text' },
              from: { title: data.from, type: 'text' },
              to: { title: data.to, type: 'text' },
              dateStart: {
                title: data.dateStart.split('T')[0],
                type: 'date',
              },
              dateTo: {
                title: data.dateEnd.split('T')[0],
                type: 'date',
              },
              //dateTo: { title: data.dateTo.split('T')[0], type: 'date' },
              price: { title: data.price, type: 'number' },
              numberOfSeats: { title: data.numberOfSeats, type: 'number' },
              desc: { title: data.desc, type: 'text', isTextArea: true },
              editBtn: { title: 'Изменить', type: 'button', callback: (data) => console.log(data) },
              deleteBtn: {
                title: 'Удалить',
                type: 'button',
                callback: (data) =>
                  axios
                    .post('/api/delete/tour', {
                      id: data.id.title,
                    })
                    .then((res) => {
                      if (!res.data.errCode) {
                        setList(list.filter((tour) => tour.id.title !== data.id.title));
                      }
                    }),
              },
            };
          })
        );
      }

      //return (document.location.href = '../../');
    });
  }, []);
  return (
    <div>
      <button
        class='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center outline-none'
      >
        Создать
      </button>
      <Table
        headerList={['id', 'Откуда', 'Куда', 'Дата начало', 'Дата окончание', 'Цена', 'Количество мест', 'Описание']}
        listData={list}
      />
    </div>
  );
};

export default Tours;
