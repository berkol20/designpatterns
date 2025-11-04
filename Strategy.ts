interface Strategy {
  execute(a: number, b: number): number;
}

class Add implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class Multiply implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

class Calculator {
  constructor(private strategy: Strategy) {}

  setStrategy(s: Strategy) {
    this.strategy = s;
  }

  calculate(a: number, b: number) {
    console.log(this.strategy.execute(a, b));
  }
}

const calc = new Calculator(new Add());
calc.calculate(3, 5);  // 8
calc.setStrategy(new Multiply());
calc.calculate(3, 5);  // 15
