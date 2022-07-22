import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import url from "@rollup/plugin-url";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const fs = require("fs");
const packageJson = require("./package.json");

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),

  typescript({
    tsconfig: "./tsconfig.json",
    useTsconfigDeclarationDir: true,
  }),
  url({
    include: ["**/*.woff", "**/*.woff2", "**/*.ttf"],
    limit: Infinity,
  }),
  terser(),
];

const getFolders = (entry) => {
  // get the names of folders and files of the entry directory
  const dirs = fs.readdirSync(entry);
  // do not include folders not meant for export and do not process index.ts
  // ['Accordion', 'Button'...]
  return dirs.filter((name) => name !== "index.ts").filter((name) => name !== "utils");
};

//loop through your folders and generate a rollup obj per folder
const folderBuilds = getFolders("./src").flatMap((folder) => {
  return [
    {
      input: `src/${folder}/index.ts`,
      output: {
        // ensure file destination is same as where the typings are
        file: `dist/${folder}/index.js`,
        sourcemap: true,
        exports: "named",
      },
      plugins,
      external: ["styled-components", "react", "react-dom"],
    },
  ];
});

export default [
  {
    input: ["src/index.ts"],
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins,
    external: ["styled-components"],
  },
  ...folderBuilds,
];
