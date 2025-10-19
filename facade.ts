class CPU {
  start() {
    console.log("cpu başlatıldı");
  }
}
class hafıza {
  yukle() {
    console.log("bellek yüklendi");
  }
}
class data {
  oku() {
    console.log("veriyi oku");
  }
}

class PCFacade {
  private cpu = new CPU();
  private memory = new hafıza();
  private harddrive = new data();

  baslatPC() {
    console.log("bilgisayar başlatılıyot");
    this.cpu.start();
    this.memory.yukle();
    this.harddrive.oku();
    console.log("bilgisayar hazır");
  }
}

const pc = new PCFacade();
pc.baslatPC();
