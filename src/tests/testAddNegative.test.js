import "@testing-library/jest-dom";
import { subtract } from "../Calc";
describe("Adiciones valores negativos", () => {
  test("Subtracting 0 from 0 should produce 0", () => {
    expect(subtract(0, 0)).toBe(0);
  });

  test("Subtracting 0 from 1 should produce 0", () => {
    expect(subtract(1, 0)).toBe(1);
  });
});
