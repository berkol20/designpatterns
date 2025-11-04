class Editor {
  private content = "";
  save() { return new Memento(this.content); }
  restore(m: Memento) { this.content = m.getContent(); }
  type(words: string) { this.content += " " + words; }
  show() { console.log(this.content.trim()); }
}

class Memento {
  constructor(private content: string) {}
  getContent() { return this.content; }
}

const editor = new Editor();
editor.type("Merhaba");
const saved = editor.save();
editor.type("Dünya");
editor.show();
editor.restore(saved);
editor.show();
