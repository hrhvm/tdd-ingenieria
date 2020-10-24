import "@testing-library/jest-dom";
import { add } from "../Calc";

describe("Llamando a testAddNegatives", () => {
  test("", () => {
    try {
      add(-1, 0);
    } catch (error) {
      expect(error).toEqual("Should throw a NegativeParameterException");
    }
  });

  test("", () => {
    try {
      add(0, -1);
    } catch (error) {
      expect(error).toEqual("Should throw a NegativeParameterException");
    }
  });
});
