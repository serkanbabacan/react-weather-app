import React from "react";
import styled from "styled-components";
import HourlyCard from "./HourlyCard";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  align-items: center;
  @media only screen and (min-width: 200px) and (max-width: 600px) {
    gap: 5px;
  } ;
`;

export default function HourlyForecast(props) {
  return (
    <div>
      <h2>Hourly Weather Forecast</h2>
      <Div>
        <HourlyCard data={props.hourly[1]} />
        <HourlyCard data={props.hourly[2]} />
        <HourlyCard data={props.hourly[3]} />
        <HourlyCard data={props.hourly[4]} />
        <HourlyCard data={props.hourly[5]} />
        <HourlyCard data={props.hourly[6]} />
        <HourlyCard data={props.hourly[7]} />
        <HourlyCard data={props.hourly[8]} />
        <HourlyCard data={props.hourly[9]} />
      </Div>
    </div>
  );
}
