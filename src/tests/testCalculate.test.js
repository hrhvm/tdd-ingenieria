import "@testing-library/jest-dom";
import { OperationType } from "../Types";
import { calculate } from "../Calc";

describe("Test Calculate", () => {
  test("Adding 1 to 1 failed ", () => {
    expect(calculate(1, OperationType.Add, 1)).toBe(2);
  });
  test("Subtract 1 from 1 failed ", () => {
    expect(calculate(1, OperationType.Subtract, 1)).toBe(0);
  });
});
