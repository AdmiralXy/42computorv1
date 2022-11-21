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
  if (equation.length === 1) {
    if (equation[0].coefficient === 0 && equation[0].exponent > 0) {
      return {
        explanation: "x ∈ R",
      };
    } else if (equation[0].coefficient === 0) {
      return {
        explanation: "There are no solutions",
      };
    }
  }

  const a = equation.find((term) => term.exponent === 1)?.coefficient ?? 0;
  const b = equation.find((term) => term.exponent === 0)?.coefficient ?? 0;

  const x = -b / a;
  return {
    formula: "x = -b / a",
    formulaApplied: `x = -${b} / ${a}`,
    sign: x > 0 ? "+" : "-",
    roots: [x],
  };
}

function solveQuadratic(equation) {
  const a = equation.find((term) => term.exponent === 2)?.coefficient ?? 0;
  const b = equation.find((term) => term.exponent === 1)?.coefficient ?? 0;
  const c = equation.find((term) => term.exponent === 0)?.coefficient ?? 0;

  const delta = b ** 2 - 4 * a * c;

  if (delta < 0) {
    return {
      explanation:
        "Discriminant Δ is negative, there are no solutions in real numbers",
    };
  }

  if (delta === 0) {
    const x = -b / (2 * a);
    return {
      formula: "x = (-b ± √Δ) / 2a",
      formulaApplied: `x = (-${b} ± √${delta}) / ${2 * a}`,
      sign: x > 0 ? "+" : "-",
      roots: [x],
      explanation: "Discriminant Δ is zero, there is one solution",
    };
  }

  const x1 = (-b + FtMath.sqrt(delta)) / (2 * a);
  const x2 = (-b - FtMath.sqrt(delta)) / (2 * a);

  return {
    formula: "x = (-b ± √Δ) / 2a",
    formulaApplied: `x = (-${b} ± √${delta}) / ${2 * a}`,
    roots: [x1, x2],
  };
}
