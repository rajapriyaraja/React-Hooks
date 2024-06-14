import { CREATE_TODO, UPDATE_TODO, FETCH_TODO, FETCH_ID_TODO, DELETE_TODO } from './ReducerType';
export const postodo = (data) => ({
  type: CREATE_TODO,
  payload: data,
});

export const fetchtodo = (data) => ({
  type: FETCH_TODO,
  payload: data,
});

export const fetchIdtodo = (data) => ({
  type: FETCH_ID_TODO,
  payload: data,
});

export const updatetodo = (data) => ({
  type: UPDATE_TODO,
  payload: data,
});

export const deletetodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
