// const fs = require("fs");
// const fse = require("fs-extra");
// const { validateArgs } = require("./utils/validateArgs");
// const { generateUpperName } = require("./utils/generateUpperName");
// const { generateLowerName } = require("./utils/generateLowerName");
// const { replaceNamesInFiles } = require("./utils/replaceNamesInFiles");
// const { renameTemplate } = require("./utils/renameTemplate");

// //Validate the name and isContainer is sent correctly
// const envArgs = require("minimist")(process.argv.slice(2));
// validateArgs(envArgs);
// const { templateType, name } = envArgs;

// //Craft the names with logic against type
// const upperName = generateUpperName(name, templateType);
// const lowerName = generateLowerName(name, templateType);

// //Create a copy of templates in a directory using crafted name
// const nameDirectory = `${__dirname}/${lowerName}`;
// fse.copySync(`${__dirname}/templates`, nameDirectory);

// //Replace the upper and lower name using crafted name
// // const files = [`${nameDirectory}/markup.jsx`, `${nameDirectory}/index.js`];
// replaceNamesInFiles(nameDirectory, lowerName, upperName);

// switch (templateType) {
//   case "PAGE":
//     renameTemplate(
//       `${nameDirectory}/page.js`,
//       `${nameDirectory}/${lowerName}.js`
//     );
//     fse.moveSync(
//       `${nameDirectory}/${lowerName}.js`,
//       `${__dirname}/../src/pages/${lowerName}.js`
//     );
//     break;
//   case "CONTAINER":
//     break;
//   default:
//     break;
// }

// if (isPageBoolean) {
//   fs.renameSync(`${nameDirectory}/page.js`, `${nameDirectory}/${lowerName}.js`);
//   fse.moveSync(nameDirectory, `${__dirname}/../src/pages/${lowerName}/`);
// } else {
//   //Rename the JSX and SCSS files
//   fs.renameSync(
//     `${nameDirectory}/markup.jsx`,
//     `${nameDirectory}/${lowerName}.jsx`
//   );

//   fs.renameSync(
//     `${nameDirectory}/styles.scss`,
//     `${nameDirectory}/${lowerName}.scss`
//   );

//   //Move folder and files to containers or components
//   if (isContainerBoolean) {
//     fse.moveSync(nameDirectory, `${__dirname}/../src/containers/${lowerName}/`);
//   } else {
//     fse.moveSync(nameDirectory, `${__dirname}/../src/components/${lowerName}/`);
//   }
// }
