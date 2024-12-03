import processInput from "./processInput.js";
import processData from "./processData.js";
import processOutput from "./processOutput.js";

const defaultInputPath = "./input/hb_test.csv";
const defaultOutputPath = "./output/hb_test_sorted.csv";

/**
 * Main App
 */
const app = async () => {
  console.info("*** THE PORTAL TEST ***");
  console.info("Input CSV:", defaultInputPath);
  processInput(defaultInputPath)
    .then((inputData) => {
      const outputData = processData(inputData);
      processOutput(outputData, defaultOutputPath)
        .then(() => {
          console.info(`\nSuccessfully completed`);
          console.info(`Output file: ${defaultOutputPath}`);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
};

app();
