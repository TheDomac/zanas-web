import React from "react";
import styled from "styled-components";

import Text from "@kiwicom/orbit-components/lib/Text";

const Container = styled.div`
  background-color: black;
  width: 100px;
  border-radius: 3px;
  transition: background-color 0.5s;
  padding: 15px 0px;
  margin-bottom: 10px;
`;

const StatusRow = ({ title, value }: any) => (
  <Container>
    <Text align="center" type="white" size="small">
      {title}
    </Text>
    <Text align="center" type="white" size="large">
      {value}
    </Text>
  </Container>
);

export default StatusRow;
