class SmartCalculator {
  constructor(initialValue) {
    this.calc = initialValue;
    return this;
  }

  add(number) {
    this.calc = this.calc + '+' + number;
    return this;
  }
  
  subtract(number) {
    this.calc = this.calc + '-' + number;
    return this;
  }

  multiply(number) {
    this.calc = this.calc + '*' + number;
    return this;
  }

  devide(number) {
    this.calc = this.calc + '/' + number;
    return this;
  }

  pow(number) {
    this.calc = this.calc + '**' + number;
    return this;
  }
  toString() {
  return eval(this.calc);
  }
}
module.exports = SmartCalculator;
