const UnixToDateTime = (unix, options) => {
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const startingDate = new Date(unix * 1000);
  const dateInNewTimezone = formatter.format(startingDate);
  return dateInNewTimezone;
};

export default UnixToDateTime;
