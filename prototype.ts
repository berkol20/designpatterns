interface Prototype {
  clone(): this;
}
class OyunKarakteri implements Prototype {
  constructor(public isim: string, public guc: number) {}
  clone(): this {
    const kopya = (Object.assign(Object.getPrototypeOf(this)), this);
    return kopya;
  }
}
const orijinal = new OyunKarakteri("barbar", 98);
const kopya = orijinal.clone();
kopya.isim = "klon barbar";

console.log(orijinal);
console.log(kopya);
