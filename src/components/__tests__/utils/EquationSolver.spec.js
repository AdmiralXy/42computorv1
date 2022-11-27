import { describe, test, expect } from "vitest";
import solveEquation from "@/utils/equation-solver";

describe("Equation solver", () => {
  // Tests: linear equations
  test("first degree solves correctly", () => {
    const equation = [
      { coefficient: 14238803, exponent: 1 },
      { coefficient: 854732998, exponent: 0 },
    ];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("roots");
    expect(solution.roots).toHaveLength(1);
    expect(solution.roots[0].real).toBeCloseTo(-60.02, 1);
    expect(solution.roots[0].fractional).toEqual("-854732998 / 14238803");
    expect(solution.roots[0].isIrrational).toEqual(true);
  });
  test("first degree with negative number solves correctly", () => {
    const equation = [
      { coefficient: -4, exponent: 1 },
      { coefficient: 20, exponent: 0 },
    ];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("roots");
    expect(solution.roots).toHaveLength(1);
    expect(solution.roots[0].real).toEqual(5);
    expect(solution.roots[0].fractional).toEqual("5");
    expect(solution.roots[0].isIrrational).toEqual(false);
  });
  test("first degree without b solves correctly", () => {
    const equation = [{ coefficient: 20, exponent: 1 }];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("roots");
    expect(solution.roots).toHaveLength(1);
    expect(solution.roots[0].real).toEqual(-0);
    expect(solution.roots[0].fractional).toEqual("0");
    expect(solution.roots[0].isIrrational).toEqual(false);
  });
  test("no solution shows correctly", () => {
    const equation = [{ coefficient: 0, exponent: 0 }];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("explanation", "Equation is always true");
  });
  test("no solution with coefficient shows correctly", () => {
    const equation = [{ coefficient: 10, exponent: 0 }];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("explanation", "Equation is always false");
  });
  test("no solution shows correctly with x", () => {
    const equation = [{ coefficient: 0, exponent: 1 }];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("explanation", "x ∈ R");
  });

  // Tests: quadratic equations
  test("second degree solves correctly", () => {
    const equation = [
      { coefficient: 1, exponent: 2 },
      { coefficient: -20, exponent: 1 },
      { coefficient: -69, exponent: 0 },
    ];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("roots");
    expect(solution.roots).toHaveLength(2);
    expect(solution.roots[0].real).toEqual(23);
    expect(solution.roots[0].fractional).toEqual("46 / 2");
    expect(solution.roots[0].isIrrational).toEqual(false);
    expect(solution.roots[1].real).toEqual(-3);
    expect(solution.roots[1].fractional).toEqual("-6 / 2");
    expect(solution.roots[1].isIrrational).toEqual(false);
  });
  test("second degree solves with one root solves correctly", () => {
    const equation = [
      { coefficient: 1, exponent: 2 },
      { coefficient: 2, exponent: 1 },
      { coefficient: 1, exponent: 0 },
    ];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("roots");
    expect(solution.roots).toHaveLength(1);
    expect(solution.roots[0].real).toEqual(-1);
    expect(solution.roots[0].fractional).toEqual("-2 / 2");
    expect(solution.roots[0].isIrrational).toEqual(false);
  });
  test("second degree without c solves correctly", () => {
    const equation = [
      { coefficient: 10, exponent: 2 },
      { coefficient: 19, exponent: 1 },
    ];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("roots");
    expect(solution.roots).toHaveLength(2);
    expect(solution.roots[0].real).toEqual(0);
    expect(solution.roots[0].fractional).toEqual("0 / 20");
    expect(solution.roots[0].isIrrational).toEqual(false);
    expect(solution.roots[1].real).toEqual(-1.9);
    expect(solution.roots[1].fractional).toEqual("-38 / 20");
    expect(solution.roots[1].isIrrational).toEqual(true);
  });
  test("second degree without b solves correctly", () => {
    const equation = [
      { coefficient: 5, exponent: 2 },
      { coefficient: -20, exponent: 0 },
    ];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("roots");
    expect(solution.roots).toHaveLength(2);
    expect(solution.roots[0].real).toEqual(2);
    expect(solution.roots[0].fractional).toEqual("4 / 2");
    expect(solution.roots[0].isIrrational).toEqual(false);
    expect(solution.roots[1].real).toEqual(-2);
    expect(solution.roots[1].fractional).toEqual("-4 / 2");
    expect(solution.roots[1].isIrrational).toEqual(false);
  });
  test("second degree with decimals coefficients solves correctly", () => {
    const equation = [
      { coefficient: 82.2545434, exponent: 2 },
      { coefficient: 26343.3232, exponent: 1 },
      { coefficient: -2535.25442, exponent: 0 },
    ];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("roots");
    expect(solution.roots).toHaveLength(2);
    expect(solution.roots[0].real).toBeCloseTo(0.09621, 5);
    expect(solution.roots[0].fractional).toEqual(
      "41490661257192 / 431250700500992"
    );
    expect(solution.roots[0].isIrrational).toEqual(true);
    expect(solution.roots[1].real).toBeCloseTo(-320.362, 3);
    expect(solution.roots[1].fractional).toEqual(
      "-138156373000073180 / 431250700500992"
    );
    expect(solution.roots[1].isIrrational).toEqual(true);
  });
  test("second degree with complex roots solves correctly", () => {
    const equation = [
      { coefficient: 5, exponent: 2 },
      { coefficient: 50, exponent: 0 },
    ];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("roots");
    expect(solution.roots).toHaveLength(2);
    expect(solution.roots[0].fractional).toEqual(
      "(0 + 6.324555320336758i) / 2"
    );
    expect(solution.roots[0].isIrrational).toEqual(true);
    expect(solution.roots[1].fractional).toEqual(
      "(0 - 6.324555320336758i) / 2"
    );
    expect(solution.roots[1].isIrrational).toEqual(true);
  });
  test("second degree with decimals and complex roots solves correctly", () => {
    const equation = [
      { coefficient: 9.17, exponent: 2 },
      { coefficient: -35.692123, exponent: 1 },
      { coefficient: 90.9393, exponent: 0 },
    ];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("roots");
    expect(solution.roots).toHaveLength(2);
    expect(solution.roots[0].fractional).toEqual(
      "(35692123 + 45406231.728176594i) / 18340000"
    );
    expect(solution.roots[0].isIrrational).toEqual(true);
    expect(solution.roots[1].fractional).toEqual(
      "(35692123 - 45406231.728176594i) / 18340000"
    );
    expect(solution.roots[1].isIrrational).toEqual(true);
  });

  // Tests: special cases
  test("unsupported shows correctly with degree greater than 2", () => {
    const equation = [{ coefficient: 0, exponent: 31 }];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty(
      "explanation",
      "Degree is greater than 2, not supported"
    );
  });
});
