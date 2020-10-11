import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

import Firebase, { AuthContext, FirebaseContext } from "./contexts";
import { LOGIN, routes } from "./constants/routes";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, withRouter } from "react-router-dom";

import Splash from "./components/Splash";
import { ToastContainer } from "react-toastify";
import User from "./models/user";
import { getUserDocument } from "./services/user";

function App(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const firebase = new Firebase();

  const auth = { user, setUser };

  useEffect(() => {
    firebase.auth.onAuthStateChanged(async (auth_user) => {
      if (auth_user !== null) {
        let doc_user = await getUserDocument(auth_user.uid);

        if (doc_user !== null) {
          doc_user.uid = auth_user.uid;

          let user = new User();
          user.setDocToObject(doc_user);
          setUser(user);
          setLoading(false);
        }
      }
      else {
        //TODO: Redirect to login.
        // props.history.push(LOGIN);
        setLoading(false);
      }
    });
  }, user);

  return (
    loading ? (
      <Splash></Splash>
    ) : (
        <FirebaseContext.Provider value={firebase}>
          <AuthContext.Provider value={auth}>
            <Router>
              <React.Fragment>
                <ToastContainer style={{ fontFamily: "GT-Walsheim" }} />
                {
                  routes.map((route) => (
                    <Route exact path={route.path} component={route.component} />
                  ))
                }
              </React.Fragment>
            </Router>
          </AuthContext.Provider>
        </FirebaseContext.Provider>
    )
  );
}

export default App;
