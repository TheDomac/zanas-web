import { browsers } from "../consts/browser";

const getBrowserUsed = () => {
  if (navigator.userAgent.indexOf("Chrome") !== -1) {
    return browsers.CHROME;
  } else if (navigator.userAgent.indexOf("Edge") !== -1) {
    return browsers.EDGE;
  } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
    return browsers.FIREFOX;
  }
  return undefined;
};

export default getBrowserUsed;
