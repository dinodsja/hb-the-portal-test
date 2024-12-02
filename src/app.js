import processInput from "./processInput.js";
import processData from "./processData.js";

const defaultInput = "./input/hb_test.csv";

/**
 * Main App
 */
const app = async () => {
  processInput(defaultInput)
    .then((inputData) => {
      console.log("inputData", inputData);
      const outputData = processData(inputData);
      console.log("outputData", outputData);
    })
    .catch((error) => {
      console.error(error);
    });
};

app();
