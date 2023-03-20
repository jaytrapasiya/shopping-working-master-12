import React from 'react';
import logo from '../Images/logo.jpg';
import '../iauction.css';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import {isUserLogout} from '../Redux/Action/isAuthAction';



const Navbar = () => {
    const cartLength = useSelector((state) => state.allCartItems)
    const logInAuth = useSelector((state) => state.userIsAuth)
    const dispatch = useDispatch();




    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <NavLink exact to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img src={logo} alt="Logo" className="bi me-2" width="70 px" height="45 px" /><span className="title">Arrow</span>
                </NavLink>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><NavLink exact to="/" activeClassName="activenav" className="nav-link px-2 link-dark">Home</NavLink></li>
                    <li><NavLink exact to="/product" activeClassName="activenav" className="nav-link px-2 link-dark">Product</NavLink></li>
                    <li><NavLink exact to="/about" activeClassName="activenav" className="nav-link px-2 link-dark">About</NavLink></li>
                    <li><NavLink exact to="/contact" activeClassName="activenav" className="nav-link px-2 link-dark">Contact</NavLink></li>
                </ul>
                <div className="col-md-3 text-end">
                    {logInAuth.isAuth ?
                      <Link to ="/">  <button className="btn btn-outline-primary mx-2" onClick={()=>dispatch(isUserLogout())}>Log out</button></Link>
                        :
                        <NavLink exact to="/login" type="button" className="btn btn-outline-primary mx-2">Log in</NavLink>
                    }
                    <NavLink exact to="/cart" type="button" className="btn btn-outline-danger">{cartLength.cartItems.length} </NavLink>
                </div>
            </header>
        </div>
    )
}

export default Navbar;
