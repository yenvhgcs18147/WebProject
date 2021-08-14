import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from '../Page/Home/Home'
import Login from '../Page/Log in/Login'
import Register from '../Page/Register/Register'
import ListProduct from '../Page/List Product/ListProduct'
import EnterEmail from '../Page/Forget password/EnterEmail'



const App = () => {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component = {Home}></Route>
                <Route path="/Login" component = {Login}></Route>
                <Route path="/Regiter" component = {Register}></Route>
                <Route path="/EnterEmail" component = {EnterEmail}></Route>
                <Route path="/ListProduct" component = {ListProduct}></Route>

            </div>
        </Router>
    )
}

export default App
