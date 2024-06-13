import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  ReducerForm  from './UseReducer-Crud/ReducerForm';
import { ReducerTable } from './UseReducer-Crud/ReducerTable';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
      <Route path='/'element={<ReducerForm/>}></Route>
        <Route path='/ReducerTable'element={<ReducerTable/>}></Route>
        {/* <Route path='/user/:id/edit'element={<FormEdit/>}></Route> */}
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;


