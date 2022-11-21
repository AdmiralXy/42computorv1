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
}
