import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router";

import { routes } from "../../consts/routes";
import { useRegisterMutation } from "../../graphql/generated/graphql";

import InputField from "../../common/components/InputField";
import toErrorMap from "../../utils/toErrorMap";

const Register = () => {
  const [, register] = useRegisterMutation();
  const history = useHistory();

  const handleSubmit = async (
    values: { username: string; password: string },
    { setErrors }: any
  ) => {
    const res = await register({
      username: values.username,
      password: values.password,
    });

    if (res.data?.register.errors) {
      setErrors(toErrorMap(res.data.register.errors));
    } else if (res.data?.register.user) {
      history.push(routes.HOME);
    }
  };

  return (
    <div>
      You're on register
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ username: "", password: "" }}
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
            <Button type="submit">Register</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
