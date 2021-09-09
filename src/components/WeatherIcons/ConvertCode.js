import { OWM_MAP } from "../../Utils/Mappings";

const convertCode = (iconId, iconName) => {
  let prefix = "wi wi-";
  let postfix = iconName.slice(-1);
  if (postfix === "n") {
    if (!OWM_MAP.night[iconId]) {
      throw new Error("Icon Id does not exist");
    }
    const { icon } = OWM_MAP.night[iconId];
    prefix += "night-";
    return prefix + icon;
  }
  if (!OWM_MAP.day[iconId]) {
    throw new Error("Icon Id does not exist");
  }
  const { icon } = OWM_MAP.day[iconId];
  prefix = `${prefix}day-`;
  return prefix + icon;
};

export default convertCode;
