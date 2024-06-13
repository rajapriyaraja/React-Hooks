import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from "semantic-ui-react";
import { getUserData, putData } from './MockAPI'; 

export const Update = () => {
    const { id } = useParams();
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const nav = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = await getUserData(id);
                setUname(user.uname);
                setEmail(user.email);
                setPassword(user.password);
            } catch (error) {
                console.error("Error in fetching the user data", error);
            }
        };
        fetchUserData();
    }, [id]);
    const updateAPIData = () => {
        putData(id, { 
            uname,
            password,
            email
        }).then(() => {
            nav('/read');
        }).catch((error) => {
            console.error("Error updating data:", error);
        });
    }
    return (
        <>
           
            <Form>
                <div className='mt-3'>
                    <label>Username</label>
                    <input
                    className='mt-2'
                        type='text'
                        placeholder='name'
                        value={uname}
                        onChange={(e) => setUname(e.target.value)} />
                </div>
                <div className='mt-3'>
                    <label>Password</label>
                    <input
                     className='mt-2'
                        type='password'
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div  className='mt-3'>
                    <label>Email</label>
                    <input
                    className='mt-2'
                        type='email'
                        placeholder='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <Button
                    className='mt-4'
                        type='button'
                        onClick={updateAPIData}>Update</Button> 
                </div>
            </Form>
        </>
    )
}