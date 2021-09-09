import React from "react";
import { makeUpperCase } from "../../Utils/API";
import styled from "styled-components";
import WeatherIcon from "../WeatherIcons/WeatherIcon";
import Info from "../Info";

const Weathetoday = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin: 0 auto;
`;

const MainWeather = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: solid 1px;
  text-align: center;
  border-radius: 20px;
  justify-items: center;
  align-items: center;
  flex: 1;
  min-width: fit-content;
`;

const Icon = styled(WeatherIcon)`
  font-size: 6.6em;
  text-align: center;
  margin: 10% auto 10% auto;
  padding-top: 15px;
  padding-bottom: 15px;
  animation: swing 5s infinite;
  @media only screen and (min-width: 375px) and (max-width: 600px) {
    font-size: 6em;
  }
  @media only screen and (min-width: 200px) and (max-width: 374px) {
    font-size: 5em;
  }
`;

const TempDesc = styled.div`
  display: grid;
  text-align: left;
  grid-template-rows: 1fr 1fr;
  justify-self: left;
`;

const Degree = styled.p`
  font-size: 2.6em;
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: flex-end;
  @media only screen and (min-width: 375px) and (max-width: 600px) {
    font-size: 2.3em;
  }
  @media only screen and (min-width: 200px) and (max-width: 374px) {
    font-size: 2em;
  }
`;

function WeatherToday(props) {
  return (
    <Weathetoday>
      <MainWeather>
        <Icon
          iconId={props.forecast.current.weather[0].id}
          iconName={props.forecast.current.weather[0].icon}
        />
        <TempDesc>
          <Degree>{props.forecast.current.temp} C</Degree>
          <p>{makeUpperCase(props.forecast.current.weather[0].description)} </p>
        </TempDesc>
      </MainWeather>
      <Info data={props.forecast} />
    </Weathetoday>
  );
}

export default WeatherToday;
