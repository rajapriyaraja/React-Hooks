import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reducer, { initialState } from './UseReducer-Crud/Reducer';
import ReducerForm from './UseReducer-Crud/ReducerForm';
import { ReducerTable } from './UseReducer-Crud/ReducerTable';
import './App.css';
import ReducerEdit from './UseReducer-Crud/ReducerEdit';

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReducerForm dispatch={dispatch} />} />
        <Route path="/ReducerTable" element={<ReducerTable dispatch={dispatch} todos={state.todos} />} />
        <Route path="/ReducerEdit/:id" element={<ReducerEdit dispatch={dispatch} />} />
      </Routes>
    </Router>
  );
}

export default App;
