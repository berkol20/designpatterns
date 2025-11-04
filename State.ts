interface State { handle(): void; }

class OnState implements State { handle() { console.log("Cihaz açık"); } }
class OffState implements State { handle() { console.log("Cihaz kapalı"); } }

class Device {
  constructor(private state: State) {}
  setState(state: State) { this.state = state; }
  press() { this.state.handle(); }
}

const device = new Device(new OffState());
device.press();
device.setState(new OnState());
device.press();
