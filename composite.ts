
/////////????????

interface IFileSystem {
  showName(): void;
}

class SimpleFile implements IFileSystem {
  constructor(private name: string) {}

  showName(): void {
    console.log(this.name);
  }
}

class SimpleFolder implements IFileSystem {
  private children: IFileSystem[] = [];

  constructor(private name: string) {}

  add(child: IFileSystem): void {
    this.children.push(child);
  }

  showName(): void {
    console.log(this.name);
    this.children.forEach(child => child.showName());
  }
}

// Kullanım
const file1 = new SimpleFile("rapor.pdf");
const file2 = new SimpleFile("notlar.txt");

const subFolder = new SimpleFolder("Projeler");
subFolder.add(new SimpleFile("proje1.docx"));
subFolder.add(new SimpleFile("proje2.xlsx"));

const mainFolder = new SimpleFolder("Belgeler");
mainFolder.add(file1);
mainFolder.add(file2);
mainFolder.add(subFolder);

mainFolder.showName();
