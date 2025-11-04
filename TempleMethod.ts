abstract class Beverage {
  prepare() {
    this.boilWater();
    this.brew();
    this.pour();
  }
  boilWater() { console.log("Su kaynatıldı"); }
  pour() { console.log("Bardağa koyuldu"); }
  abstract brew(): void;
}

class Tea extends Beverage {
  brew() { console.log("Çay demlendi"); }
}

class Coffee extends Beverage {
  brew() { console.log("Kahve hazırlandı"); }
}

new Tea().prepare();
new Coffee().prepare();
