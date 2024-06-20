import React, { useState } from 'react';
import './Register.css';

export const Register = () => {
    const [fname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');
    const [number, setNumber] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(pass);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='indu'>
                <h2>Register</h2>
                    <label>Name/Username</label>
                    <input
                        value={fname}
                        placeholder='Enter your name'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        value={email}
                        placeholder='Enter your Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type='password'
                        value={pass}
                        placeholder='Enter your password'
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <label>Confirm Password</label>
                    <input
                        type='password'
                        value={cpass}
                        placeholder='Confirm Password'
                        onChange={(e) => setCpass(e.target.value)}
                    />
                    <label>Mobile Number</label>
                    <input
                        value={number}
                        placeholder='Enter your Mobile Number'
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <label>Role</label>
                    <input
                        value={role}
                        placeholder='Select your Role'
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
        </>
    );
};
