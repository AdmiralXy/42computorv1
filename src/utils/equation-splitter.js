export default function splitEquation(equation) {
  if (!equation.includes("=")) {
    throw new SyntaxError("Equation must contain an equals sign");
  }

  equation = equation.replace(/\s/g, "");

  let equationSlices = equation.split("=");

  if (
    equationSlices.length !== 2 ||
    equationSlices[0] === "" ||
    equationSlices[1] === ""
  ) {
    throw new SyntaxError(
      "Equation must contain only one equals sign and two sides"
    );
  }

  let leftSide = equationSlices[0];
  let rightSide = equationSlices[1];

  let leftSideTerms = leftSide.split(/(?=[-+])/);
  let rightSideTerms = rightSide.split(/(?=[-+])/);

  return leftSideTerms.concat(["="], rightSideTerms);
}
