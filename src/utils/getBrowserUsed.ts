import { browsers } from "consts/browser";

const getBrowserUsed = () => {
  if (navigator.userAgent.indexOf("Chrome") !== -1) {
    return browsers.CHROME;
  } else if (navigator.userAgent.indexOf("Edge") !== -1) {
    return browsers.EDGE;
  }
  return undefined;
};

export default getBrowserUsed;
