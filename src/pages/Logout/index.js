import * as ROUTES from '../../constants/routes';

import { Link, withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { withFirebase } from '../../contexts';

function Logout(props) {
    const auth = props.firebase.auth;

    useEffect(() => {
        auth.signOut().then(() => {
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