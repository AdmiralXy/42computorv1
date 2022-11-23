import { describe, test, expect } from "vitest";
import FtMath from "@/utils/ft-math";

describe("FT Math", () => {
  test("sqrt works correctly", () => {
    const number = 10;
    const result = FtMath.sqrt(number);
    expect(result).toBeCloseTo(3.16227, 4);
  });
  test("sqrt with decimal correctly", () => {
    const number = 8342.4194;
    const result = FtMath.sqrt(number);
    expect(result).toBeCloseTo(91.33684, 4);
  });
  test("sqrt(0) works correctly", () => {
    const number = 0;
    const result = FtMath.sqrt(number);
    expect(result).toEqual(0);
  });
  test("sqrt with long number works correctly", () => {
    const number = 678392156;
    const result = FtMath.sqrt(number);
    expect(result).toBeCloseTo(26045.96237, 4);
  });
  test("negative sqrt works correctly", () => {
    const number = -100;
    const result = FtMath.sqrt(number);
    expect(result).toEqual(null);
  });
  test("min works correctly", () => {
    const number1 = 10;
    const number2 = 20;
    const result = FtMath.min(number1, number2);
    expect(result).toEqual(10);
  });
  test("max works correctly", () => {
    const number1 = 10;
    const number2 = 20;
    const result = FtMath.max(number1, number2);
    expect(result).toEqual(20);
  });
  test("decimals format coefficients works correctly", () => {
    const a = 59123.5124;
    const b = 485.1;
    const c = 30.3;
    const result = FtMath.formatCoefficients(a, b, c);
    expect(result).toEqual([147808781, 1212750, 75750]);
  });
  test("whole numbers format coefficients works correctly", () => {
    const a = 5253280218;
    const b = 1322118;
    const c = 918;
    const result = FtMath.formatCoefficients(a, b, c);
    expect(result).toEqual([291848901, 73451, 51]);
  });
  test("decimals and whole number format coefficients works correctly", () => {
    const a = 973.6197;
    const b = 3499.497;
    const c = 2100;
    const result = FtMath.formatCoefficients(a, b, c);
    expect(result).toEqual([3245399, 11664990, 7000000]);
  });
});
