import React from 'react';

const AuthContext = React.createContext({
    user: null,
    setUser: () => {}
});

export const withAuth = Component => props => (
    <AuthContext.Consumer>
        {user => <Component {...props} user={user} />}
    </AuthContext.Consumer>
);

export default AuthContext;