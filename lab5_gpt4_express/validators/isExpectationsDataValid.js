const { isObjectHasLength, isObjectHasProps } = require("./utils/validators");

const isExpectationsDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, [
    "womanVR",
    "expectationsHeaderData",
    "expectationsDescriptionData",
  ]);

  const { womanVR, expectationsHeaderData, expectationsDescriptionData } = data;

  isObjectHasLength(womanVR);
  isObjectHasProps(womanVR, ["alt", "src"]);

  isObjectHasLength(expectationsHeaderData);
  isObjectHasProps(expectationsHeaderData, ["title", "href", "text"]);

  isObjectHasLength(expectationsDescriptionData);
  isObjectHasProps(expectationsDescriptionData, ["description", "href", "text"]);
};

module.exports = isExpectationsDataValid;
