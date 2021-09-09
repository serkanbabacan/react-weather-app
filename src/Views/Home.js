import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import AppHeader from "../components/App/AppHeader";
import SearchBar from "../components/Search";
import Forecast from "./Forecast";
import { fetchForecast, fetchIP, reverseGeocode } from "../Utils/API";
import AppFooter from "../components/App/AppFooter";
import TimezoneContext from "../Context/TimeZoneContext";
import LoadingScreen from "../components/LoadingScreen";

const App = styled.div`
  background-color: #f7f8f9;
  margin: 0;
  padding: 0;
  width: 100%;
  @media only screen and (min-width: 200px) and (max-width: 374px) {
    font-size: 12px;
  } ;
`;

const Main = styled.div`
  padding: 0 15px 0 15px;
  margin: 0 auto;
  max-width: 1100px;
`;

function Home() {
  const [forecast, setForecast] = useState([]);
  const [adress, setAdress] = useState();
  const [latlon, setLatLon] = useState();

  useEffect(() => {
    if (latlon !== undefined) {
      fetchForecast(latlon.lat, latlon.lon).then((result) =>
        setForecast(result)
      );
    }
  }, [latlon]);

  const fetchLocation = useCallback(() => {
    const fetchIPLocation = async () => {
      const data = await fetchIP();
      const address = { name: data.city, country: data.country_name };
      setAdress(address);
      sessionStorage.setItem("address", JSON.stringify(address));
      setLatLon({ lat: data.latitude, lon: data.longitude });
      sessionStorage.setItem(
        "latlon",
        JSON.stringify({ lat: data.latitude, lon: data.longitude })
      );
    };
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLatLon({ lat: latitude, lon: longitude });
      sessionStorage.setItem(
        "latlon",
        JSON.stringify({ lat: latitude, lon: longitude })
      );
      reverseGeocode(latitude, longitude).then((result) => {
        const address = {
          name: `${result.municipalitySubdivision}, ${result.municipality}`,
          country: result.country,
        };
        setAdress(address);
        sessionStorage.setItem("address", JSON.stringify(address));
      });
    }, fetchIPLocation);
  }, []);

  useEffect(() => {
    fetchLocation();
  }, [fetchLocation]);

  function newCity(address) {
    const latitude = address.latlon.lat;
    const longitude = address.latlon.lon;
    setAdress(address);
    setLatLon({ lat: latitude, lon: longitude });
  }

  return (
    <App>
      <AppHeader />
      <Main>
        <SearchBar newCity={newCity} fetchLocation={fetchLocation} />
      </Main>
      {typeof forecast.daily !== "undefined" && adress !== undefined ? (
        <Main>
          <TimezoneContext.Provider value={forecast.timezone}>
            <Forecast forecast={forecast} address={adress} />
          </TimezoneContext.Provider>
          <AppFooter />
        </Main>
      ) : (
        <LoadingScreen />
      )}
    </App>
  );
}

export default Home;
