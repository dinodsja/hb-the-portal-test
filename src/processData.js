import { parsePickLocation } from "../src/utils.js";

export default function processData(inputData) {
  const mergedProductCodes = [];

  /**
   * Function to group products and sum quantity
   */
  function doGrouping(data) {
    const grouped = {};
    data.forEach((csvRow) => {
      const { productCode, quantity, pickLocation } = csvRow;

      // Init entry for new product code if not exists
      if (!grouped[String(productCode)]) {
        grouped[String(productCode)] = {
          productCode,
          quantity: 0,
          pickLocation,
        };
      } else {
        mergedProductCodes.push(productCode);
      }

      // Sum quantity by product code
      grouped[productCode].quantity = grouped[productCode].quantity + quantity;
    });

    // Convert grouped object back to array
    return Object.values(grouped);
  }

  /**
   * Function to sort products by bay & shelf
   *
   */
  function doSorting(data) {
    return data.sort((a, b) => {
      const [bayA, shelfA] = parsePickLocation(a.pickLocation);
      const [bayB, shelfB] = parsePickLocation(b.pickLocation);
      if (bayA.length !== bayB.length) {
        return bayA.length - bayB.length;
      }
      if (bayA < bayB) {
        return -1;
      }
      if (bayA > bayB) {
        return 1;
      }
      return shelfA - shelfB;
    });
  }

  // Validate
  if (!inputData || !inputData.length || !Array.isArray(inputData)) {
    console.error("Invalid input array!");
    return [];
  }

  console.info("\n- Grouping products and quantity");
  const groupedData = doGrouping(inputData);
  console.info(
    `Products grouped count: ${
      mergedProductCodes.length
    } \nGrouped product code(s): [${mergedProductCodes.join()}]`
  );

  console.info("\n- Sorting by bay & shelf");
  return doSorting(groupedData);
}
