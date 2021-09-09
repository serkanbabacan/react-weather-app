import React, { useState } from "react";
import PageSwitcher from "../components/Switch";
import HourlyForecast from "../components/HourlyForecast";
import DailyForecast from "../components/DailyForecast";
import { DailyAnalytics, HourlyAnalytics } from "../components/Analytics";
import styled from "styled-components";
import { weatherMapping } from "../Utils/Mappings";
import LocationDate from "../components/App/LocationDate";
import WeatherToday from "../components/App/WeatherToday";

const Weather = styled.div`
  padding: 20px;
  border-radius: 0 0 10px 10px;
  color: white;
  box-shadow: 2px 2px 2px 1px #c7cfd4;
  background: ${(props) => props.backgroundColor};
`;

function Forecast(props) {
  const [status, setStatus] = useState("weather");

  function handleStatus(stat) {
    setStatus(stat);
  }

  return (
    <div>
      <PageSwitcher status={handleStatus} />
      {(() => {
        if (status === "weather") {
          return (
            <Weather
              backgroundColor={
                weatherMapping[props.forecast.current.weather[0].icon]
              }
            >
              <LocationDate forecast={props.forecast} address={props.address} />
              <WeatherToday forecast={props.forecast} />
              <HourlyForecast hourly={props.forecast.hourly} />
              <DailyForecast daily={props.forecast.daily} />
            </Weather>
          );
        } else if (status === "dailyAnalytics") {
          return <DailyAnalytics data={props.forecast} />;
        } else if (status === "hourlyAnalytics") {
          return <HourlyAnalytics data={props.forecast} />;
        }
      })()}
    </div>
  );
}

export default Forecast;
