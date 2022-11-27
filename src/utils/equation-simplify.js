export default function simplifyEquation(equation) {
  let simplifiedEquation = [];
  let isZeroDegree = !equation.find((term) => term.exponent > 0);

  while (equation.length > 0) {
    const termsWithSamePower = equation.filter(
      (term) => term.exponent === equation[0].exponent
    );

    const coefficient = termsWithSamePower.reduce((acc, term) => {
      return acc + term.coefficient;
    }, 0);

    simplifiedEquation.push({
      coefficient,
      exponent: equation[0].exponent,
    });

    equation = equation.filter(
      (term) => term.exponent !== equation[0].exponent
    );
  }

  simplifiedEquation = simplifiedEquation.filter(
    (term) => term.coefficient !== 0
  );

  if (simplifiedEquation.length === 0) {
    if (isZeroDegree) {
      return [{ coefficient: 0, exponent: 0 }];
    } else {
      return [{ coefficient: 0, exponent: 1 }];
    }
  }

  return simplifiedEquation.sort((a, b) => {
    return b.exponent - a.exponent;
  });
}
