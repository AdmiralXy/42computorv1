export default function parseTerm(term) {
  if (term.match(/x{2,}/) || term.match(/\^{2,}/) || term.match(/[-+]{2,}/)) {
    throw new SyntaxError(`Invalid term: ${term}`);
  }

  const numberPattern = /^-?\+?-?\d+(\.\d+)?$/;
  const numberWithXPattern = /^\+?-?\d+(\.\d+)?x$/;
  const numberWithXAndExponentPattern = /^-?\+?\d+(\.\d+)?x\^\d+$/;
  const numberWithXAndMpAndExpPattern = /^-?\+?\d+(\.\d+)?\*?[xX]\^\d+?$/;
  const xPattern = /^-?\+?x$/;
  const xWithExponentPattern = /^-?\+?x\^\d+$/;

  const numberMatch = term.match(numberPattern);
  const numberWithXMatch = term.match(numberWithXPattern);
  const numberWithXAndExponentMatch = term.match(numberWithXAndExponentPattern);
  const numberWithXAndMpAndExpMatch = term.match(numberWithXAndMpAndExpPattern);
  const xMatch = term.match(xPattern);
  const xWithExponentMatch = term.match(xWithExponentPattern);

  if (numberMatch) {
    return { coefficient: Number(term), exponent: 0 };
  } else if (numberWithXMatch) {
    return {
      coefficient: Number(numberWithXMatch[0].split("x")[0]),
      exponent: 1,
    };
  } else if (numberWithXAndExponentMatch) {
    const [coefficient, exponent] = numberWithXAndExponentMatch[0].split("x^");
    return {
      coefficient: Number(coefficient),
      exponent: Number(exponent),
    };
  } else if (numberWithXAndMpAndExpMatch) {
    let coefficient, exponent;
    if (numberWithXAndMpAndExpMatch[0].includes("X")) {
      [coefficient, exponent] = numberWithXAndMpAndExpMatch[0].split("*X^");
    } else {
      [coefficient, exponent] = numberWithXAndMpAndExpMatch[0].split("*x^");
    }
    return {
      coefficient: Number(coefficient),
      exponent: Number(exponent),
    };
  } else if (xMatch) {
    if (xMatch[0] === "-x") {
      return { coefficient: -1, exponent: 1 };
    }
    return { coefficient: 1, exponent: 1 };
  } else if (xWithExponentMatch) {
    if (xWithExponentMatch[0].includes("-x")) {
      return {
        coefficient: -1,
        exponent: Number(xWithExponentMatch[0].split("^")[1]),
      };
    }
    return {
      coefficient: 1,
      exponent: Number(xWithExponentMatch[0].split("^")[1]),
    };
  }

  throw new SyntaxError(`Invalid term: ${term}`);
}
