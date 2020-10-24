import "@testing-library/jest-dom";
import { checkNegativeNumbers } from "../Calc";

describe("Test de numeros negativos", () => {
  test("Zeros are not negative numbers", () => {
    try {
      checkNegativeNumbers(0, 0);
    } catch (error) {
      expect(error).toEqual("");
    }
  });
  test("1 are not negative numbers", () => {
    try {
      checkNegativeNumbers(1, 1);
    } catch (error) {
      expect(error).toEqual("1 are not negative numbers");
    }
  });
  test("-1 are negative numbers", () => {
    try {
      checkNegativeNumbers(-1, -1);
    } catch (error) {
      expect(error).toEqual("Should throw a NegativeParameterException");
    }
  });
});
