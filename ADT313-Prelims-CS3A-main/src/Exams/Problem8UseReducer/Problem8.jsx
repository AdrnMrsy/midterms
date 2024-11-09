import React, { useReducer, useState } from 'react';
import data from './problem8mock_data.json';

const initialState = {
  foods: data,  // Initialize with mock data
  selected: null,  // Track selected food item for editing
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return {
        ...state,
        foods: [...state.foods, action.payload],  // Add new food item
      };
    case 'EDIT':
      return {
        ...state,
        selected: action.payload,  // Set the selected food item for editing
      };
    case 'UPDATE':
      return {
        ...state,
        foods: state.foods.map((food) =>
          food.food_name === action.payload.food_name
            ? { ...food, ...action.payload }  // Update the specific food item
            : food
        ),
        selected: null,  // Clear the form after update
      };
    case 'DELETE':
      return {
        ...state,
        foods: state.foods.filter((food) => food.food_name !== action.payload),  // Remove the selected food item
        selected: null,  
      };
    case 'CLEAR':
      return {
        ...state,
        selected: null,  
      };
    default:
      return state;
  }
}

export default function Problem8() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (state.selected) {
      dispatch({
        type: 'EDIT',
        payload: { ...state.selected, [name]: value },
      });
    }
  };

  const handleSave = () => {
    if (state.selected.food_name && state.selected.price) {
      if (state.foods.some((food) => food.food_name === state.selected.food_name)) {
        dispatch({ type: 'UPDATE', payload: state.selected });
      } else {
        dispatch({ type: 'CREATE', payload: state.selected });
      }
    }
  };

  const handleRowClick = (food) => {
    dispatch({ type: 'EDIT', payload: food });
  };

  const handleDelete = (foodName) => {
    dispatch({ type: 'DELETE', payload: foodName });
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR' });
  };

  return (
    <>
      <div>
        <div style={{ display: 'block' }}>
          Food Name:{' '}
          <input
            type="text"
            name="food_name"
            value={state.selected ? state.selected.food_name : ''}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ display: 'block' }}>
          Price:{' '}
          <input
            type="text"
            name="price"
            value={state.selected ? state.selected.price : ''}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ display: 'block' }}>
          Expiration Date:{' '}
          <input
            type="text"
            name="expiration_date"
            value={state.selected ? state.selected.expiration_date : ''}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ display: 'block' }}>
          Calories:{' '}
          <input
            type="text"
            name="calories"
            value={state.selected ? state.selected.calories : ''}
            onChange={handleInputChange}
          />
        </div>

        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="table-container">
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Price</th>
              <th>Expiration Date</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: 'center' }}>
            {state.foods.map((food, index) => (
              <tr key={index} onClick={() => handleRowClick(food)}>
                <td>{food.food_name}</td>
                <td>{food.price}</td>
                <td>{food.expiration_date}</td>
                <td>{food.calories}</td>
                <td>
                  <button type="button" onClick={() => handleRowClick(food)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(food.food_name)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
