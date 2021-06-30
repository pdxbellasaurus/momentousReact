import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import GlobalContext from '../utils/GlobalState';

function ProtectedRoute(props) {
        const Component = props.component;
        const { loggedIn } = useContext(GlobalContext);

        return loggedIn ? (
            <Component />
        ) : (
            <Redirect to='/login' />
        )
    }

export default ProtectedRoute