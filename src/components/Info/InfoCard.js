import React, { useContext } from "react";
import styled from "styled-components";
import UnixToDateTime from "../../Utils/UnixToDateTime";
import TimezoneContext from "../../Context/TimeZoneContext";

const Div = styled.div`
  margin: auto;
`;

const Data = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

function InfoCard(props) {
  const timezone = useContext(TimezoneContext);

  return (
    <Div>
      {props.name === "Sunrise" || props.name === "Sunset" ? (
        <Data>
          {UnixToDateTime(props.data, {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: timezone,
            hour12: false,
          })}
        </Data>
      ) : (
        <Data>{props.data}</Data>
      )}
      <p>{props.name}</p>
    </Div>
  );
}

export default InfoCard;
