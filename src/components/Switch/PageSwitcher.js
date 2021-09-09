import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  display: grid;
  align-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
`;

const Button = styled.button`
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 0%;
  outline: 0px;
  height: 100%;
  width: 100%;
  -webkit-box-flex: 1;
  padding: 16px 50px 16px 50px;
  border-radius: 0px;
  font-size: 20px;
  font-weight: 600;
  background-color: rgb(238, 234, 244);
  font-family: "DM Sans", sans-serif !important;
  text-align: center;
  border: 1px solid #dcdcdc;
  border-bottom-width: 0;
  gap: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  color: black;
  -webkit-tap-highlight-color: transparent;
  @media only screen and (min-width: 375px) and (max-width: 600px) {
    font-size: 12px;
    padding: 10px 30px 10px 30px;
  }
  @media only screen and (min-width: 200px) and (max-width: 374px) {
    font-size: 12px;
    padding: 10px 3px 10px 3px;
  }
`;

const Button1 = styled(Button)`
  border-radius: 24px 0px 0px 0px;
  :focus {
    border-right-width: 0;
  }
`;

const Button2 = styled(Button)`
  border-radius: 0px 24px 0px 0px;
  :focus {
    border-left-width: 0;
  }
`;

export default function PageSwitcher(props) {
  const [active, setActive] = useState("Weather");

  function handleDailyAnalytics(event) {
    event.preventDefault();
    props.status("dailyAnalytics");
    setActive("DailyAnalytics");
  }

  function handleWeather(event) {
    event.preventDefault();
    props.status("weather");
    setActive("Weather");
  }

  function handleHourlyAnalytics(event) {
    event.preventDefault();
    props.status("hourlyAnalytics");
    setActive("HourlyAnalytics");
  }

  return (
    <Div>
      <Button1
        onClick={handleWeather}
        style={{
          backgroundColor:
            active === "Weather" ? "white" : "rgb(238, 234, 244)",
        }}
      >
        Weather
      </Button1>
      <Button
        onClick={handleDailyAnalytics}
        style={{
          backgroundColor:
            active === "DailyAnalytics" ? "white" : "rgb(238, 234, 244)",
        }}
      >
        Daily Analytics
      </Button>
      <Button2
        onClick={handleHourlyAnalytics}
        style={{
          backgroundColor:
            active === "HourlyAnalytics" ? "white" : "rgb(238, 234, 244)",
        }}
      >
        Hourly Analytics
      </Button2>
    </Div>
  );
}
