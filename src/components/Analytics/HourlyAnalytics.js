import styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";
import ChartLine from "./ChartLine";
import ChartBar from "./ChartBar";
import ChartArea from "./ChartArea";
import UnixToDateTime from "../../Utils/UnixToDateTime";
import TimezoneContext from "../../Context/TimeZoneContext";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  color: white;
  border: 1px solid #dcdcdc;
  gap: 20px;
  min-width: 0;
  background-color: white;
  border-top-width: 0;
  @media only screen and (min-width: 200px) and (max-width: 600px) {
    gap: 10px;
    padding: 10px;
  }
`;

//Hoyrly analytics
//I might need just one state to hold all these values
function HourlyAnalytics(props) {
  const [dataTemp, setDataTemp] = useState([]);
  const [dataWind, setDataWind] = useState([]);
  const [dataHumidity, setDataHumidity] = useState([]);
  const [dataUV, setDataUV] = useState([]);
  const [dataPressure, setDataPressure] = useState([]);
  const [dataDewPoint, setDataDewPoint] = useState([]);
  const [dataCloud, setDataCloud] = useState([]);

  const timezone = useContext(TimezoneContext);

  useEffect(() => {
    const newDataTemp = [];
    const newDataWind = [];
    const newdataHumidity = [];
    const newDataUV = [];
    const newDataPressure = [];
    const newDataDewPoint = [];
    const newDataCloud = [];

    props.data.hourly.forEach((element) => {
      const hour = UnixToDateTime(element.dt, {
        hour: "2-digit",
        timeZone: timezone,
        hour12: false,
      });
      const dateFull = UnixToDateTime(element.dt, {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: timezone,
      });
      const hourFull = UnixToDateTime(element.dt, {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: timezone,
        hour12: false,
      });

      newDataTemp.push({
        data: element.temp,
        date: hour,
        dateFull: dateFull + " - " + hourFull,
      });
      newDataWind.push({
        data: Math.trunc(element.wind_speed * 3.6),
        date: hour,
        dateFull: dateFull + " - " + hourFull,
      });
      newdataHumidity.push({
        data: element.humidity,
        date: hour,
        dateFull: dateFull + " - " + hourFull,
      });
      newDataUV.push({
        data: element.uvi,
        date: hour,
        dateFull: dateFull + " - " + hourFull,
      });
      newDataPressure.push({
        data: element.pressure,
        date: hour,
        dateFull: dateFull + " - " + hourFull,
      });
      newDataDewPoint.push({
        data: element.dew_point,
        date: hour,
        dateFull: dateFull + " - " + hourFull,
      });
      newDataCloud.push({
        data: element.clouds,
        date: hour,
        dateFull: dateFull + " - " + hourFull,
      });
    });
    setDataTemp(newDataTemp);
    setDataWind(newDataWind);
    setDataHumidity(newdataHumidity);
    setDataUV(newDataUV);
    setDataPressure(newDataPressure);
    setDataDewPoint(newDataDewPoint);
    setDataCloud(newDataCloud);
  }, [props.data, timezone]);

  return (
    <Div>
      <ChartLine data={dataTemp} name="Temperature" dataName="data" unit="°" />
      <ChartLine
        data={dataWind}
        name="Wind Speed"
        dataName="data"
        unit="km/s"
      />
      <ChartLine data={dataHumidity} name="Humidity" dataName="data" unit="%" />
      <ChartBar data={dataUV} name="UV Index" dataName="data" unit="" />
      <ChartLine
        data={dataPressure}
        name="Pressure"
        dataName="data"
        unit="hPa"
      />
      <ChartLine
        data={dataDewPoint}
        name="Dew Point"
        dataName="data"
        unit="°"
      />
      <ChartArea data={dataCloud} name="Cloudiness" dataName="data" unit="%" />
    </Div>
  );
}

export default HourlyAnalytics;
