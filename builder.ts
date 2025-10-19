class Computer {
  cpu?: string;
  ram?: string;
  storage?: string;
  toString() {
    return `CPU:${this.cpu},RAM:${this.ram},depolama:${this.storage}`;
  }
}
class ComputerBuilder {
  private computer = new Computer();

  addCPU(cpu: string) {
    this.computer.cpu = cpu;
    return this;
  }
  addRAM(ram: string) {
    this.computer.ram = ram;
    return this;
  }
  addStorage(storage: string) {
    this.computer.storage = storage;
    return this;
  }
  build() {
    return this.computer;
  }
}
const mac = new ComputerBuilder()
  .addCPU("macintosh")
  .addRAM("16GB")
  .addStorage("1TB")
  .build();

console.log(mac.toString());
