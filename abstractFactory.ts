interface Button {
  render(): void;
}
interface Checkbox {
  check(): void;
}

class ModernButton implements Button {
  render() {
    console.log("Modern buton oluşturuldu.");
  }
}
class ModernCheckbox implements Checkbox {
  check() {
    console.log("Modern checkbox işaretlendi.");
  }
}

class ClassicButton implements Button {
  render() {
    console.log("Klasik buton oluşturuldu.");
  }
}
class ClassicCheckbox implements Checkbox {
  check() {
    console.log("Klasik checkbox işaretlendi.");
  }
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class ModernFactory implements GUIFactory {
  createButton() {
    return new ModernButton();
  }
  createCheckbox() {
    return new ModernCheckbox();
  }
}

class ClassicFactory implements GUIFactory {
  createButton() {
    return new ClassicButton();
  }
  createCheckbox() {
    return new ClassicCheckbox();
  }
}

function buildUI(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.render();
  checkbox.check();
}

buildUI(new ModernFactory());
buildUI(new ClassicFactory());
/////////////////////////////////////////
