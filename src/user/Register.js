import React from 'react';
import { Formik, Form } from 'formik';
import TextField  from './TextField';
import * as Yup from 'yup';

const Register = () => {
    const validate = Yup.object({
        firstName : Yup.string()
            .max(15,'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(20,'Must be 20 character or less')
            .required('Required'),
        email : Yup.string()
            .email('Email is envalid')
            .required('Email is required'),
        password : Yup.string()
            .min(6, 'Password must be at lest 6 char')
            .required('Password is required'),
        confirmPassword : Yup.string()
            .oneOf([Yup.ref('password'),null],'password must be same')
            .required('Confrim password is required'),    


    })
    return (
        <Formik
            initialValues={
                {
                    firstName : '',
                    lastName : '',
                    email : '',
                    password : '',
                    confirmPassword : ''
                }                
            }
            validationSchema = {validate}
            onSubmit = {values => {
                console.log(values);
            }}
        >

        {formik => (
                <div>
                    <div className='container' mt-3>
                        <div className='row'>
                            <div className='col-md-5'>
                                <h1>Sign Up</h1>
                                <form>
                                    <TextField label="First Name" type="text" />
                                    <TextField label="Last Name" type="text" />
                                    <TextField label="Emai" type="text" />
                                    <TextField label="Password" type="text" />
                                    <TextField label="Confirm Password" type="text" />
                                    <button type='submit'  />
                                    <button type='reset' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        </Formik>
    );
};
export default Register;