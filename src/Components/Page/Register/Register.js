import React from 'react'
import { Formik } from "formik";
import * as yup from "yup"; 


const RegisFormSchema = yup.object().shape({
    username: yup
        .string()
        .required("Required")
        .min(8,"Username too short")
        .max(32,"Username too long"),
    email: yup
        .string()
        .required("Required")
        .email("Invalid Email"),
    password: yup
        .string()
        .required("Required")
        .min(6, "Password too short")
        .max(32, "Username too long"),
});

const initialValues = {
    username: "",
    email: "",
    password: ""
  };

const submitForm = (values) => {
    console.log(values);
  };


function Register () {
    return (
        <div className="wrapper">
            <div className="inner">
                <div className="img-log">
                <img style={{width: '100%'}} src="../IMAGE/Img-log.png" alt="" />
                </div>
                <div className="regForm">
                    <Formik 
                        initialValues={initialValues} 
                        validationSchema = {RegisFormSchema}
                        onSubmit={submitForm}
                    >
                        {(formik) => {
                            const {
                            values,
                            handleChange,
                            handleSubmit,
                            errors,
                            touched,
                            handleBlur
                        } = formik;
                        return (
                            <form onSubmit={handleSubmit}>
                                <h1>REGISTER</h1>
                                <div className="form-holder">
                                    <input
                                        type="text" 
                                        placeholder="Username" 
                                        className="form-control"
                                        name="username" 
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.username && touched.username && <p>{errors.username}</p>}
                                </div>
                                <div className="form-holder">
                                    <input 
                                        type="text" 
                                        placeholder="Email" 
                                        className="form-control"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.username && <p className="error">{errors.email}</p>}
                                </div>
                                <div className="form-holder">
                                    <input 
                                        type="password" 
                                        placeholder="Password" 
                                        className="form-control"
                                        style={{fontSize: '15px'}} 
                                        name="password" 
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.password && touched.username && <p className="error">{errors.password}</p>}
                                </div>
                                <div className="form-login">
                                    <button>REGISTER</button>
                                    <button>LOG IN</button>
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

export default Register

