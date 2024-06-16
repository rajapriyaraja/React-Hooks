import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postodo } from './ReducerAction';
import { getUserData, putData } from '../UseState-Crud/MockAPI';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReducerEdit = ({ dispatch }) => {
  const { id } = useParams(); // Get the ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    titleOption: '',
    name: '',
    email: '',
    mobile: '',
    date: '',
    address: '',
    state: '',
    city: '',
    pcode: '',
    gender: '',
    mstatus: '',
    country: '',
    employeeid: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserData(id); // Adjust the function to get data by ID
        setFormData(response); // Populate form fields with fetched data
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await putData(id, formData); // Use putData to update existing data
      dispatch(postodo(response)); // Dispatch action with response data
      navigate('/ReducerTable'); // Navigate back to the table view
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = () => {
    setFormData({
      titleOption: '',
      name: '',
      email: '',
      mobile: '',
      date: '',
      address: '',
      state: '',
      city: '',
      pcode: '',
      gender: '',
      mstatus: '',
      country: '',
      employeeid: '',
    });
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <h2>Edit Form</h2>
        <div className="form-group">
          <select
            className="form-control"
            name="titleOption"
            value={formData.titleOption}
            onChange={handleChange}
          >
            <option value="">Title</option>
            <option value="Mr.">Mr.</option>
            <option value="Miss.">Miss.</option>
            <option value="Mrs.">Mrs.</option>
          </select>
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Employee id" name="employeeid" value={formData.employeeid} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input className="form-control" type="date" placeholder="Date of Birth" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input className="form-control" type="tel" placeholder="Mobile number" name="mobile" value={formData.mobile} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input className="form-control" type="email" placeholder="Email address" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <select className="form-control" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-control" name="mstatus" value={formData.mstatus} onChange={handleChange}>
            <option value="">Marital Status</option>
            <option value="married">Married</option>
            <option value="unmarried">Unmarried</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Address" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="State" name="state" value={formData.state} onChange={handleChange} />
        </div>
        <div className="form-group">
          <select className="form-control" name="country" value={formData.country} onChange={handleChange}>
            <option value="">Country</option>
            <option value="india">India</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="City" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input className="form-control" type="number" placeholder="Pin code" name="pcode" value={formData.pcode} onChange={handleChange} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary mr-2">
            Submit
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReducerEdit;

