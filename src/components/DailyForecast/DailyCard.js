import React, { useContext } from "react";
import styled from "styled-components";
import WeatherIcon from "../WeatherIcons/WeatherIcon";
import TimezoneContext from "../../Context/TimeZoneContext";
import UnixToDateTime from "../../Utils/UnixToDateTime";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px;
  text-align: center;
  border-radius: 20px;
  width: 128px;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(WeatherIcon)`
  font-size: 3.3em;
  width: 100%;
  text-align: center;
  margin: 15% auto 10% auto;
  animation: swing 5s infinite;
`;

const P = styled.div`
  margin: 4% auto 4% auto;
  font-weight: 500;
`;

const Data = styled.div`
  margin: 4% auto 4% auto;
  font-size: 20px;
  font-weight: 700;
`;

function DailyCard(props) {
  const timezone = useContext(TimezoneContext);
  return (
    <Div>
      <P>
        {UnixToDateTime(props.data.dt, { weekday: "long", timeZone: timezone })}
      </P>
      <P>
        {UnixToDateTime(props.data.dt, {
          month: "long",
          day: "numeric",
          timeZone: timezone,
        })}
      </P>
      <Icon
        iconId={props.data.weather[0].id}
        iconName={props.data.weather[0].icon}
      />
      <Data className="degree">{props.data.temp.max}</Data>
      <P>{props.data.temp.min}</P>
    </Div>
  );
}

export default DailyCard;
