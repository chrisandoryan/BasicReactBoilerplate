import "bootstrap/dist/css/bootstrap.min.css";

import { AuthContext, withFirebase } from "../../contexts";
import { Link, useHistory, withRouter } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";

function Main(props) {

  useEffect(() => {

  });

  return (
    <div>
      Welcome to Main!
    </div>
  );
}

export default withRouter(withFirebase(Main));
