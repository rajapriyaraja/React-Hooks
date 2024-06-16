import React, { useState } from 'react';
import { postodo } from './ReducerAction';
import { postData } from '../UseState-Crud/MockAPI';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const nav = useNavigate();

  const Reset = () => {
    setTitleOption("");
    setName("");
    setEmail("");
    setMobile("");
    setDate("");
    setAddress("");
    setState("");
    setCity("");
    setPcode("");
    setGender("");
    setMstatus("");
    setCountry("");
    setEmployeeid("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postData({ titleOption, name, email, mobile, date, address, state, city, pcode, gender, mstatus, country, employeeid });
      dispatch(postodo(response));
      nav('/ReducerTable');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mt-4 ">
      <form onSubmit={handleSubmit}>
        <h2>Register Form</h2>
        <div className='d-flex justify-content-center w-100'>
        <div className="form-group  ">
          <select className="form-control" value={titleOption} onChange={(e) => setTitleOption(e.target.value)}>
            <option value="">Title</option>
            <option value="Mr.">Mr.</option>
            <option value="Miss.">Miss.</option>
            <option value="Mrs.">Mrs.</option>
          </select>
          </div>
        <div className="form-group ms-2 w-25">
          <input className="form-control" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
       
        <div className="form-group  ms-2">
          <input className="form-control" type="text" placeholder="Employee id" value={employeeid} onChange={(e) => setEmployeeid(e.target.value)} />
        </div>
        </div>
        <div className='d-flex justify-content-center w-100 mt-4'>
        <div className="form-group ms-2 w-25">
          <input className="form-control" type="date" placeholder="Date of Birth" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-group ms-3 w-25">
          <input className="form-control" type="tel" placeholder="Mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        </div>

        <div className="form-group">
          <input className="form-control" type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <select className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-control" value={mstatus} onChange={(e) => setMstatus(e.target.value)}>
            <option value="">Marital Status</option>
            <option value="married">Married</option>
            <option value="unmarried">Unmarried</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
        </div>
        <div className="form-group">
          <select className="form-control" value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">Country</option>
            <option value="india">India</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="form-group">
          <input className="form-control" type="number" placeholder="Pin code" value={pcode} onChange={(e) => setPcode(e.target.value)} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary mr-2">Submit</button>
          <button type="button" className="btn btn-secondary" onClick={Reset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default ReducerForm;