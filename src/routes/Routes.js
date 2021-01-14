import React from 'react';
import { Route } from 'react-router-dom';
import Auth from '../views/Auth/Auth';
import Todo from '../views/Todo/Todo';
import PrivateRoutes from './PrivateRoutes';

const Routes = () => {
    return (
        <React.Fragment>
            <Route exact path="/" component={Auth} />
            <PrivateRoutes exact path="/todo" component={Todo} />
        </React.Fragment>
    )
}

export default Routes;