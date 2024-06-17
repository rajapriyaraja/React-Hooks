import React, { useReducer, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Reducer from './Reducer';
import { getData, onDelete } from '../MockApi/MockApi';
import { fetchtodo, deletetodo } from './ReducerAction';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ReducerTable = () => {
  const initialState = { todos: [] };
  const [state, dispatch] = useReducer(Reducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await getData();
        dispatch(fetchtodo(response));
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  }, []);

  const { todos } = state;

  const handleDelete = async (id) => {
    try {
      await onDelete(id);
      dispatch(deletetodo(id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/ReducerEdit/${id}`);
  };

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h2>Todos List</h2>
        <Link to="/" className="btn btn-primary">Back</Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Name</th>
              <th>Employee Id</th>
              <th>Date of Birth</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Marital Status</th>
              <th>Address</th>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
              <th>Pin code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.titleOption}</td>
                <td>{todo.name}</td>
                <td>{todo.employeeid}</td>
                <td>{todo.date}</td>
                <td>{todo.mobile}</td>
                <td>{todo.email}</td>
                <td>{todo.gender}</td>
                <td>{todo.mstatus}</td>
                <td>{todo.address}</td>
                <td>{todo.country}</td>
                <td>{todo.state}</td>
                <td>{todo.city}</td>
                <td>{todo.pcode}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(todo.id)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(todo.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
