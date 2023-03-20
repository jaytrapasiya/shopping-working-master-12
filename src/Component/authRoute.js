
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const AuthRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (

    <Route {...rest} render={(props) => (
        !isAuthenticated.isAuth ? (
            <Component {...props} />
        ) : (
            <Redirect to={"/"} />
        )
    )} />
)


const mapStateToProps = (state) => ({
    isAuthenticated: state.userIsAuth
})
export default connect(mapStateToProps)(AuthRoute)