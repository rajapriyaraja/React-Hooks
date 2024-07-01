import React, { useEffect, useState } from 'react';
import { GetUserApi } from '../Api/GetUserApi';
import { PutUserApi } from '../Api/PutUserApi';
import { DelUserApi } from '../Api/DelUserApi';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const UserTable = () => {
    const [user, setUser] = useState({
        password: '',
        confirmPassword: ''
    });
     
    const navigate = useNavigate();
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    async function fetchUser(payload, token) {
        try {
            const response = await GetUserApi(payload, token);
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

    const handleDelete = () => {
        DelUserApi(user.email, token);
        navigate('/login');
    };

    useEffect(() => {
        fetchUser(email, token);

    }, []);

    console.log(user);

    return (
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
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>{user.mobileNo}</td>
                        <td>
                            <button className="btn btn-primary mr-2">Edit</button>
                            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

