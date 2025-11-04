interface Visitor {
  visitDog(dog: Dog): void;
  visitCat(cat: Cat): void;
}

interface Animal {
  accept(v: Visitor): void;
}

class Dog implements Animal {
  accept(v: Visitor) { v.visitDog(this); }
}

class Cat implements Animal {
  accept(v: Visitor) { v.visitCat(this); }
}

class SoundVisitor implements Visitor {
  visitDog() { console.log("Hav hav"); }
  visitCat() { console.log("Miyav"); }
}

const animals: Animal[] = [new Dog(), new Cat()];
const visitor = new SoundVisitor();

animals.forEach(a => a.accept(visitor));
