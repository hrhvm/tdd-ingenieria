import "@testing-library/jest-dom";
import { add } from "../Calc";

describe("Llamando a test adicionar", () => {
  test("Adicionando 0 a 0 produce 0", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("Adicionando 1 a 0 produce 1", () => {
    expect(add(1, 0)).toBe(1);
  });
  test("Adicionando 0 a 1 produce 1", () => {
    expect(add(0, 1)).toBe(1);
  });
  test("Adicionando 1 a 2 produce 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  // test("Probando el lanzamiento de excepciones", () => {
  //   try {
  //     add(-1, -3);
  //   } catch (error) {
  //     //expect(error).toEqual();
  //   }
  // });
});
