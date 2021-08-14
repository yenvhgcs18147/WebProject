import React from 'react'
import { Formik } from "formik";
import * as yup from "yup"; 
import { Link } from "react-router";

const LogFormSchema = yup.object().shape({
    username: yup
        .string()
        .required("Required"),
    password: yup
        .string()
        .required("Required")
 })

 const initialValues = {
    username: "",
    password: ""
  };

const SubmitForm = (values) => {
    console.log(values);
  };

const Login = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="inner">
                    <div className="img-log">
                    <img style={{width: '100%'}} src="../IMAGE/Img-log.png" alt="" />
                    </div>
                    <Formik
                        initialValues = {initialValues}
                        validationSchema = {LogFormSchema}
                        values = {SubmitForm}
                    >
                        {(formik) => {
                            const { 
                                errors, 
                                touched, 
                                handleBlur,
                                handleChange,
                                handleSubmit,
                                values } = formik;
                            return (
                                <form onSubmit={handleSubmit}>
                                    <h1>LOG IN</h1>
                                    <div className="form-holder">
                                        <input 
                                            type="text" 
                                            placeholder="Username" 
                                            className="form-control" 
                                            name="username" 
                                            Value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                         {errors.username && touched.username && <p>{errors.username}</p>}
                                    </div>
                                    <div className="form-holder">
                                        <input 
                                            type="password" 
                                            placeholder="Password" 
                                            className="form-control" 
                                            style={{fontSize: '15px'}} 
                                            name="password" 
                                            Value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.password && touched.username && <p>{errors.password}</p>}
                                    </div>
                                    <div className="Text">
                                        <p><a href="#">Forgot password?</a></p>
                                    </div>
                                    <div className="form-login">
                                        <button type ="submit">LOG IN</button>
                                        <button>REGISTER</button>
                                    </div>
                                </form>
                            )
                            }}
                    </Formik>
                </div>     
            </div>
        </div>
    )
}

export default Login
