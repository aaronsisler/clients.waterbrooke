const fse = require("fs-extra");
const { validateArgs } = require("../utils/validateArgs");
const { generateLowerName } = require("../utils/generateLowerName");
const { generateUpperName } = require("../utils/generateUpperName");
const { copyTemplate } = require("../utils/copyTemplate");
const { replaceNamesInFiles } = require("../utils/replaceNamesInFiles");

//Validate the name and templateType is sent correctly
const envArgs = require("minimist")(process.argv.slice(2));
validateArgs(envArgs);
const { templateType, name } = envArgs;

//Craft the names with logic against type
const lowerName = generateLowerName(name, templateType);
const upperName = generateUpperName(name, templateType);

const indexFile = `${__dirname}/${lowerName}/index.js`;
const markupFile = `${__dirname}/${lowerName}/${lowerName}.jsx`;
const stylesFile = `${__dirname}/${lowerName}/${lowerName}.scss`;

// Make a directory
fse.mkdir(`${__dirname}/${lowerName}`);

//Create copyies of templates
copyTemplate(
  `${__dirname}/../templates/markup.jsx`,
  `${__dirname}/${lowerName}/${lowerName}.jsx`
);
copyTemplate(
  `${__dirname}/../templates/styles.scss`,
  `${__dirname}/${lowerName}/${lowerName}.scss`
);
copyTemplate(
  `${__dirname}/../templates/index.js`,
  `${__dirname}/${lowerName}/index.js`
);

const files = [indexFile, markupFile, stylesFile];

//Replace the upper, lower, and page names using crafted names
replaceNamesInFiles(files, lowerName, upperName);

fse.moveSync(
  `${__dirname}/${lowerName}/`,
  `${__dirname}/../../src/components/${lowerName}`
);
