import React from 'react'
import { Formik, Form } from 'formik'
import { TextField } from './TextField'
import * as Yup from 'yup'

export const Signup = () => {
 const validate = Yup.object({
  firstName: Yup.string()
   .max(5, 'Must be 5 characters or less')
   .required('Required'),
  lastName: Yup.string()
   .max(5, 'Must be 5 characters or less')
   .required('Required'),
  email: Yup.string()
   .email('Email is invalid')
   .required('Email is Required'),
  password: Yup.string()
   .max(5, 'Password Must be 5 characters or less')
   .required('Password is Required'),
  confirmPassword: Yup.string()
   .oneOf([Yup.ref('password'), null], 'Password must match')
   .required('Comfirm Password is Required'),
 })

 return (
  <Formik
   initialValues={{
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    comfirmPassword: ''
   }}
   validationSchema={validate}
   onSubmit={values=>{
    console.log(values)
   }}
  >
   {
    formik => (
     <div>
      <h1 className="my-4 font-weight-bold-display-4">Sign up</h1>
      <Form>
       <TextField label="First Name" name="firstName" type="text" />
       <TextField label="Last Name" name="lastName" type="text" />
       <TextField label="Email" name="email" type="email" />
       <TextField label="Password" name="password" type="password" />
       <TextField label="Confirm Password" name="comfirmpassword" type="password" />
       <button className="btn btn-dark mt-3" type="submit">Register</button>
       <button className="btn btn-danger mt-3 ml-5" type="reset">Reset</button>
      </Form>
     </div>
    )
   }
  </Formik>
 )
}
