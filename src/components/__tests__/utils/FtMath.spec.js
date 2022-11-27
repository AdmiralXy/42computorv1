import { describe, test, expect } from "vitest";
import FtMath from "@/utils/ft-math";

describe("FT Math", () => {
  // Tests: FtMath.sqrt
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
    expect(result).toEqual("10i");
  });
  test("decimals negative sqrt works correctly", () => {
    const number = -985.0864412;
    const result = FtMath.sqrt(number);
    expect(result).toEqual("31.386086745562913i");
  });

  // Tests: FtMath.max
  test("max works correctly", () => {
    const number1 = 10;
    const number2 = 20;
    const result = FtMath.max(number1, number2);
    expect(result).toEqual(20);
  });

  // Tests: FtMath.min
  test("min works correctly", () => {
    const number1 = 10;
    const number2 = 20;
    const result = FtMath.min(number1, number2);
    expect(result).toEqual(10);
  });

  // Tests: FtMath.isIrrational
  test("is irrational with rational number works correctly", () => {
    const number = 10;
    const result = FtMath.isIrrational(number);
    expect(result).toEqual(false);
  });
  test("is irrational with irrational number works correctly", () => {
    const number = 10.23;
    const result = FtMath.isIrrational(number);
    expect(result).toEqual(true);
  });

  // Tests: FtMath.gcd
  test("gcd works correctly", () => {
    const a = 900;
    const b = 32;
    const result = FtMath.gcd(a, b);
    expect(result).toEqual(4);
  });
  test("gcd with negative numbers works correctly", () => {
    const a = 900;
    const b = -32;
    const result = FtMath.gcd(a, b);
    expect(result).toEqual(4);
  });

  // Tests: FtMath.getDecimalPartLength
  test("get decimal part length works correctly", () => {
    const number = 10.23;
    const result = FtMath.getDecimalPartLength(number);
    expect(result).toEqual(2);
  });
  test("get decimal part length with long number works correctly", () => {
    const number = 703188.6532528641;
    const result = FtMath.getDecimalPartLength(number);
    expect(result).toEqual(10);
  });

  // Tests: FtMath.abs
  test("abs works correctly", () => {
    const number = -10;
    const result = FtMath.abs(number);
    expect(result).toEqual(10);
  });
  test("abs with positive number works correctly", () => {
    const number = 32;
    const result = FtMath.abs(number);
    expect(result).toEqual(32);
  });

  // Tests: FtMath.simplifyFraction
  test("simplify fraction works correctly", () => {
    const numerator = 12;
    const denominator = 20;
    const result = FtMath.simplifyFraction(numerator, denominator);
    expect(result).toEqual("3 / 5");
  });

  test("decimals simplify fraction works correctly", () => {
    const numerator = 3.96;
    const denominator = 1.32;
    const result = FtMath.simplifyFraction(numerator, denominator);
    expect(result).toEqual("3");
  });

  // Tests: FtMath.reduceCoefficients
  test("decimals reduce coefficients works correctly", () => {
    const a = 59123.5124;
    const b = 485.1;
    const c = 30.3;
    const result = FtMath.reduceCoefficients(a, b, c);
    expect(result).toEqual([147808781, 1212750, 75750]);
  });
  test("whole numbers reduce coefficients works correctly", () => {
    const a = 5253280218;
    const b = 1322118;
    const c = 918;
    const result = FtMath.reduceCoefficients(a, b, c);
    expect(result).toEqual([291848901, 73451, 51]);
  });
  test("decimals and whole number reduce coefficients works correctly", () => {
    const a = 973.6197;
    const b = 3499.497;
    const c = 2100;
    const result = FtMath.reduceCoefficients(a, b, c);
    expect(result).toEqual([3245399, 11664990, 7000000]);
  });
});
