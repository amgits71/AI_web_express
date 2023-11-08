const { isObjectHasLength, isObjectHasProps } = require("./utils/validators");

const isCtaDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, [
    "ctaLeftData",
    "ctaRightData",
  ]);

  const { ctaLeftData, ctaRightData } = data;

  isObjectHasLength(ctaLeftData);
  isObjectHasProps(ctaLeftData, ["title", "href", "text"]);

  isObjectHasLength(ctaRightData);
};

module.exports = isCtaDataValid;
