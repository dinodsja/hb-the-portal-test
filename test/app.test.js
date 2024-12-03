import processInput from "../src/processInput.js";
import processData from "../src/processData.js";
import processOutput from "../src/processOutput.js";

describe("Module Imports", () => {
  it("should have processInput module available", () => {
    expect(processInput).toBeDefined();
  });

  it("should have processData module available", () => {
    expect(processData).toBeDefined();
  });

  it("should have processOutput module available", () => {
    expect(processOutput).toBeDefined();
  });
});
