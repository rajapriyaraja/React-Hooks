import React, { useState } from 'react';
import { postodo } from './ReducerAction';
import { postData } from '../UseState-Crud/MockAPI';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from './Spinner';
import {Header} from '../Navbar/Navbar';
// import Spinner from './UseReducer-Crud/Spinner';

const ReducerForm = ({ dispatch }) => {
  const [titleOption, setTitleOption] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pcode, setPcode] = useState('');
  const [gender, setGender] = useState('');
  const [mstatus, setMstatus] = useState('');
  const [country, setCountry] = useState('');
  const [employeeid, setEmployeeid] = useState('');
  const [loading, setLoading] = useState(false);
  const[errors,setErrors]=useState({});

  const nav = useNavigate();

  const Reset = () => {
    setTitleOption('');
    setName('');
    setEmail('');
    setMobile('');
    setDate('');
    setAddress('');
    setState('');
    setCity('');
    setPcode('');
    setGender('');
    setMstatus('');
    setCountry('');
    setEmployeeid('');
  };

    const validateInputs = () => {
    const errors = {};

    if (!titleOption) errors.titleOption = 'Title is required';
    if (!name) errors.name = 'Name is required';
    if (!employeeid) errors.employeeid = 'Employee ID is required';
    if (!date) errors.date = 'Date of Birth is required';
    if (!mobile) errors.mobile = 'Mobile Number is required';
    else if (!/^\d{10}$/.test(mobile)) errors.mobile = 'Mobile Number should be 10 digits';
    if (!email) errors.email = 'Email Address is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email Address is invalid';
    if (!gender) errors.gender = 'Gender is required';
    if (!mstatus) errors.mstatus = 'Marital Status is required';
    if (!address) errors.address = 'Address is required';
    if (!state) errors.state = 'State is required';
    if (!city) errors.city = 'City is required';
    if (!country) errors.country = 'Country is required';
    if (!pcode) errors.pcode = 'Pin Code is required';
    else if (!/^\d{6}$/.test(pcode)) errors.pcode = 'Pin Code should be 6 digits';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

 

    try {
      setLoading(true);
      const response = await postData({ titleOption, name, email, mobile, date, address, state, city, pcode, gender, mstatus, country, employeeid });
      dispatch(postodo(response));
      nav('/ReducerTable');
      
    } catch (error) {
      console.log(error);
      setLoading(true);
    } finally {
      setLoading(true);
    }
  };
  return ( 
    <div className="container mt-5 shadow p-3 mb-5 bg-grey rounded w-50 pb-5 rounded">
      {loading && <Spinner />}
      <form onSubmit={handleSubmit}>
        <div className="text-center pt-4 mb-5">
          <h2>Register Form</h2>
        </div>
        <div className="row mb-3">
          <div className="col-2"> 
            <select className="form-control" value={titleOption} onChange={(e) => setTitleOption(e.target.value)}>
              <option value="">Title</option>
              <option value="Mr.">Mr.</option>
              <option value="Miss.">Miss.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
            {errors.titleOption && <p className="text-danger">{errors.titleOption}</p>}
          </div>
          <div className="col">
            <input className="form-control" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            {errors.name && <p className="text-danger">{errors.name}</p>}
          </div>
          <div className="col">
            <input className="form-control" type="text" placeholder="Employee ID" value={employeeid} onChange={(e) => setEmployeeid(e.target.value)} />
            {errors.employeeid && <p className="text-danger">{errors.employeeid}</p>}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input className="form-control" type="date" placeholder="Date of Birth" value={date} onChange={(e) => setDate(e.target.value)} />
            {errors.date && <p className="text-danger">{errors.date}</p>}
          </div>
          <div className="col">
            <input className="form-control" type="tel" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input className="form-control" type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div className="col">
            <select className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-danger">{errors.gender}</p>}
          </div>
          <div className="col">
            <select className="form-control" value={mstatus} onChange={(e) => setMstatus(e.target.value)}>
              <option value="">Marital Status</option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
            {errors.mstatus && <p className="text-danger">{errors.mstatus}</p>}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input className="form-control" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            {errors.address && <p className="ttext-danger">{errors.address}</p>}
          </div>
          <div className="col">
            <input className="form-control" type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
            {errors.state && <p className="text-danger">{errors.state}</p>}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input className="form-control" type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            {errors.city && <p className="text-danger">{errors.city}</p>}
          </div>
          <div className="col">
            <select className="form-control" value={country} onChange={(e) => setCountry(e.target.value)}>
              <option value="">Country</option>
              <option value="india">India</option>
              <option value="others">Others</option>
            </select>
            {errors.country && <p className="text-danger">{errors.country}</p>}
          </div>
          <div className="col">
            <input className="form-control" type="number" placeholder="Pin Code" value={pcode} onChange={(e) => setPcode(e.target.value)} />
            {errors.pcode && <p className="text-danger">{errors.pcode}</p>}  
          </div>
        </div>
        <div className="text-center mt-5">
          <button type="submit" className="btn btn-primary me-3">Submit</button>
          <button type="button" className="btn btn-secondary" onClick={Reset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default ReducerForm;
