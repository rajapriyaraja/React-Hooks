import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, Grid } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'; 
import { userRegisterMethod } from '../Api/RegisterApi';

export const Register = () => {
    const validationSchema = Yup.object({
        userName: Yup.string().required('Name is required'),
        email: Yup.string().email('Email must be valid').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
        mobileNo: Yup.string().required('Mobile is required'),
        userRole: Yup.string().required('Role must be valid')
    });

    const nav = useNavigate();
    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            mobileNo: '',
            userRole: ''
        },
        validationSchema,

        onSubmit: async (values) => { 
           const response = await userRegisterMethod(values);  
           console.log(response);

            nav('/Login'); 
        }
    });

    return (
        <div className="container mt-5">
            <Grid centered>
                <Grid.Column width={6}>
                    <Form onSubmit={formik.handleSubmit}>
                        <h1>Register Form</h1>
                        <Form.Field>
                            <label className='fs-5 mb-2'>Username</label>
                            <input
                                type="text"
                                placeholder="name"
                                name="userName"
                                autoComplete='name' 
                                required
                                value={formik.values.userName}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} 
                            />
                            {formik.touched.userName && formik.errors.userName ? (
                                <div className="text-danger">{formik.errors.userName}</div>
                            ) : null}
                        </Form.Field>
                        <Form.Field>
                            <label className='fs-5 mb-2'>Email</label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} 
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-danger">{formik.errors.email}</div>
                            ) : null}
                        </Form.Field>
                        <Form.Field>
                            <label className='fs-5 mb-2'>Password</label>
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} 
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-danger">{formik.errors.password}</div>
                            ) : null}
                        </Form.Field>
                        <Form.Field>
                            <label className='fs-5 mb-2'>Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={formik.values.confirmPassword}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} 
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <div className="text-danger">{formik.errors.confirmPassword}</div>
                            ) : null}
                        </Form.Field>
                        <Form.Field>
                            <label className='fs-5 mb-2'>Mobile</label>
                            <input
                                type="text"
                                placeholder="Enter mobile number"
                                name="mobileNo"
                                value={formik.values.mobileNo}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} 
                            />
                            {formik.touched.mobileNo && formik.errors.mobileNo ? (
                                <div className="text-danger">{formik.errors.mobileNo}</div>
                            ) : null}
                        </Form.Field>
                        <Form.Field>
                            <label className='fs-5 mb-2'>Role</label>
                            <select
                                name="userRole"
                                value={formik.values.userRole}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            >
                                <option value="" label="Select role" />
                                <option value="ADMIN" label="Admin" />
                                <option value="USER" label="User" />
                            </select>
                            {formik.touched.userRole && formik.errors.userRole ? (
                                <div className="text-danger">{formik.errors.userRole}</div>
                            ) : null}
                        </Form.Field>
                        <Button type="submit" primary>Submit</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    );
};
