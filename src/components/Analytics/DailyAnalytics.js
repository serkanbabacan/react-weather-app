import styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";
import ChartLine from "./ChartLine";
import ChartBar from "./ChartBar";
import ChartArea from "./ChartArea";
import TimezoneContext from "../../Context/TimeZoneContext";
import UnixToDateTime from "../../Utils/UnixToDateTime";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  padding: 20px;
  border-radius: 0 0 10px 10px;
  color: white;
  border: 1px solid #dcdcdc;
  gap: 20px;
  min-width: 0;
  background-color: white;
  border-top-width: 0;
  @media only screen and (min-width: 200px) and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    align-items: center;
    padding: 10px;
  }
`;

function DailyAnalytics(props) {
  const [dataTemp, setDataTemp] = useState([]);
  const [dataWind, setDataWind] = useState([]);
  const [dataHumidity, setDataHumidity] = useState([]);
  const [dataUV, setDataUV] = useState([]);
  const [dataPressure, setDataPressure] = useState([]);
  const [dataDewPoint, setDataDewPoint] = useState([]);
  const [dataRain, setDataRain] = useState([]);
  const [dataCloud, setDataCloud] = useState([]);

  const timezone = useContext(TimezoneContext);

  useEffect(() => {
    const newDataTemp = [];
    const newDataWind = [];
    const newdataHumidity = [];
    const newDataUV = [];
    const newDataPressure = [];
    const newDataDewPoint = [];
    const newDataRain = [];
    const newDataCloud = [];

    props.data.daily.forEach((element) => {
      const numericDay = UnixToDateTime(element.dt, {
        day: "numeric",
        timeZone: timezone,
      });
      const dateFull = UnixToDateTime(element.dt, {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: timezone,
      });

      newDataTemp.push({
        data: element.temp.max,
        date: numericDay,
        dateFull: dateFull,
      });
      newDataWind.push({
        data: Math.trunc(element.wind_speed * 3.6),
        date: numericDay,
        dateFull: dateFull,
      });
      newdataHumidity.push({
        data: element.humidity,
        date: numericDay,
        dateFull: dateFull,
      });
      newDataUV.push({
        data: element.uvi,
        date: numericDay,
        dateFull: dateFull,
      });
      newDataPressure.push({
        data: element.pressure,
        date: numericDay,
        dateFull: dateFull,
      });
      newDataDewPoint.push({
        data: element.dew_point,
        date: numericDay,
        dateFull: dateFull,
      });
      newDataRain.push({
        data: element.rain ? element.rain : 0,
        date: numericDay,
        dateFull: dateFull,
      });
      newDataCloud.push({
        data: element.clouds,
        date: numericDay,
        dateFull: dateFull,
      });
    });
    setDataTemp(newDataTemp);
    setDataWind(newDataWind);
    setDataHumidity(newdataHumidity);
    setDataUV(newDataUV);
    setDataPressure(newDataPressure);
    setDataDewPoint(newDataDewPoint);
    setDataRain(newDataRain);
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
      <ChartBar data={dataRain} name="Rain Volume" dataName="data" unit="" />
      <ChartArea data={dataCloud} name="Cloudiness" dataName="data" unit="%" />
    </Div>
  );
}

export default DailyAnalytics;
