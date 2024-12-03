import fileSystem from "fs";
import { createObjectCsvWriter } from "csv-writer";

export default function processOutput(data, filePath) {
  return new Promise((resolve, reject) => {
    /**
     * Validate
     */
    if (!data && !data.length) {
      reject({
        type: "FILE_ERROR_011",
        message: `Data required to write csv: ${filePath}`,
      });
    }

    if (!filePath) {
      reject({
        type: "FILE_ERROR_012",
        message: `File path required to write csv: ${filePath}`,
      });
    }

    // Check provided path is writable
    fileSystem.access(filePath, fileSystem.constants.W_OK, function (error) {
      if (error) {
        // Try to make it writable
        fileSystem.chmod(dirPath, 0o777, (error) => {
          if (error) {
            reject({
              type: "FILE_ERROR_013",
              message: `File path write error: ${error.message}`,
            });
          }
        });
      }

      // Setting path & headers
      const csvWriter = createObjectCsvWriter({
        path: filePath,
        header: [
          { id: "productCode", title: "product_code" },
          { id: "quantity", title: "quantity" },
          { id: "pickLocation", title: "pick_location" },
        ],
      });

      csvWriter
        .writeRecords(data)
        .then(() => {
          // Success
          resolve(data);
        })
        .catch((error) => {
          reject({
            type: "FILE_ERROR_014",
            message: `Failed to create csv with provided data: ${error}`,
          });
        });
    });
  });
}
