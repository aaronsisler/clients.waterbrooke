/* eslint-disable import/prefer-default-export */
const isValidImageType = (fileType = "") => {
  const validImageTypes = ["jpg", "jpeg", "png"];

  return validImageTypes.indexOf(fileType) > 0;
};

export { isValidImageType };
