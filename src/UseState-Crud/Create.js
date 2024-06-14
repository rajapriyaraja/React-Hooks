import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from "semantic-ui-react";
import { RotatingLines } from 'react-loader-spinner';
import 'semantic-ui-css/semantic.min.css';
import { postData, getData } from './MockAPI';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Create.css';

export const Create = () => {
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        fetchData();
    }, []); 

    const fetchData = async () => {
        try {
            const data = await getData();
            console.log("Fetched Data:", data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const validationSchema = Yup.object({
        uname: Yup.string().required('name is required'),
        password: Yup.string().required('password is required'),
        email: Yup.string().email('email must be valid').required('email  required'),
    });
    const formik = useFormik({
        initialValues: {
            uname: '',
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                await postData(values);
                nav('/Read');
                resetForm();
            } catch (error) {
                console.error('Error posting data:', error);
            } finally {
                setLoading(false);
            }
        }
    });
    return (
        <>
            <div className="form-container">
                
                {loading && (
                    <div className="loader-container">
                        <RotatingLines
                            visible={true}
                            height="96"
                            width="96"
                            color="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                        />
                    </div>
                )}
                <Form className="create-form" onSubmit={formik.handleSubmit}>
                    <Form.Field>
                    <label className='mt-3'>Username</label>  
                        <input
                        className='input'
                            type='text'
                            placeholder='name'
                            name='uname'
                            value={formik.values.uname}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange} />
                        {formik.touched.uname && formik.errors.uname ? (
                            <div className='text-danger'>{formik.errors.uname}</div>
                        ) : null}
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input
                        className='input'
                            type='password'
                            placeholder='password'
                            name='password'
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange} />
                        {formik.touched.password && formik.errors.password ? (
                            <div className='text-danger'>{formik.errors.password}</div>
                        ) : null}
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input
                        className='input'   
                            type='email'
                            placeholder='email'
                            name="email"
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange} />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='text-danger'>{formik.errors.email}</div>
                        ) : null}
                    </Form.Field>
                    <Form.Field>
                        <Button 
                        type='submit'>Submit</Button>
                    </Form.Field>
                </Form>
            </div>
        </>
    );
};