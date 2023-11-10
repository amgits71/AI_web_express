const { isObjectHasLength, isObjectHasProps, isArrayHasLength } = require("./utils/validators");

const isFooterDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, [
    "footerTopData",
    "footerLogoData",
    "copyrightData",
    "footerMenuData",
  ]);

  const { footerTopData, footerLogoData, copyrightData, footerMenuData } = data;

  isObjectHasLength(footerTopData);
  isObjectHasProps(footerTopData, ["title", "button"]);

  const { button } = footerTopData;
  isObjectHasLength(button);
  isObjectHasProps(button, ["href", "text"]);

  isObjectHasLength(footerLogoData);
  isObjectHasProps(footerLogoData, ["href", "alt", "src", "text"]);

  isObjectHasLength(copyrightData);

  isArrayHasLength(footerMenuData);
  footerMenuData.forEach((item) => {
    isObjectHasProps(item, ["header", "href", "links"]);
    const { links } = item;
    isArrayHasLength(links);
    isObjectHasProps(links, ["link1", "link2", "link3", "link4"]); 
  });

};

module.exports = isFooterDataValid;
