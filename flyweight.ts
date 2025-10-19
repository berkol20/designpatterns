class Uclu {
  constructor(public name: string, public color: string) {}

  a(x: number, y: number): void {
    console.log(
      `Ağaç türü: ${this.name}, renk: ${this.color}, konum: (${x},${y})`
    );
  }
}
class UcluFactory {
  private pool: { [key: string]: Uclu } = {};

  getUclu(name: string, color: string): Uclu {
    const key = name + color;
    if (!this.pool[key]) {
      this.pool[key] = new Uclu(name, color);
    }
    return this.pool[key];
  }
}
const factory = new UcluFactory();
const q1 = factory.getUclu("meşe", "yeşil");
const q2 = factory.getUclu("meşe", "yeşil"); // aynı nesne paylaşılır

q1.a(10, 20);
q2.a(15, 25);
