class NameIterator {
  private index = 0;
  constructor(private names: string[]) {}

  next(): string | null {
    return this.index < this.names.length ? this.names[this.index++] : null;
  }
}

const iterator = new NameIterator(["Bedo", "Ali", "Emirhan"]);

let currentName: string | null = null;

while ((currentName = iterator.next()) !== null) {
  console.log(currentName);
}
