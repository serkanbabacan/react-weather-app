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
  width: 110px;
  @media only screen and (min-width: 200px) and (max-width: 600px) {
    width: 100px;
  } ;
`;

const Icon = styled(WeatherIcon)`
  font-size: 3.3em;
  width: 100%;
  text-align: center;
  margin: 20% auto 20% auto;
  animation: swing 5s infinite;
`;

const Data = styled.div`
  margin: 0 auto 10% auto;
  font-size: 20px;
  font-weight: 700;
`;

const P = styled.div`
  margin: 10% auto 0 auto;
  font-weight: 500;
`;

function HourlyCard(props) {
  const timezone = useContext(TimezoneContext);

  return (
    <Div>
      <P>
        {UnixToDateTime(props.data.dt, {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: timezone,
          hour12: false,
        })}
      </P>
      <Icon
        iconId={props.data.weather[0].id}
        iconName={props.data.weather[0].icon}
      />
      <Data>{props.data.temp}</Data>
    </Div>
  );
}

export default HourlyCard;
