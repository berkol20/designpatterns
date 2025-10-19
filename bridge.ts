
interface kumanda{
    ac():void;
    kapat():void;
}
class TV implements kumanda{
    ac(){console.log("tv açıldı");}
    kapat(){console.log("tv kapanıyor");}

}
class kontrol{
    constructor(protected kumanda:kumanda){}
    guc() {
        console.log("güç tuşuna basıldı");
        this.kumanda.ac();
    }
}

const tv= new TV()
const Kontrol=new kontrol(tv)
Kontrol.guc()

