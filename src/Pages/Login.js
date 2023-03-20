import React, { useState } from 'react';
import '../iauction.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isUserLogin,isUserLogout } from '../Redux/Action/isAuthAction';





const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isAuth, setIsAuth] = useState({
        username: "",
        password: ""
    })



    const onChangeInputHandler = (event) => {
        setIsAuth({
            ...isAuth,
            [event.target.name]: event.target.value
        })
    }



    const usrIsLogin = () => {
        axios.post("https://fakestoreapi.com/auth/login", isAuth)
            .then((response) => {
                if (response.status === 200) {

                    if (response.data.status === "Error") {
                        localStorage.clear();
                        dispatch(isUserLogout())
                    }
                    else {
                        localStorage.setItem("token", response.data.token)
                         dispatch(isUserLogin())
                         history.replace("/product")
                    }
                }
            }).catch((err) => {
                console.log("Err Log:", err)
            })
    }



    return (
        <div className="login_div">
            <p>Log in</p>
            <div className="login_input">
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="username" placeholder="Enter email"
                        onChange={event => onChangeInputHandler(event)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password"
                        onChange={event => onChangeInputHandler(event)} />
                </div>
            </div>
            <button type="submit" className="btn btn-primary m-2 btn-submit"
                onClick={() => usrIsLogin()}>Log in</button>
        </div>
    )
}

export default Login;
