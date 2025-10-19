interface Coffee {
  cost(): number;
}

class BasicCoffee implements Coffee {
  cost() { return 10; }
}

class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}
  cost() { return this.coffee.cost() + 5; }
}

class SugarDecorator implements Coffee {
  constructor(private coffee: Coffee) {}
  cost() { return this.coffee.cost() + 2; }
}

let myCoffee: Coffee = new BasicCoffee();
myCoffee = new MilkDecorator(myCoffee);
myCoffee = new SugarDecorator(myCoffee);

console.log("Toplam fiyat:", myCoffee.cost());

