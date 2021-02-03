import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { Input, Button } from "@chakra-ui/react";

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
      <Formik
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={{ username: "a", password: "b" }}
      >
        {({ values, handleChange }) => (
          <Form>
            <Input
              value={values.username}
              onChange={handleChange}
              name="username"
            />
            <Input
              type="password"
              value={values.password}
              onChange={handleChange}
              name="password"
            />
            <Button type="submit">Register</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
