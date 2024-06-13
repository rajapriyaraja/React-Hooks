import React, { useReducer, useState} from 'react';
import { postodo } from './ReducerAction';

import Reducer from './Reducer';
import { postData } from '../UseState-Crud/MockAPI';
import { useNavigate } from 'react-router-dom';


const ReducerForm = () => {
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
  const [student,dispatch] = useReducer(Reducer);


  const nav = useNavigate();
  const Reset=()=>{
    setTitleOption("")
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const response = await postData({titleOption,name,email,mobile,date,address,state,city,pcode,gender,mstatus,country,employeeid});
        dispatch(postodo(response))
        nav('/ReducerTable');
    }
    catch(error){
console.log(error)
    }
  }
  return (
    <>
      <div className='branding'>
        
        <span>Employee Registration </span>
    
      </div>
      <div className='form-container'>
        
        <form onSubmit={handleSubmit}>
          <h2 className='_qwet'>Register Form</h2>
          <div className='form-group-cx'>
            <div className='error'>
            <select
            className='title'
              value={titleOption}
              onChange={(e) => setTitleOption(e.target.value)}>
              <option value="">Title</option>
              <option value="Mr.">Mr.</option>
              <option value="Miss.">Miss.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
            
            </div>
            <div className='error'>
            <input
            className='ename'
              type="text"
              placeholder=" Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          
            </div>
            <div className='error'>
            <input
              type='text'
              placeholder=' Employee id'
              value={employeeid}
              onChange={(e) => setEmployeeid(e.target.value)}
            />
          
            </div>
            <div className='error'>
            <input
            className='date'
              type='date'
              placeholder='mm-dd-yyyy'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
           
            </div>
          </div>
          <div className='form-grouptw'>
            <div className='error'>
            <input
          className='phone'
              type="tel"
              placeholder="Mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
       
            </div>
            <div className='error'>
            <input
            className='email'
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          
          </div>
          </div>
          <div className='form-grouptw'>
            <div className='error'>
            <select
            className='phone'
              value={gender}
              onChange={(e) => setGender(e.target.value)} >
              <option value=""> Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          
            </div>
            <div className='error'>
            <select
            className='email'
              value={mstatus}
              onChange={(e) => setMstatus(e.target.value)} >
              <option value="">Marital Status</option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
            
            </div>
          </div>
          <div className='form-group-cx'>
            <div className='error'>
            <input
            className='addw'
              type='text'
              placeholder='Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)} 
            />
        
            </div>
          </div>
          <div className='form-grouptw'>
            <div className='error'>
            <input
            className='phone'
              type='text'
              placeholder='State'
              value={state}
              onChange={(e) => setState(e.target.value)} 
            />
           
            </div>
            <div className='error'>
            <select
            className='email'
              value={country}
              onChange={(e) => setCountry(e.target.value)} >
              <option value="">Country</option>
              <option value="india">India</option>
              <option value="others">Others</option>
            </select>
            
            </div>
          </div>
          <div className='form-group footer'>
            <div className='error'>
            <input
            className='phone'
              type='text'
              placeholder='City'
              value={city}
              onChange={(e) => setCity(e.target.value)} 
            />
          
            </div>
            <div className='error'>
            <input
            className='email'
              type='number'
              placeholder='Pin code'
              value={pcode}
              onChange={(e) => setPcode(e.target.value)} 
            />       
             </div>
          </div>
          <div className='we-er'>
          <button type="submit" className='submit'>Submit</button>
          <button type='button'className='reset' onClick={Reset}>Reset</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReducerForm;