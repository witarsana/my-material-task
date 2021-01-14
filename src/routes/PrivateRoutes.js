import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = ({ component: Component, ...res }) => {
    const { isAuthenticated } = useSelector(state => state.auth);
    return (
        <Route
            {...res}
            render={
                props => isAuthenticated ?
                    (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/" />
                    )
            }
        />


    )
}

export default PrivateRoutes;