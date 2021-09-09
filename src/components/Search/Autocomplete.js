import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import { fetchAutocompleteQuery } from "../../Utils/API";
import styled from "styled-components";
import { BiCurrentLocation } from "react-icons/bi";
import { DebounceInput } from "react-debounce-input";

const StyledWrapper = styled.div`
  & .react-autosuggest__input {
    height: 45px;
    border: none;
    width: 85%;
    font-size: inherit;
    outline: none;
    margin: 0;
    padding: 0;
    background-color: rgba(255, 255, 255);
  }
  & .react-autosuggest__container {
    text-align: center;
    margin: 80px auto 80px auto;
    max-width: 575px;
    border-radius: 30px;
    border: 1px solid #dcdcdc;
    background-color: rgba(255, 255, 255);
    padding: 2px;
    :hover {
      box-shadow: 1px 1px 8px 1px #dcdcdc;
    }
    :focus-within {
      box-shadow: 1px 1px 8px 1px #dcdcdc;
      outline: none;
    }
  }
  & .react-autosuggest__suggestions-list {
    list-style-type: none;
    text-align: left;
    padding: 0 0 16px 0;
    margin: 0;
  }
  & .react-autosuggest__suggestions-container--open {
    border-top: 1px solid #dcdcdc;
  }
  & .react-autosuggest__suggestion--highlighted {
    background-color: #f7f8f9;
  }
  & .react-autosuggest__suggestion {
    padding: 6px 0px 6px 30px;
    margin: 0;
  }
`;

const GPSButton = styled(BiCurrentLocation)`
  border-left: 1px solid #a3a3a3;
  padding-left: 10px;
  font-size: 1.3em;
  -webkit-tap-highlight-color: transparent;
  :hover {
    cursor: pointer;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
`;

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = async (value) => {
  const data = await fetchAutocompleteQuery(value);
  const suggestions = [];

  data.results.forEach((element) => {
    const sggst = {
      name: element.address.freeformAddress,
      latlon: element.position,
      country: element.address.country,
    };
    suggestions.push(sggst);
  });
  return suggestions;
};

const renderSuggestion = (suggestion) => (
  <div>
    {suggestion.name}, {suggestion.country}
  </div>
);

function Autocomplete(props) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChangeHandler = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value, reason }) => {
    if (reason === "input-changed" && value.length > 1) {
      getSuggestions(value).then((result) => setSuggestions(result));
    }
  };

  const inputProps = {
    placeholder: "Search",
    value,
    onChange: onChangeHandler,
  };

  const getSuggestionValue = (suggestion) => {
    return suggestion.name + ", " + suggestion.country;
  };

  const handleClick = (e) => {
    e.preventDefault();
    const val = sessionStorage.getItem("latlon");
    const obj = JSON.parse(val);
    const adress = sessionStorage.getItem("address");
    const adressobj = JSON.parse(adress);
    props.currentLoc({ ...adressobj, latlon: obj });
  };

  const renderInputComponent = (inputProps) => (
    <Div>
      <DebounceInput
        minLength={1}
        debounceTimeout={500}
        autoFocus
        {...inputProps}
        spellCheck={false}
      />
      <GPSButton onClick={handleClick} />
    </Div>
  );

  const onSuggestionSelected = (event, { suggestion }) => {
    props.add(suggestion);
    setSuggestions([]);
    setValue("");
  };

  const onSuggestionsClearRequested = () => {};

  return (
    <StyledWrapper>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        renderInputComponent={renderInputComponent}
        onSuggestionSelected={onSuggestionSelected}
        shouldRenderSuggestions={() => true}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        focusInputOnSuggestionClick={false}
      />
    </StyledWrapper>
  );
}

export default Autocomplete;
