import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const P = styled.div`
  font-style: italic;
  text-align: center;
`;

const Wrapper = styled.div`
  margin-top: 50px;
  padding-bottom: 10px;
  background-color: #f7f8f9;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
`;

function AppFooter() {
  return (
    <Wrapper>
      <P>
        Made by Serkan Babacan. Check out at
        <A href="#">
          {" "}
          <AiFillGithub />
        </A>
      </P>
    </Wrapper>
  );
}

export default AppFooter;
