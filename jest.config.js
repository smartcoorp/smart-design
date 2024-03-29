module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest-setup.js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
    "@global-styles": "<rootDir>/src/global-styles/index.ts",
    "@tokens": "<rootDir>/src/tokens/index.ts",
    "@components": "<rootDir>/src/components/index.ts",
    "@styles": ["<rootDir>/src/styles/index.ts"],
    "@hooks": ["<rootDir>/src/hooks/index.ts"],
    "@helpers": ["<rootDir>/helpers/index.ts"],
    "@test-utils": ["<rootDir>/test-utils.tsx"],
  },
};
