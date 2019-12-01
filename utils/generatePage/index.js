const fse = require("fs-extra");
const { validateArgs } = require("../utils/validateArgs");
const { generateLowerName } = require("../utils/generateLowerName");
const { generatePageName } = require("../utils/generatePageName");
const { generateUpperName } = require("../utils/generateUpperName");
const { replaceNamesInFiles } = require("../utils/replaceNamesInFiles");

//Validate the name and templateType is sent correctly
const envArgs = require("minimist")(process.argv.slice(2));
validateArgs(envArgs);
const { templateType, name } = envArgs;

//Craft the names with logic against type
const lowerName = generateLowerName(name, templateType);
const pageName = generatePageName(name);
const upperName = generateUpperName(name, templateType);

//Create a copy of template
fse.copySync(
  `${__dirname}/template/page.js`,
  `${__dirname}/template/${lowerName}.js`
);

const file = `${__dirname}/template/${lowerName}.js`;
const files = [file];

//Replace the upper, lower, and page names using crafted names
replaceNamesInFiles(files, lowerName, upperName, pageName);

fse.moveSync(file, `${__dirname}/../../src/pages/${lowerName}.js`);
