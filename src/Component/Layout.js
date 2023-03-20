import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Home from '../Pages/Home';
import ProductListing from '../Pages/ProductListing';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Footer from '../Pages/Footer';
import ProductDetails from './ProductDetails';
import Cart from '../Pages/Cart';
import Login from '../Pages/Login';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './authRoute';


const Layout = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Navbar />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute exact path="/product" component={ProductListing}/>
                        <PrivateRoute exact path="/product/:cateName" component={ProductListing}/>
                        <PrivateRoute exact path="/product/details/:productid" component={ProductDetails}/>
                        <PrivateRoute exact path="/cart" component={Cart}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                        <AuthRoute exact path="/login" component={Login} />
                        <Redirect exact to="/" />
                    </Switch>
                </div>
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        </div >
    )
}

export default Layout
