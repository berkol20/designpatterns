class a {
  private static instance: a;
  private constructor(public ayar = "varsayılan") {}

  static getInstance(): a {
    if (!a.instance) {
      a.instance = new a();
    }
    return a.instance;
  }
}
const c1 = a.getInstance();
const c2 = a.getInstance();

c1.ayar = "karanlık mod";
console.log(c2.ayar);
