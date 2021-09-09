import React from "react";
import styled from "styled-components";
import InfoCard from "./InfoCard";

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: solid 1px;
  text-align: center;
  border-radius: 20px;
  flex: 1;
  min-width: fit-content;
`;

export default function Info(props) {
  return (
    <Div>
      <InfoCard name="High" data={props.data.daily[0].temp.max} />
      <InfoCard
        name="Wind"
        data={(props.data.current.wind_speed * 3.6).toFixed(2)}
      />
      <InfoCard name="Sunrise" data={props.data.daily[0].sunrise} />
      <InfoCard name="Low" data={props.data.daily[0].temp.min} />
      <InfoCard name="Humidity" data={props.data.current.humidity} />
      <InfoCard name="Sunset" data={props.data.daily[0].sunset} />
    </Div>
  );
}
