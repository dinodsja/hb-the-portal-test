import { parsePickLocation } from "../src/utils.js";

describe("Utils - parsePickLocation", () => {
  test("valid pick locations", () => {
    expect(parsePickLocation("AB 10")).toEqual(["AB", 10]);
    expect(parsePickLocation("C 8")).toEqual(["C", 8]);
    expect(parsePickLocation("AF 7")).toEqual(["AF", 7]);
    expect(parsePickLocation("AC 5")).toEqual(["AC", 5]);
    expect(parsePickLocation("A 1")).toEqual(["A", 1]);
  });

  test("valid pick locations", () => {
    expect(parsePickLocation("")).toEqual(null);
    expect(parsePickLocation("A")).toEqual(null);
    expect(parsePickLocation(1)).toEqual(null);
    expect(parsePickLocation("B0")).toEqual(null);
    expect(parsePickLocation(["A", 1])).toEqual(null);
    expect(parsePickLocation(" 0 B")).toEqual(null);
    expect(parsePickLocation("A A")).toEqual(null);
    expect(parsePickLocation("BB")).toEqual(null);
  });
});
