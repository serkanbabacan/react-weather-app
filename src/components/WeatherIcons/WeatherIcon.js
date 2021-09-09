import React from "react";
import convertCode from "./ConvertCode";
import "../../Utils/weather-icons-master/css/weather-icons.css";

const WeatherIcon = ({
  iconId,
  className = "",
  iconName = "",
  ...htmlProps
}) => {
  const iconClassName = convertCode(iconId, iconName);
  const classNames = `${iconClassName} ${className}`;
  return <i className={classNames} {...htmlProps} data-testid="icon" />;
};

export default WeatherIcon;
