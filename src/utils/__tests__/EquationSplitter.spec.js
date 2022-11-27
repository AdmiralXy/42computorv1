import { describe, test, expect } from "vitest";
import splitEquation from "@/utils/equation-splitter";

describe("Equation splitter", () => {
  // Tests: different degrees of polynomials
  test("first degree splits correctly", () => {
    const equation = "2x + 3 = -5 + 1";
    const expected = ["2x", "+3", "=", "-5", "+1"];
    const actual = splitEquation(equation);
    expect(actual).toEqual(expected);
  });
  test("second degree splits correctly", () => {
    const equation = "2x^2 + 3x + 4 = 5";
    const expected = ["2x^2", "+3x", "+4", "=", "5"];
    const actual = splitEquation(equation);
    expect(actual).toEqual(expected);
  });
  test("second degree with negative terms splits correctly", () => {
    const equation = "2x^2 + 3x + 4 = 5 - 6x - 7x^2";
    const expected = ["2x^2", "+3x", "+4", "=", "5", "-6x", "-7x^2"];
    const actual = splitEquation(equation);
    expect(actual).toEqual(expected);
  });

  // Tests: different numbers of terms
  test("one term on each side splits correctly", () => {
    const equation = "2x = -5";
    const expected = ["2x", "=", "-5"];
    const actual = splitEquation(equation);
    expect(actual).toEqual(expected);
  });
  test("two terms on each side splits correctly", () => {
    const equation = "2x - 3 = 5 + 6x";
    const expected = ["2x", "-3", "=", "5", "+6x"];
    const actual = splitEquation(equation);
    expect(actual).toEqual(expected);
  });

  // Tests: different numbers of terms and different degrees of polynomials
  test("two terms on each side and different degrees of polynomials splits correctly", () => {
    const equation = "2x^2 + 3x = 5 + 6x^2";
    const expected = ["2x^2", "+3x", "=", "5", "+6x^2"];
    const actual = splitEquation(equation);
    expect(actual).toEqual(expected);
  });

  // Tests: invalid equal signs
  test("no equals sign throws error", () => {
    const equation = "2x + 3";
    expect(() => splitEquation(equation)).toThrowError();
  });
  test("no terms on right side throws error", () => {
    const equation = "2x + 3 =";
    expect(() => splitEquation(equation)).toThrowError();
  });
  test("no terms on left side throws error", () => {
    const equation = "= 2x + 3";
    expect(() => splitEquation(equation)).toThrowError();
  });
  test("more than one equals sign throws error", () => {
    const equation = "2x + 3 = 5 = 6";
    expect(() => splitEquation(equation)).toThrowError();
  });

  // Tests: invalid terms
  test("equation without terms throws error", () => {
    const equation1 = "";
    const equation2 = "=";
    const equation3 = "2";
    const equation4 = "abc";

    expect(() => splitEquation(equation1)).toThrowError();
    expect(() => splitEquation(equation2)).toThrowError();
    expect(() => splitEquation(equation3)).toThrowError();
    expect(() => splitEquation(equation4)).toThrowError();
  });
});
