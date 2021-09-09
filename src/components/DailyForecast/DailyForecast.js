import React from "react";
import DailyCard from "./DailyCard";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
`;

export default function DailyForecast(props) {
  return (
    <div>
      <h2>5 Day Weather Forecast</h2>
      <Div>
        <DailyCard data={props.daily[1]} />
        <DailyCard data={props.daily[2]} />
        <DailyCard data={props.daily[3]} />
        <DailyCard data={props.daily[4]} />
        <DailyCard data={props.daily[5]} />
        <DailyCard data={props.daily[6]} />
        <DailyCard data={props.daily[7]} />
      </Div>
    </div>
  );
}
