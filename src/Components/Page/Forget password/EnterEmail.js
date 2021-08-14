import React from 'react'
import Login from '../Log in/Login'
import {  Link } from "react-router-dom";

const EnterEmail = () => {
    return (
        <div className="wrapper1">
            <div className="inner1">
                <div className="FormPass">
                    <h1>FORGET PASSWORD</h1>
                    <p>Please enter your email and we sent link to reset password</p>
                    <div className="form-holder">
                        <input className="form-control" type="email" name="email" placeholder="Email"/>
                    </div>
                    <div className="Text">
                        <p><Link to="/" component={Login} />Return Login</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterEmail
