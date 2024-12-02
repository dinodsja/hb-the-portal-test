import processInput from "./processInput.js";

const defaultInput = "./input/hb_test.csv";

/**
 * Main App
 */
const app = async () => {
  processInput(defaultInput)
    .then((inputData) => {
      console.log("inputData", inputData);
    })
    .catch((error) => {
      console.error(error);
    });
};

app();
