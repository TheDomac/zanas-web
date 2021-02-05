import { FieldError } from "../graphql/generated/graphql";

const toErrorMap = (errors: FieldError[]) =>
  errors.reduce(
    (prev, error) => ({
      ...prev,
      [error.field]: error.message,
    }),
    {}
  );

export default toErrorMap;
