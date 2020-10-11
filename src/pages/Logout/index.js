import * as ROUTES from '../../constants/routes';

import { AuthContext, withFirebase } from '../../contexts';
import { Link, withRouter } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';

function Logout(props) {
    const { user, setUser } = useContext(AuthContext);

    const auth = props.firebase.auth;

    useEffect(() => {
        auth.signOut().then(() => {
            setUser(null);
            props.history.push(ROUTES.HOME);
        })
        .catch(() => {

        })
    })

    return (
        <React.Fragment>
            <center><h3>Logged out. Redirecting...</h3></center>
        </React.Fragment>
    )
}

// Note: kalo mau pake object firebase.auth dan firebase.firestore
// langsung aja lewat this.props.firebase.auth dan this.props.firebase.db 
export default withRouter(withFirebase(Logout));