abstract class Rapor {
  abstract olustur(): string;
}

class PDFRapor extends Rapor {
  olustur() {
    return "PDF raporu oluşturuldu.";
  }
}
class ExcelRapor extends Rapor {
  olustur() {
    return "Excel Rporu oluşturuldu.";
  }
}

abstract class RaporCreator {
  abstract factoryMethod(): Rapor;

  hazirla(): void {
    const r = this.factoryMethod();
    console.log(r.olustur());
  }
}
class PDFRaporCreator extends RaporCreator {
  factoryMethod() {
    return new PDFRapor();
  }
}
class ExcelRaporCreator extends RaporCreator {
  factoryMethod() {
    return new ExcelRapor();
  }
}

new PDFRaporCreator().hazirla();
new ExcelRaporCreator().hazirla();

//////////////////////////////////////////////
abstract class Bildirim {
  abstract gonder(): string;
}

class SMSBildirim extends Bildirim {
  gonder() {
    return "SMS bildirimi gönderildi.";
  }
}

class EmailBildirim extends Bildirim {
  gonder() {
    return "Email bildirimi gönderildi.";
  }
}

class PushBildirim extends Bildirim {
  gonder() {
    return "Push bildirimi gönderildi.";
  }
}

abstract class BildirimCreator {
  abstract factoryMethod(): Bildirim;

  islem(): void {
    const bildirim = this.factoryMethod();
    console.log(bildirim.gonder());
  }
}

class SMSBildirimCreator extends BildirimCreator {
  factoryMethod() {
    return new SMSBildirim();
  }
}

class EmailBildirimCreator extends BildirimCreator {
  factoryMethod() {
    return new EmailBildirim();
  }
}

class PushBildirimCreator extends BildirimCreator {
  factoryMethod() {
    return new PushBildirim();
  }
}

new SMSBildirimCreator().islem();
new EmailBildirimCreator().islem();
new PushBildirimCreator().islem();
