import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

const InputField = ({
  type,
  onChange,
  value,
  error,
  name,
  label,
  placeholder,
  mb,
}: any) => {
  return (
    <FormControl isInvalid={!!error} mb={mb}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        label={label}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputField;
