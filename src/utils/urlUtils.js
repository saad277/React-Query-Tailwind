export const appendQueryParams = (url, paramsObj) => {
  let newUrl;
  const paramsArr = [];
  Object.keys(paramsObj).forEach((key) => {
    if (Array.isArray(paramsObj[key])) {
      paramsObj[key].forEach((paramsVal) => {
        paramsArr.push(`${key}[]=${paramsVal}`);
      });
    } else {
      paramsArr.push(`${key}=${paramsObj[key]}`);
    }
  });
  newUrl = `${url}?${paramsArr.join("&")}`;
  return newUrl;
};
