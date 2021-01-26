import React from "react";
import {
  Link,
} from "react-router-dom";

import { routes } from "../../consts/routes";

const Register = () => {
    return (
          <div>
              You're on register
            <nav>
              <ul>
                <li>
                <Link to={routes.HOME}>Home</Link>
                </li>
              </ul>
            </nav>
          </div>
      )
}

export default Register;
