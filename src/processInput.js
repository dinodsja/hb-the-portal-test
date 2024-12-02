import fileSystem from "fs";
import fileSystemPath from "path";
import csvParser from "csv-parser";

export default function processInput(filePath) {
  const csvData = [];

  // Setting inital values
  let rowIndex = -1;
  let csvTotalCount = 0;
  let csvErrorCount = 0;
  let csvErrorRows = [];

  /**
   * Function to validate each row of csv
   *
   */
  function validateRow(csvRow) {
    if (!csvRow) {
      return false;
    }

    // Validate product code
    if (
      !csvRow.product_code ||
      isNaN(csvRow.product_code) ||
      parseInt(csvRow.product_code) <= 0
    ) {
      return false;
    }

    // Validate quantity
    if (
      !csvRow.quantity ||
      isNaN(csvRow.quantity) ||
      parseInt(csvRow.quantity) <= 0
    ) {
      return false;
    }

    // Validate pick location (Alphanumeric, first part alphabet, second part 1-10)
    const pickLocationRegex = /^[A-Za-z]+\s[1-9]$|^[A-Za-z]+\s10$/;
    if (
      !csvRow.pick_location ||
      !pickLocationRegex.test(String(csvRow.pick_location).trim())
    ) {
      return false;
    }

    return true;
  }

  /**
   * Process each row
   *
   */
  function processRow(csvRow) {
    csvTotalCount++;
    if (csvRow && validateRow(csvRow)) {
      csvData.push({
        productCode: parseInt(csvRow.product_code),
        quantity: parseInt(csvRow.quantity),
        pickLocation: String(csvRow.pick_location).trim(),
      });
    } else {
      csvErrorCount++;
      csvErrorRows.push(csvTotalCount);
      console.log("Row error:", csvRow);
    }
  }

  return new Promise((resolve, reject) => {
    fileSystem.stat(filePath, (err, stats) => {
      // Check if the file exists
      if (err) {
        return reject({
          type: "FILE_ERROR_001",
          message: `File cannot access: ${filePath}`,
        });
      }

      // Check if the file is a CSV
      const fileExtension = fileSystemPath.extname(filePath).toLowerCase();
      if (fileExtension !== ".csv") {
        return reject({
          type: "FILE_ERROR_002",
          message: `File is not a valid CSV file: ${filePath}`,
        });
      }

      // Check file has data
      if (stats.size === 0) {
        return reject({
          type: "FILE_ERROR_003",
          message: `File is empty: ${filePath}`,
        });
      }

      // Start CSV parsing
      fileSystem
        .createReadStream(filePath)
        .pipe(csvParser())

        // Process each line
        .on("data", (csvRow) => {
          rowIndex++;
          if (rowIndex <= 0) {
            if (
              !csvRow.product_code ||
              !csvRow.quantity ||
              !csvRow.pick_location
            ) {
              reject({
                type: "FILE_ERROR_004",
                message: `CSV column headings are required: ${filePath}`,
              });
            }
          } else {
            processRow(csvRow);
          }
        })

        // Process completed
        .on("end", () => {
          console.info(
            `\n\n- Completed reading csv. \nTotal rows: ${csvTotalCount}. \nError rows count: ${csvErrorCount}. \nError on row(s): [${csvErrorRows.join()}]`
          );
          resolve(csvData);
        })

        // Error occured
        .on("error", (error) => reject(error));
    });
  });
}
