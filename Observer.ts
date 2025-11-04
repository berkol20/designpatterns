interface Observer {
  update(msg: string): void;
}

class Subject {
  private observers: Observer[] = [];

  attach(o: Observer) {
    this.observers.push(o);
  }

  notify(msg: string) {
    this.observers.forEach((o) => o.update(msg));
  }
}

class UserObserver implements Observer {
  constructor(public name: string) {}

  update(msg: string) {
    console.log(`${this.name} aldı: ${msg}`);
  }
}

const channel = new Subject();
channel.attach(new UserObserver("Ali"));
channel.attach(new UserObserver("Ayşe"));

channel.notify("Yeni video yüklendi!");
