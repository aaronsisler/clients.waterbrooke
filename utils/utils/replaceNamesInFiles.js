exports.replaceNamesInFiles = (nameDirectory, lowerName, upperName) => {
  const replace = require("replace-in-file");
  const files = [`${nameDirectory}/markup.jsx`, `${nameDirectory}/index.js`];

  const upperOptions = {
    files,
    from: /UPPER_NAME/g,
    to: upperName
  };

  const lowerOptions = {
    files,
    from: /LOWER_NAME/g,
    to: lowerName
  };

  try {
    replace.sync(upperOptions);
    replace.sync(lowerOptions);
    console.log("File variables have been replaced");
  } catch (error) {
    console.error("Error occurred:", error);
  }
};
