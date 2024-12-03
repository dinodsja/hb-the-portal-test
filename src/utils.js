/**
 * Parse pick location (Bay & Shelf)
 * Alphanumeric, first part alphabet, second part 1-10
 *
 */
export function parsePickLocation(pickLocation) {
  if (typeof pickLocation !== "string") {
    return null;
  }
  const parts = pickLocation.split(" ");
  const bay = parts[0] ? String(parts[0]).trim() : null; // "A", "AZ", etc
  const shelf = parts[1] ? parseInt(parts[1]) : null;
  return bay && shelf ? [bay, shelf] : null;
}
