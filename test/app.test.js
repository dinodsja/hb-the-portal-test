import path from "path";

import processInput from "../src/processInput.js";
import processData from "../src/processData.js";
import processOutput from "../src/processOutput.js";

const defaultFilePath = path.join(__dirname, "../input/hb_test.csv");
const defaultInput = [
  { productCode: 15248, quantity: 10, pickLocation: "AB 10" },
  { productCode: 25636, quantity: 1, pickLocation: "C 8" },
  { productCode: 26982, quantity: 1, pickLocation: "AF 7" },
  { productCode: 36389, quantity: 4, pickLocation: "AC 5" },
  { productCode: 25214, quantity: 10, pickLocation: "A 1" },
  { productCode: 15248, quantity: 5, pickLocation: "AB 10" },
  { productCode: 23689, quantity: 10, pickLocation: "X 10" },
  { productCode: 11224, quantity: 8, pickLocation: "AZ 4" },
  { productCode: 15178, quantity: 9, pickLocation: "D 4" },
  { productCode: 30124, quantity: 5, pickLocation: "A 1" },
  { productCode: 88958, quantity: 4, pickLocation: "AZ 10" },
  { productCode: 14789, quantity: 3, pickLocation: "AM 9" },
  { productCode: 33331, quantity: 6, pickLocation: "AC 4" },
  { productCode: 52568, quantity: 7, pickLocation: "AB 10" },
  { productCode: 23568, quantity: 8, pickLocation: "AH 8" },
  { productCode: 26897, quantity: 9, pickLocation: "AL 2" },
  { productCode: 12456, quantity: 10, pickLocation: "AB 9" },
  { productCode: 12345, quantity: 15, pickLocation: "L 3" },
  { productCode: 12879, quantity: 12, pickLocation: "AL 7" },
];
const defaultOutput = [
  { productCode: 25214, quantity: 10, pickLocation: "A 1" },
  { productCode: 30124, quantity: 5, pickLocation: "A 1" },
  { productCode: 25636, quantity: 1, pickLocation: "C 8" },
  { productCode: 15178, quantity: 9, pickLocation: "D 4" },
  { productCode: 12345, quantity: 15, pickLocation: "L 3" },
  { productCode: 23689, quantity: 10, pickLocation: "X 10" },
  { productCode: 12456, quantity: 10, pickLocation: "AB 9" },
  { productCode: 15248, quantity: 15, pickLocation: "AB 10" },
  { productCode: 52568, quantity: 7, pickLocation: "AB 10" },
  { productCode: 33331, quantity: 6, pickLocation: "AC 4" },
  { productCode: 36389, quantity: 4, pickLocation: "AC 5" },
  { productCode: 26982, quantity: 1, pickLocation: "AF 7" },
  { productCode: 23568, quantity: 8, pickLocation: "AH 8" },
  { productCode: 26897, quantity: 9, pickLocation: "AL 2" },
  { productCode: 12879, quantity: 12, pickLocation: "AL 7" },
  { productCode: 14789, quantity: 3, pickLocation: "AM 9" },
  { productCode: 11224, quantity: 8, pickLocation: "AZ 4" },
  { productCode: 88958, quantity: 4, pickLocation: "AZ 10" },
];

describe("App - Module Imports", () => {
  test("Check module available", () => {
    expect(processInput).toBeDefined();
    expect(processData).toBeDefined();
    expect(processOutput).toBeDefined();
  });
});

describe("Verify Default Data", () => {
  test("Test Process Input", async () => {
    const input = await processInput(defaultFilePath);
    expect(input).toEqual(defaultInput);
  });
  test("Test Process Data", async () => {
    const result = processData(defaultInput);
    expect(result).toEqual(defaultOutput);
  });
});
