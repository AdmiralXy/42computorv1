export default class FtMath {
  static sqrt(number) {
    if (number < 0) {
      return null;
    } else if (number === 0) {
      return 0;
    }

    let lo = this.min(1, number),
      hi = this.max(1, number),
      mid;

    while (100 * lo * lo < number) lo *= 10;
    while (0.01 * hi * hi > number) hi *= 0.1;

    for (let i = 0; i < 100; i++) {
      mid = (lo + hi) / 2;
      if (mid * mid === number) return mid;
      if (mid * mid > number) hi = mid;
      else lo = mid;
    }
    return mid;
  }

  static max(number1, number2) {
    return number1 > number2 ? number1 : number2;
  }

  static min(number1, number2) {
    return number1 > number2 ? number2 : number1;
  }

  static formatFraction(numerator, denominator) {
    const result = numerator / denominator;
    if (!this.isIrrational(result)) {
      return result.toString();
    } else if (this.isIrrational(numerator) || this.isIrrational(denominator)) {
      return result.toFixed(2).toString();
    }
    return `${numerator} / ${denominator}`;
  }

  static isIrrational(number) {
    return number % 1 !== 0;
  }

  static formatCoefficients(a, b, c) {
    const aIsIrrational = this.isIrrational(a);
    const bIsIrrational = this.isIrrational(b);
    const cIsIrrational = this.isIrrational(c);

    if (aIsIrrational || bIsIrrational || cIsIrrational) {
      let aDecimalLength = this.getDecimalPartLength(a);
      let bDecimalLength = this.getDecimalPartLength(b);
      let cDecimalLength = this.getDecimalPartLength(c);

      let decimalLength = this.max(
        aDecimalLength,
        bDecimalLength,
        cDecimalLength
      );

      a *= Math.pow(10, decimalLength);
      b *= Math.pow(10, decimalLength);
      c *= Math.pow(10, decimalLength);
    }
    let divisor = this.gcd(this.gcd(a, b), c);
    return [a / divisor, b / divisor, c / divisor];
  }

  static gcd(a, b) {
    if (b) {
      return this.gcd(b, a % b);
    } else {
      return this.abs(a);
    }
  }

  static getDecimalPartLength(number) {
    const decimalPart = (number + "").split(".")?.[1];
    return decimalPart ? decimalPart.length : 0;
  }

  static abs(number) {
    return number > 0 ? number : -number;
  }
}
