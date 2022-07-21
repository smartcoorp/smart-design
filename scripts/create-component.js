const [, , type, component] = process.argv;
const fs = require("fs");

const hasUpperCase = (string) => string.toLowerCase() !== string;
const capitalizeFirstLetter = (string) => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
const transformToCamelcase = (string, separator) =>
  string
    .split(separator)
    .map((str) => capitalizeFirstLetter(str))
    .join("");

const replaceIndex = (string, toReplace, at, repl) => {
  const re = new RegExp(toReplace, "g");

  const indexes = [...string.matchAll(re)].map((a) => a.index);
  const wantedIndexes = at.map((index) => indexes[index]);

  return string.replace(re, function (match, i) {
    if (wantedIndexes.includes(i)) {
      return repl;
    }

    return match;
  });
};

if (hasUpperCase(type) || hasUpperCase(component)) {
  console.error(
    `ERROR --> Type (${type}) or component (${component}) contains uppercase. Avoid using upperCase in naming (example: button-with-icon)`
  );
  process.exit(1);
}

const camelCaseComponentName = transformToCamelcase(component, "-");

const COMPONENT_TEMPLATE_FOLDER = "./templates/component";
const COMPONENT_FOLDER = `./src/components/${component}`;

fs.mkdir(COMPONENT_FOLDER, { recursive: true }, (err) => {
  if (err) throw err;
});

fs.readdir(COMPONENT_TEMPLATE_FOLDER, (err, filenames) => {
  if (err) throw err;

  filenames.map((filename) => {
    fs.readFile(`${COMPONENT_TEMPLATE_FOLDER}/${filename}`, "utf8", (err, data) => {
      if (err) throw err;

      let fileData;

      if (filename.includes("styles")) {
        fileData = data;
      } else if (filename.includes("stories")) {
        fileData = replaceIndex(data, "component", [0], component);
        fileData = replaceIndex(
          fileData,
          "Component",
          [2, 3, 4, 5, 7, 9, 10, 11, 12],
          camelCaseComponentName
        );
        fileData = fileData.replace("storyType", capitalizeFirstLetter(type));
      } else {
        fileData = data
          .replace(/component/g, component)
          .replace(/Component/g, camelCaseComponentName);
      }

      const finalFilename = filename.replace("component", component);

      fs.writeFile(
        `${COMPONENT_FOLDER}/${finalFilename}`,
        fileData,
        { encoding: "utf8" },
        (writeFileErr) => {
          if (writeFileErr) throw writeFileErr;
        }
      );
    });
  });
});

fs.readFile(`./src/components/index.ts`, "utf8", (err, data) => {
  if (err) throw err;

  let fileData =
    data + "\n" + `export { default as ${camelCaseComponentName} } from "./${component}"`;
  fileData = fileData.replace(/^\s*\n/gm, "");

  fs.writeFile(`./src/components/index.ts`, fileData, { encoding: "utf8" }, (writeFileErr) => {
    if (writeFileErr) throw writeFileErr;
  });
});
