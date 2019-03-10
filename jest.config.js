module.exports = {
    "rootDir": "./testing",
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "setupFilesAfterEnv": ["jest-extended"],
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "moduleDirectories": [
      "./node_modules"
    ]
  }