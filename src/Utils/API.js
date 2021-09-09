import axios from "axios";

const fetchForecast = async (lat, long) => {
  try {
    const data = (
      await axios.get(
        `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&units=metric&lon=${long}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
    ).data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCity = async (cityName) => {
  try {
    const data = (
      await axios.get(
        `${process.env.REACT_APP_TOMTOM_URL}/search/${cityName}.json?key=${process.env.REACT_APP_TOMTOM_KEY}&language=en-US&language=tr-TR&entityTypeSet=Municipality`
      )
    ).data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchIP = async () => {
  try {
    const data = (await axios.get("https://ipapi.co/json")).data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const reverseGeocode = async (lat, long) => {
  try {
    const data = (
      await axios.get(
        `${process.env.REACT_APP_TOMTOM_URL}/reverseGeocode/${lat},${long}.ext=json?key=${process.env.REACT_APP_TOMTOM_KEY}&entityType=PostalCodeArea`
      )
    ).data;
    return data.addresses[0].address;
  } catch (error) {
    console.log(error);
  }
};

const fetchAutocompleteQuery = async (value) => {
  try {
    const data = (
      await axios.get(
        `${process.env.REACT_APP_TOMTOM_URL}/search/${value}.json?key=${process.env.REACT_APP_TOMTOM_KEY}&typeahead=true&entityTypeSet=Municipality,MunicipalitySubdivision&language=NGT&limit=5`
      )
    ).data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const makeUpperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export {
  fetchForecast,
  makeUpperCase,
  fetchCity,
  fetchIP,
  reverseGeocode,
  fetchAutocompleteQuery,
};
