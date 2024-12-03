import readline from "readline";
import fileSystem from "fs";
import fileSystemPath from "path";

import processInput from "./processInput.js";
import processData from "./processData.js";
import processOutput from "./processOutput.js";

const defaultInputPath = "./input/hb_test.csv";
const defaultOutputPath = "./output/hb_test_sorted.csv";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Start procssing the csv
 *
 */
const startProcess = (inputPath, outputPath) => {
  processInput(inputPath)
    .then((inputData) => {
      const outputData = processData(inputData);
      processOutput(outputData, outputPath)
        .then(() => {
          console.info("\nSuccessfully completed");
          console.info(`Output file: ${outputPath}`);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
};

/**
 * Ask for custom input csv file
 *
 */
const askInputPath = () => {
  rl.question(
    "\nEnter the custom csv file path (or press Enter to use default): ",
    (customFilePath) => {
      // Start process if no custom path
      if (customFilePath.trim() === "") {
        startProcess(defaultInputPath, defaultOutputPath);
        rl.close();
        return;
      }

      // Read custom path
      fileSystem.access(customFilePath, fileSystem.constants.F_OK, (err) => {
        if (err) {
          console.error(
            "File does not exist or cannot be accessed. Try again."
          );
          askInputPath(); // Ask again
        } else {
          // Prepare the output file name (_sorted)
          const outputFileName = fileSystemPath.basename(
            customFilePath,
            fileSystemPath.extname(customFilePath)
          );
          const outputFilePath = fileSystemPath.join(
            "./output/",
            outputFileName + "_sorted" + fileSystemPath.extname(customFilePath)
          );
          startProcess(customFilePath, outputFilePath);
          rl.close();
          return;
        }
      });
    }
  );
};

/**
 * Main App
 *
 */
const app = async () => {
  console.info("*** THE PORTAL TEST ***");
  askInputPath();
};

app();
