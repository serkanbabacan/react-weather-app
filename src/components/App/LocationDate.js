import UnixToDateTime from "../../Utils/UnixToDateTime";
import React, { useContext } from "react";
import TimezoneContext from "../../Context/TimeZoneContext";

function LocationDate(props) {
  const timezone = useContext(TimezoneContext);

  return (
    <div className="loc-date">
      <h2>
        {props.address.name}, {props.address.country}
      </h2>
      <h3>
        {UnixToDateTime(props.forecast.current.dt, {
          day: "numeric",
          month: "long",
          year: "numeric",
          timeZone: timezone,
        })}
      </h3>
    </div>
  );
}

export default LocationDate;
