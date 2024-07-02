

import React, { useEffect, useState } from 'react';
import { GetUserApi } from '../Api/GetUserApi';
import { PutUserApi } from '../Api/PutUserApi';
import { DelUserApi } from '../Api/DelUserApi';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export const UserTable = () => {
    const [user, setUser] = useState(null); // Initialize as null
    const [error, setError] = useState(null);
    const [edit, setEdit] = useState(false);
    const [formValues, setFormValues] = useState({
        userName: '',
        email: '',
        mobileNo: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    async function fetchUser(email, token) {
        try {
            const response = await GetUserApi(email, token);
            const { Authority, Details } = response;
            if (Authority && Authority.length > 0) {
                setUser({
                    ...Details,
                    role: Authority[0].authority
                });
            } else {
                setUser({
                    ...Details,
                    role: 'No Role'
                });
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }

    const handleDelete = async () => {
        try {
            await DelUserApi(user.email, token);
            navigate('/login');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    useEffect(() => {
        fetchUser(email, token);
    }, [email, token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleEdit = () => {
        setFormValues({
            userId: user.userId,
            userName: user.userName,
            email: user.email,
            mobileNo: user.mobileNo,
            userRole: user.userRole,
            status: user.status,
            password: '',
            confirmPassword: ''
        });
        fetchUser(email, token);
        setEdit(true);
    };

    const handleUpdate = async (e) => {
        // e.preventDefault();
        const updatedUser = {
            userId: user.userId,
            userName: formValues.userName,
            email: formValues.email,
            mobileNo: formValues.mobileNo,
            userRole: user.userRole,
            status: user.status,
            password: formValues.password,
            confirmPassword: formValues.confirmPassword
        };

        try {
            const response = await axios.put(
                `http://localhost:8080/api/user/update`,
                updatedUser,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setUser(response.data.Details);
            setEdit(false);
        } catch (err) {
            const defaultError = {
                error: { reason: 'Unknown error occurred' },
                timeStamp: new Date().toISOString(),
            };
            setError(err.response?.data || defaultError);
        }
    };

 

    return (
        <>
            {edit ? (
                <form onSubmit={handleUpdate}>
                    <label>Name</label>
                    <input 
                        name="userName"
                        value={formValues.userName}
                        onChange={handleChange}
                    />
                    <label>Email</label>
                    <input
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    <label>Mobile No</label>
                    <input
                        name="mobileNo"
                        value={formValues.mobileNo}
                        onChange={handleChange}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                    />
                    <button type="submit">Update</button>
                </form>
            ) : (
                <div className="container mt-4 pt-5">
                    <table className="table table-striped table-bordered mt-5">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile No</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user?.userName}</td>
                                <td>{user?.email}</td>
                                <td>{user?.mobileNo}</td>
                                <td>
                                    <button 
                                        className="btn btn-primary mr-2" 
                                        onClick={handleEdit}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className="btn btn-danger" 
                                        onClick={handleDelete}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};
