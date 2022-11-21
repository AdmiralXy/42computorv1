import { describe, test, expect } from "vitest";
import FtMath from "@/utils/ft-math";

describe("FT Math", () => {
  test("sqrt works correctly", () => {
    const number = 10;
    const result = FtMath.sqrt(number);
    expect(result).toBeCloseTo(3.16227, 4);
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
});
