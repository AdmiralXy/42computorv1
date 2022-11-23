import FtMath from "@/utils/ft-math";

export default function solveEquation(equation) {
  const degree = equation[0].exponent;

  switch (degree) {
    case 0:
      return solveLinear(equation);
    case 1:
      return solveLinear(equation);
    case 2:
      return solveQuadratic(equation);
    default:
      return {
        explanation: "Degree is greater than 2, not supported",
      };
  }
}

function solveLinear(equation) {
  if (equation.length === 1 && equation[0].coefficient === 0) {
    return {
      explanation: "x ∈ R",
    };
  }

  const a = equation.find((term) => term.exponent === 1)?.coefficient ?? 0;
  const b = equation.find((term) => term.exponent === 0)?.coefficient ?? 0;

  const x = -b / a;
  const bFormatted = b > 0 ? `-${b}` : b * -1;
  return {
    formula: "x = -b / a",
    sign: x > 0 ? "+" : "-",
    roots: [
      {
        real: x,
        formulaApplied: `x = ${bFormatted} / ${a}`,
        fractional: FtMath.formatFraction(-b, a),
        isIrrational: x % 1 !== 0,
      },
    ],
  };
}

function solveQuadratic(equation) {
  let a = equation.find((term) => term.exponent === 2)?.coefficient ?? 0;
  let b = equation.find((term) => term.exponent === 1)?.coefficient ?? 0;
  let c = equation.find((term) => term.exponent === 0)?.coefficient ?? 0;

  [a, b, c] = FtMath.formatCoefficients(a, b, c);

  let delta = b ** 2 - 4 * a * c;

  if (delta < 0) {
    return {
      explanation:
        "Discriminant Δ is negative, there are no solutions in real numbers",
    };
  }

  if (delta === 0) {
    const x = -b / (2 * a);
    const bFormatted = b > 0 ? `-${b}` : b * -1;
    return {
      formula: "x = -b / 2a",
      sign: x > 0 ? "+" : "-",
      roots: [
        {
          real: x,
          fractional: `${bFormatted} / ${2 * a}`,
          isIrrational: x % 1 !== 0,
        },
      ],
      explanation: "Discriminant Δ is zero, there is one solution",
    };
  }

  const x1 = (-b + FtMath.sqrt(delta)) / (2 * a);
  const x2 = (-b - FtMath.sqrt(delta)) / (2 * a);
  const bFormatted = b > 0 ? `-${b}` : b * -1;
  return {
    formula: "x = -b ± √(b² - 4ac) / 2a",
    formulaApplied: `x = ${bFormatted} ± √(${b}² - 4 * ${a} * ${c}) / 2 * ${a}`,
    roots: [
      {
        real: x1,
        fractional:
          Math.sqrt(delta) % 1 !== 0
            ? `(${bFormatted} + √${delta}) / ${2 * a}`
            : `${-b + FtMath.sqrt(delta)} / ${2 * a}`,
        isIrrational: x1 % 1 !== 0,
      },
      {
        real: x2,
        fractional:
          Math.sqrt(delta) % 1 !== 0
            ? `(${bFormatted} - √${delta}) / ${2 * a}`
            : `${-b - FtMath.sqrt(delta)} / ${2 * a}`,
        isIrrational: x2 % 1 !== 0,
      },
    ],
    explanation: "Discriminant Δ is positive, there are two solutions",
  };
}
