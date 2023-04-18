const fs = require("fs");
const path = require("path")
module.exports = {
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        // specify the HTML document to use
        // change the value of htmlPath to the path to your HTML document
        html: fs.readFileSync(path.resolve(".") + "/public/index.html", 'utf8'),
      },
  };
  