import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { userRegisterMethod } from '../Api/RegisterApi';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import Swal from 'sweetalert2';


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
            Swal.fire({
                title: 'Success!',
                text: ' Successfully Created!',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            nav('/Login');
        }
    });

    return (
        <div className="container d-flex justify-content-center mt-5 rounded ">
            <div className=" p-5 w-100 ">
                <h2 className="text-center">Register Form</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group mt-4">
                        <input
                            type="text"
                            className="form-control rounded-9"
                            placeholder="Name"
                            name="userName"
                            autoComplete="name"
                            required
                            value={formik.values.userName}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.userName && formik.errors.userName ? (
                            <div className="text-danger">{formik.errors.userName}</div>
                        ) : null}
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="email"
                            className="form-control rounded-9"
                            placeholder="Email"
                            name="email"
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-danger">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="password"
                            className="form-control rounded-9"
                            placeholder="Password"
                            name="password"
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-danger">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="password"
                            className="form-control rounded-9"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={formik.values.confirmPassword}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <div className="text-danger">{formik.errors.confirmPassword}</div>
                        ) : null}
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="text"
                            className="form-control rounded-9"
                            placeholder="Mobile Number"
                            name="mobileNo"
                            value={formik.values.mobileNo}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.mobileNo && formik.errors.mobileNo ? (
                            <div className="text-danger">{formik.errors.mobileNo}</div>
                        ) : null}
                    </div>
                    <div className="form-group mt-3">
                        <select
                            className="form-select rounded-9"
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
                    </div>
                    <div className="d-grid mt-3">
                        <button type="submit" className="btn btn-dark">Submit</button>
                        {/* <Button variant="contained" color="primary">
         
  Submit
</Button> */}

                    </div>
                    <div className="mt-2 text-center">
                        <p>If you have an account please <a href="/Login">Log In</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};
