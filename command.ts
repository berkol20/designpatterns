interface Command { execute():void;}

class Light{
    on() {console.log("ışıklar açık");}
    off(){console.log("ışıklar kapandı");}
}

class TurnOn implements Command{
    constructor(private light:Light){}
    execute() { this.light.on()};

}
class TurnOff implements Command{
    constructor(private light:Light){}
    execute() {this.light.off()}
        
}
const light = new Light();
const onCmd = new TurnOn(light);
const offCmd = new TurnOff(light);

onCmd.execute();
offCmd.execute();