exports.renameTemplate = (currentName, targetName) => {
  const fs = require("fs");

  try {
    fs.renameSync(currentName, targetName);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};
