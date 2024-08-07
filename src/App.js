// Reacthooks//

// import React, { useReducer } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Reducer, { initialState } from './UseReducer-Crud/Reducer';
// import ReducerForm from './UseReducer-Crud/ReducerForm';
// import { ReducerTable } from './UseReducer-Crud/ReducerTable';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import ReducerEdit from './UseReducer-Crud/ReducerEdit';
// import Spinner from './UseReducer-Crud/Spinner';
// import Header from './Navbar/Navbar';
// import { Home } from './Home/Home';

// function App() {
//   // const [state, dispatch] = useReducer(Reducer, initialState);

//   return (
    
//     <Router>
//      {/* <Header/> */}
//       <Routes>

//         {/* <Route path="/Home" element={<Home dispatch={dispatch} />} /> */}
//         {/* <Route path="/" element={<ReducerForm dispatch={dispatch} />} />
//         <Route path="/ReducerTable" element={<ReducerTable dispatch={dispatch} todos={state.todos} />} />
//         <Route path="/ReducerEdit/:id" element={<ReducerEdit dispatch={dispatch} />} />
//         <Route path='/spinner'element={<Spinner/>} ></Route> */}


//       </Routes>
//     </Router>
//   );
// }

// export default App;





//Authentication//

import React, { useReducer } from 'react';
import { Register } from './Authentication/RegisterPage/Register';
import { Login } from './Authentication/LoginPage/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  {AdminTable} from './Authentication/Table/AdminTable';
import { UserTable } from './Authentication/Table/UserTable';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import "./App.css"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Register />}></Route>
      <Route path='/Login'element={<Login />}></Route>
      <Route path='/Usertable'element={<UserTable />}></Route>
      <Route path='/Admintable'element={< AdminTable />}></Route>
    </Routes>
    </BrowserRouter>
    // <Login/>
  );
}

export default App;