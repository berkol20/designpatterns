class eskiSistem {
  printText(text: string) {
    console.log("Yazdırılıyor:", text);
  }
}

interface YeniSistem {
  printPDF(content: string): void;
}

class Adapterrr implements YeniSistem {
  constructor(private eskiSistem: eskiSistem) {}

  printPDF(content: string) {
    console.log("PDF formatına dönüştürülüyor...");
    this.eskiSistem.printText(content);
  }
}

// Kullanım
const eski = new eskiSistem();
const yeni = new Adapterrr(eski);

yeni.printPDF("Merhabaa");
