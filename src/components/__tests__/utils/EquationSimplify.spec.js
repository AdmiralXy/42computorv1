import { describe, test, expect } from "vitest";
import simplifyEquation from "@/utils/equation-simplify";

describe("Equation simplify", () => {
  test("first degree simplifies correctly", () => {
    const equation = [
      { coefficient: 5, exponent: 0 },
      { coefficient: 15, exponent: 0 },
      { coefficient: 4, exponent: 1 },
      { coefficient: 35, exponent: 0 },
      { coefficient: 14, exponent: 1 },
    ];
    const result = simplifyEquation(equation);
    expect(result).toEqual([
      { coefficient: 18, exponent: 1 },
      { coefficient: 55, exponent: 0 },
    ]);
  });

  test("second degree simplifies correctly", () => {
    const equation = [
      { coefficient: 5, exponent: 2 },
      { coefficient: 15, exponent: 0 },
      { coefficient: 4, exponent: 1 },
      { coefficient: 35, exponent: 0 },
      { coefficient: 14, exponent: 1 },
      { coefficient: 4, exponent: 2 },
      { coefficient: 154, exponent: 2 },
    ];
    const result = simplifyEquation(equation);
    expect(result).toEqual([
      { coefficient: 163, exponent: 2 },
      { coefficient: 18, exponent: 1 },
      { coefficient: 50, exponent: 0 },
    ]);
  });

  test("simplifies to zero correctly", () => {
    const equation = [
      { coefficient: -15, exponent: 0 },
      { coefficient: 15, exponent: 0 },
    ];
    const result = simplifyEquation(equation);
    expect(result).toEqual([{ coefficient: 0, exponent: 0 }]);
  });
  test("simplifies to zero with x correctly", () => {
    const equation = [
      { coefficient: -4, exponent: 1 },
      { coefficient: -15, exponent: 0 },
      { coefficient: 15, exponent: 0 },
      { coefficient: 4, exponent: 1 },
    ];
    const result = simplifyEquation(equation);
    expect(result).toEqual([{ coefficient: 0, exponent: 0 }]);
  });
  test("simplifies to zero with x and high degree correctly", () => {
    const equation = [
      { coefficient: -4, exponent: 1 },
      { coefficient: -25, exponent: 12 },
      { coefficient: -15, exponent: 0 },
      { coefficient: 15, exponent: 0 },
      { coefficient: 4, exponent: 1 },
      { coefficient: 25, exponent: 12 },
    ];
    const result = simplifyEquation(equation);
    expect(result).toEqual([{ coefficient: 0, exponent: 0 }]);
  });
});
