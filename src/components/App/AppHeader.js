import React from "react";
import styled from "styled-components";

const Header = styled.div`
  background-color: white;
`;

const H1 = styled.h1`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px 0 10px 10px;
  max-width: 1100px;
  margin: 0 auto;
`;

function AppHeader() {
  return (
    <Header>
      <H1>Weather App</H1>
    </Header>
  );
}

export default AppHeader;
