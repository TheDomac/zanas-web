import React from "react";
import {
  Link,
} from "react-router-dom";
import { routes } from "../../consts/routes";

const Home = () => {
    return (
          <div>
              You're on Home
            <nav>
              <ul>
                <li>
                  <Link to={routes.REGISTER}>Register</Link>
                </li>
              </ul>
            </nav>
          </div>
      )
}

export default Home;
