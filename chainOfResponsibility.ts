class Handler {
  next?: Handler;
  setNext(next: Handler) {
    this.next = next;
  }

  handle(request: string) {
    if (this.next) this.next.handle(request);
  }
}

class First extends Handler {
  handle(request: string) {
    if (request === "A") console.log("First handled A");
    else super.handle(request);
  }
}
class Second extends Handler {
  handle(request: string) {
    if (request === "B") console.log("Second handle B");
    else super.handle(request);
  }
}

const first = new First();
const second = new Second();
first.setNext(second);

first.handle("A");
first.handle("B");
first.handle("C");
