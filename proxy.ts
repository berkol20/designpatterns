//////////?????????


interface Image {
  display(): void;
}

class RealImage implements Image {
  constructor(private filename: string) {
    this.loadFromDisk();
  }

  loadFromDisk() {
    console.log("Diskten yükleniyor:", this.filename);
  }

  display() {
    console.log("Gösteriliyor:", this.filename);
  }
}

class ProxyImage implements Image {
  private realImage: RealImage | null = null;

  constructor(private filename: string) {}

  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Kullanım
const image1 = new ProxyImage("foto.jpg");
image1.display(); // gerçek resim yüklenir ve gösterilir
image1.display(); // önbellekten gösterilir

