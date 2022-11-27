import { describe, test, expect } from "vitest";
import parseTerm from "@/utils/term-matcher";

describe("Term matcher", () => {
  // Tests: number
  test("integer matched properly", () => {
    const term = "10";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 10, exponent: 0 });
  });
  test("decimal matched properly", () => {
    const term = "17.81";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 17.81, exponent: 0 });
  });
  test("positive integer matched properly", () => {
    const term = "+10";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 10, exponent: 0 });
  });
  test("positive decimal matched properly", () => {
    const term = "+17.81";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 17.81, exponent: 0 });
  });
  test("negative integer matched properly", () => {
    const term = "-10";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: -10, exponent: 0 });
  });
  test("negative decimal matched properly", () => {
    const term = "-17.81";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: -17.81, exponent: 0 });
  });

  // Tests: number with x
  test("integer x matched properly", () => {
    const term = "10x";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 10, exponent: 1 });
  });
  test("decimal x matched properly", () => {
    const term = "17.81x";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 17.81, exponent: 1 });
  });
  test("positive integer x matched properly", () => {
    const term = "+10x";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 10, exponent: 1 });
  });
  test("positive decimal x matched properly", () => {
    const term = "+17.81x";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 17.81, exponent: 1 });
  });
  test("negative integer x matched properly", () => {
    const term = "-10x";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: -10, exponent: 1 });
  });
  test("negative decimal x matched properly", () => {
    const term = "-17.81x";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: -17.81, exponent: 1 });
  });

  // Tests: number with x and exponent
  test("integer x^ matched properly", () => {
    const term = "1x^2";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 1, exponent: 2 });
  });
  test("decimal x^ matched properly", () => {
    const term = "17.81x^24";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 17.81, exponent: 24 });
  });
  test("positive integer x^ matched properly", () => {
    const term = "+21x^15";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 21, exponent: 15 });
  });
  test("positive decimal x^ matched properly", () => {
    const term = "+13.01x^7";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 13.01, exponent: 7 });
  });
  test("negative integer x^ matched properly", () => {
    const term = "-10x^2";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: -10, exponent: 2 });
  });
  test("negative decimal x^ matched properly", () => {
    const term = "-17.81x^1";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: -17.81, exponent: 1 });
  });

  // Tests: number with x and exponent and multiply character
  test("integer with * character x^ matched properly", () => {
    const term = "1*x^2";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 1, exponent: 2 });
  });
  test("decimal with * character x^ matched properly", () => {
    const term = "17.81*X^24";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 17.81, exponent: 24 });
  });
  test("positive integer with * character x^ matched properly", () => {
    const term = "+21*X^15";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 21, exponent: 15 });
  });
  test("positive decimal with * character x^ matched properly", () => {
    const term = "+13.01*x^7";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 13.01, exponent: 7 });
  });
  test("negative integer with * character x^ matched properly", () => {
    const term = "-10*X^2";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: -10, exponent: 2 });
  });
  test("negative decimal with * character x^ matched properly", () => {
    const term = "-17.81*X^1";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: -17.81, exponent: 1 });
  });

  // Tests: x
  test("x matched properly", () => {
    const term = "x";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 1, exponent: 1 });
  });
  test("positive x matched properly", () => {
    const term = "+x";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 1, exponent: 1 });
  });
  test("negative x matched properly", () => {
    const term = "-x";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: -1, exponent: 1 });
  });

  // Tests: x with exponent
  test("x^ matched properly", () => {
    const term = "x^11";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 1, exponent: 11 });
  });
  test("negative x^ matched properly", () => {
    const term = "+x^41";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: 1, exponent: 41 });
  });
  test("negative x^ matched properly", () => {
    const term = "-x^1";
    const result = parseTerm(term);
    expect(result).toEqual({ coefficient: -1, exponent: 1 });
  });

  // Tests: invalid number
  test("invalid number with +- signs", () => {
    const term = "+-10";
    expect(() => parseTerm(term)).toThrowError();
  });
  test("invalid number with -+ signs", () => {
    const term = "+-10";
    expect(() => parseTerm(term)).toThrowError();
  });
  test("invalid number with + sign after", () => {
    const term = "10+";
    expect(() => parseTerm(term)).toThrowError();
  });
  test("invalid number with - sign after", () => {
    const term = "10-";
    expect(() => parseTerm(term)).toThrowError();
  });
  test("invalid decimal", () => {
    const term = "10,14";
    expect(() => parseTerm(term)).toThrowError();
  });

  // Tests: invalid number with x
  test("invalid number with x after", () => {
    const term = "x10";
    expect(() => parseTerm(term)).toThrowError();
  });
  test("invalid number with x and - sign after", () => {
    const term = "x10-";
    expect(() => parseTerm(term)).toThrowError();
  });

  // Tests: invalid number with x and exponent
  test("invalid number with x and multiple exponent", () => {
    const term = "x^10^2";
    expect(() => parseTerm(term)).toThrowError();
  });
  test("invalid number with x and negative exponent", () => {
    const term = "x^-10";
    expect(() => parseTerm(term)).toThrowError();
  });
  test("invalid number with x and positive exponent", () => {
    const term = "x^+10";
    expect(() => parseTerm(term)).toThrowError();
  });
  test("invalid number with x and empty exponent", () => {
    const term = "x^";
    expect(() => parseTerm(term)).toThrowError();
  });
  test("invalid number with x and sign after exponent", () => {
    const term = "x^10-";
    expect(() => parseTerm(term)).toThrowError();
  });

  // Tests: invalid x
  test("invalid x with multiple x signs", () => {
    const term = "1xx";
    expect(() => parseTerm(term)).toThrowError();
  });

  // Tests: invalid x with exponent
  test("invalid x with negative exponent", () => {
    const term = "x^-1";
    expect(() => parseTerm(term)).toThrowError();
  });
});
