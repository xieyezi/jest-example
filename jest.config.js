/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>"],
  roots: ["<rootDir>/src"],
  testPathIgnorePatterns: ["/node_modules/"],
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  transformIgnorePatterns: ["node_modules/(?!(lodash|query-string)/)"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg"
  },
  transform: {
    "^.+\\.[tj]sx?$": [
      "ts-jest",
      {
        isolatedModules: true,
        useESM: true
      }
    ]
  }
};

module.exports = config;
