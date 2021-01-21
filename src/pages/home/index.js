import "bootstrap/dist/css/bootstrap.min.css";

import { AuthContext, withFirebase } from "../../contexts";
import { Link, useHistory, withRouter } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";

function Home(props) {

  useEffect(() => {

  });

  return (
    <div>
      Welcome to Home!
    </div>
  );
}

export default withRouter(withFirebase(Home));
