const { isObjectHasLength, isObjectHasProps, isArrayHasLength } = require("./utils/validators");

const isBlogDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, [
    "blogHeaderData",
    "blogArticleData",
  ]);

  const { blogHeaderData, blogArticleData } = data;

  isObjectHasLength(blogHeaderData);

  isArrayHasLength(blogArticleData);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  blogArticleData.forEach((item) => {
    isObjectHasProps(item, ["className", "img", "description"]); 
    const { img, description } = item;
    isObjectHasProps(img, ["alt", "src"]); 
    isObjectHasProps(description, ["date", "title", "href", "text"]);
  });
};

module.exports = isBlogDataValid;