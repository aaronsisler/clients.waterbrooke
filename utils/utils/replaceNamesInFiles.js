exports.replaceNamesInFiles = (files, lowerName, upperName, pageName) => {
  const replace = require("replace-in-file");
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

  const pageOptions = {
    files,
    from: /PAGE_NAME/g,
    to: pageName
  };

  try {
    replace.sync(upperOptions);
    replace.sync(lowerOptions);
    replace.sync(pageOptions);
    console.log("File variables have been replaced");
  } catch (error) {
    console.error("Error occurred:", error);
  }
};
