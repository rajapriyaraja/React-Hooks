import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; // Ensure this import is present to apply Semantic UI CSS

export const Register = () => {
    const validationSchema = Yup.object({
        uname: Yup.string().required('Name is required'),
        password: Yup.string().required('Password is required'),
        email: Yup.string().email('Email must be valid').required('Email is required'),
        cpassword: Yup.string().required('Confirm password is required'),
        mobile: Yup.string().required('Mobile is required'),
        role: Yup.string().required('Role must be valid')
    });

    const formik = useFormik({
        initialValues: {
            uname: '',
            email: '',
            password: '',
            cpassword: '',
            mobile: '',
            role: ''
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            resetForm();
        }
    });

    return (
        <div className="container mt-5">
            <Grid centered>
                <Grid.Column width={6}>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Field>
                            <label className='fs-5 mb-2'>Username</label>
                            <input
                                type="text"
                                placeholder="name"
                                name="uname"
                                autoComplete='name'required
                                value={formik.values.uname}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} />
                            {formik.touched.uname && formik.errors.uname ? (
                                <div className="text-danger">{formik.errors.uname}</div>
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
                                onChange={formik.handleChange} />
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
                                onChange={formik.handleChange} />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-danger">{formik.errors.password}</div>
                            ) : null}
                        </Form.Field>
                        <Form.Field>
                            <label className='fs-5 mb-2'>Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="cpassword"
                                value={formik.values.cpassword}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} />
                            {formik.touched.cpassword && formik.errors.cpassword ? (
                                <div className="text-danger">{formik.errors.cpassword}</div>
                            ) : null}
                        </Form.Field>
                        <Form.Field>
                            <label className='fs-5 mb-2'>Mobile</label>
                            <input
                                type="text"
                                placeholder="Enter mobile number"
                                name="mobile"
                                value={formik.values.mobile}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} />
                            {formik.touched.mobile && formik.errors.mobile ? (
                                <div className="text-danger">{formik.errors.mobile}</div>
                            ) : null}
                        </Form.Field>
                        <Form.Field>
                            <label className='fs-5 mb-2'>Role</label>
                            <input
                                type="text"
                                placeholder="Enter role"
                                name="role"
                                value={formik.values.role}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} />
                            {formik.touched.role && formik.errors.role ? (
                                <div className="text-danger">{formik.errors.role}</div>
                            ) : null}
                        </Form.Field>
                        <Button type="submit" primary>Submit</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    );
};
