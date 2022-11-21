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
    expect(solution.roots[0]).toBeCloseTo(-60.02, 1);
  });
  test("first degree with negative number solves correctly", () => {
    const equation = [
      { coefficient: -4, exponent: 1 },
      { coefficient: 20, exponent: 0 },
    ];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("roots", [5]);
  });
  test("first degree without b solves correctly", () => {
    const equation = [{ coefficient: 20, exponent: 1 }];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("roots", [-0]);
  });
  test("no solution shows correctly", () => {
    const equation = [{ coefficient: 0, exponent: 0 }];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("explanation", "There are no solutions");
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
    expect(solution).toHaveProperty("roots", [23, -3]);
  });
  test("second degree solves with one root solves correctly", () => {
    const equation = [
      { coefficient: 1, exponent: 2 },
      { coefficient: 2, exponent: 1 },
      { coefficient: 1, exponent: 0 },
    ];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("roots", [-1]);
  });
  test("second degree without c solves correctly", () => {
    const equation = [
      { coefficient: 10, exponent: 2 },
      { coefficient: 19, exponent: 1 },
    ];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("roots", [0, -1.9]);
  });
  test("second degree without b solves correctly", () => {
    const equation = [
      { coefficient: 5, exponent: 2 },
      { coefficient: -20, exponent: 0 },
    ];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty("roots", [2, -2]);
  });
  test("second degree without real roots solves correctly", () => {
    const equation = [
      { coefficient: 5, exponent: 2 },
      { coefficient: 50, exponent: 0 },
    ];
    const solution = solveEquation(equation);
    expect(solution).toHaveProperty(
      "explanation",
      "Discriminant Δ is negative, there are no solutions in real numbers"
    );
  });
});
