import styled from "styled-components";
import React from "react";

const TTDiv = styled.div`
  color: black;
  visibility: visible;
`;

const MainData = styled.div`
  font-size: 20px;
  line-height: 1.5;
  font-weight: bold;
  color: rgb(40, 13, 95);
`;
const MainDate = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
`;

export default function CustomTooltip(props) {
  if (props.active && props.payload && props.payload.length) {
    return (
      <TTDiv>
        <div>{props.name} </div>
        <MainData>
          {props.payload[0].value} {props.unit}
        </MainData>
        <MainDate>{props.payload[0].payload.dateFull}</MainDate>
      </TTDiv>
    );
  } else {
    return (
      <TTDiv>
        <MainDate>{props.name}</MainDate>
        <MainData>
          {props.default.data} {props.unit}
        </MainData>
        <MainDate>{props.default.dateFull}</MainDate>
      </TTDiv>
    );
  }
}
