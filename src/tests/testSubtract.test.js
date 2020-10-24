import "@testing-library/jest-dom";
import { subtract } from "../Calc";

describe("Adiciones valores negativos", () => {
  test("Subtracting 0 from 0 should produce 0", () => {
    expect(subtract(0, 0)).toBe(0);
  });

  test("Subtracting 0 from 1 should produce 0", () => {
    expect(subtract(1, 0)).toBe(1);
  });

  test("Subtracting 1 from 0 lanza una exception", () => {
    try {
      subtract(1, 0);
    } catch (error) {
      expect(error).toEqual("ResultOutOfRangeException");
    }
  });
  test("Lanza una exepcion de parametro negativo", () => {
    try {
      subtract(-1, 0);
    } catch (error) {
      expect(error).toEqual("Should throw a NegativeParameterException");
    }
  });

  test("Lanza una exepcion de parametro negativo", () => {
    try {
      subtract(0, -1);
    } catch (error) {
      expect(error).toEqual("Should throw a NegativeParameterException");
    }
  });
});
