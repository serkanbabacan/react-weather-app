import React, { useState } from "react";
import styled from "styled-components";
import Autocomplete from "../components/Search/Autocomplete";
import { TiDelete } from "react-icons/ti";

const Wrapper = styled.div`
  background: linear-gradient(139.73deg, #e6fdff 0%, #f3efff 100%);
  border: 1px solid #dcdcdc;
  margin: 20px auto 20px auto;
  border-radius: 30px;
  padding: 20px 20px 30px 20px;
  @media only screen and (min-width: 200px) and (max-width: 600px) {
    padding: 10px 10px 20px 10px;
  } ;
`;

const LocationList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(172px, 1fr));
  list-style: none;
  gap: 30px;
  max-width: 1100px;
  padding: 20px;
  border-radius: 10px;

  border: 1px solid #dcdcdc;
  list-style-type: none;
  margin-bottom: auto;
  @media only screen and (min-width: 200px) and (max-width: 600px) {
    gap: 10px;
    padding: 15px;
    grid-template-columns: repeat(2, 1fr);
  } ;
`;

const Button = styled(TiDelete)`
  display: none;
  border: none;
  background-color: inherit;
  font-size: 16px;
  margin: 0;
  padding: 0;
  @media only screen and (min-width: 200px) and (max-width: 600px) {
    display: block;
    top: 2.6px;
    right: -1px;
    width: 10%;
    position: absolute;
    text-align: right;
    margin-right: 10px;
  }
`;

const Location = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dcdcdc;
  padding: 15px 30px 15px 30px;
  border-radius: 20px;
  font-size: 1.1em;
  font-weight: 500;
  width: 110px;
  position: relative;
  text-align: center;
  list-style-type: none;
  background-color: rgba(255, 255, 255);
  @media only screen and (min-width: 200px) and (max-width: 600px) {
    width: 100px;
    margin: 0 auto;
    padding: 13px 15px 13px 15px;
  }
  :hover {
    cursor: pointer;
    box-shadow: 1px 1px 8px 1px #dcdcdc;
  }
  :hover ${Button} {
    display: block;
    top: 2.6px;
    right: -1px;
    width: 10%;
    position: absolute;
    text-align: right;
    margin-right: 10px;
  }
`;

function SearchBar(props) {
  const [locationList, setLocationList] = useState(new Set());
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (result) => {
    for (const e of locationList) {
      if (e.name === result.name) {
        return;
      }
    }
    fetchNewCity(result);
    setIsAdded(true);
  };

  async function fetchNewCity(address) {
    props.newCity(address);
    setLocationList((prevLocations) => new Set([...prevLocations, address]));
  }

  function renderLocation() {
    return [...locationList].map((item) => (
      <Location
        key={item.name}
        data-index={item.name}
        onClick={handleLocChange}
        onTouchStart={handleLocChange}
      >
        {item.name}
        <Button onClick={(event) => handleDelete(item, event)} />
      </Location>
    ));
  }

  function handleLocChange(e) {
    let name = e.target.getAttribute("data-index");
    for (const e of locationList) {
      if (e.name === name) {
        fetchNewCity(e);
        break;
      }
    }
  }

  function handleDelete(item, event) {
    event.stopPropagation();
    const newArray = [...locationList].filter((loc) => loc !== item);
    setLocationList(new Set(newArray));
    if (locationList.size === 1) {
      setIsAdded(false);
    }
  }

  return (
    <Wrapper>
      <Autocomplete add={handleAdd} currentLoc={props.newCity} />
      <h2>Locations</h2>
      {isAdded ? (
        <LocationList>{renderLocation()}</LocationList>
      ) : (
        <p>Search locations to add to the list</p>
      )}
    </Wrapper>
  );
}

export default SearchBar;
