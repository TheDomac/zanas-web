import React from "react";
import { HStack, Link as TextLink } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { routes } from "../../consts/routes";
import { useMeQuery } from "../../graphql/generated/graphql";

const Navigation = () => {
  const [{ data, fetching }] = useMeQuery();

  const handleLogOutClick = () => {};

  return (
    <HStack background="tomato" padding={4} justify="end">
      {fetching && "Loading..."}
      {!fetching && !data?.me && (
        <>
          <Link to={routes.HOME}>Home</Link>
          <Link to={routes.REGISTER}>Register</Link>
          <Link to={routes.LOGIN}>Login</Link>
        </>
      )}
      {!fetching && data?.me && (
        <>
          <div>{data.me.username}</div>
          <Link to={routes.HOME}>Home</Link>
          <TextLink onClick={handleLogOutClick}>Log out</TextLink>
        </>
      )}
    </HStack>
  );
};

export default Navigation;
