import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router";

import { routes } from "../../consts/routes";
import { useLoginMutation } from "../../graphql/generated/graphql";

import InputField from "../../common/components/InputField";
import toErrorMap from "../../utils/toErrorMap";

const Login = () => {
  const [, login] = useLoginMutation();
  const history = useHistory();

  const handleSubmit = async (
    values: { username: string; password: string },
    { setErrors }: any
  ) => {
    const res = await login({
      username: values.username,
      password: values.password,
    });

    if (res.data?.login.errors) {
      setErrors(toErrorMap(res.data.login.errors));
    } else if (res.data?.login.user) {
      history.push(routes.HOME);
    }
  };

  return (
    <div>
      You're on login
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ username: "a", password: "b" }}
      >
        {({ values, handleChange, errors }) => (
          <Form>
            <InputField
              name="username"
              error={errors.username}
              value={values.username}
              onChange={handleChange}
              label="Username"
              placeholder="username"
              mb={5}
            />
            <InputField
              name="password"
              type="password"
              error={errors.password}
              value={values.password}
              onChange={handleChange}
              label="Password"
              placeholder="password"
              mb={5}
            />
            <Button type="submit">Login</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
