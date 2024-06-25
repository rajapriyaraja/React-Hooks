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
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <Register/>
    // <Login/>
  );
}

export default App;