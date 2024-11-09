import { useCallback, useEffect, useState } from 'react';
import data from './MOCK_DATA.json';
export default function Problem6() {
  const [cars, setCars] = useState(data);
  const [selected, setSelected] = useState();

  return (
    <>
      <div>
        <div style={{ display: 'block' }}>
          VIN:{' '}
          <input
            type='text'
            value={selected && selected.vin ? selected.vin : ''}
          />
        </div>
        <div style={{ display: 'block' }}>
          Make:{' '}
          <input
            type='text'
            value={selected && selected.make ? selected.make : ''}
          />
        </div>
        <div style={{ display: 'block' }}>
          Model:{' '}
          <input
            type='text'
            value={selected && selected.model ? selected.model : ''}
          />
        </div>
        <div style={{ display: 'block' }}>
          Year:{' '}
          <input
            type='text'
            value={selected && selected.year ? selected.year : ''}
          />
        </div>
        <div style={{ display: 'block' }}>
          Color:{' '}
          <input
            type='text'
            value={selected && selected.color ? selected.color : ''}
          />
        </div>
        <button type='button'>Save</button>
        <button type='button'>Clear</button>
      </div>
      <div className='table-container'>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>VIN</th>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Color</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: 'center' }}>
            {cars.map((car, index) => {
              return (
                <tr>
                  <td>{car.vin}</td>
                  <td>{car.make}</td>
                  <td>{car.model}</td>
                  <td>{car.year}</td>
                  <td>{car.color}</td>
                  <td>
                    <button type='button'>Edit</button>
                    <button type='button'>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
