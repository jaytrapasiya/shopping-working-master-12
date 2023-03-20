import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (

    <Route {...rest} render={(props) => (
        isAuthenticated.isAuth ? (
            <Component {...props} />
        ) : (
            <Redirect to={"/login"} />
        )
    )} />
)


const mapStateToProps = (state) => ({
    isAuthenticated: state.userIsAuth
})
export default connect(mapStateToProps)(PrivateRoute)
