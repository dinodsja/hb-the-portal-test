export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleDirectories: ["node_modules"],
  testPathIgnorePatterns: ["/node_modules/", "/input/", "/output/"],
  moduleFileExtensions: ["js"],
  globals: {
    jest: {
      useESM: true,
    },
  },
};
