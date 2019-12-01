exports.copyTemplate = (sourceFile, targetFile) => {
  const fse = require("fs-extra");

  fse.copySync(sourceFile, targetFile);
};
