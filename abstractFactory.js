// Abstract Factory is a design pattern that provides an interface for creating families of related or
// dependent objects without specifying their concrete classes. It allows the client code to create objects
// without knowing the specific implementation details, promoting loose coupling and flexibility.

// let's consider creating buttons and textboxes for different operating systems (OS) using the Abstract Factory pattern.
//  We will create an abstract factory interface called IFactory, concrete factory classes WindowsFactory and
//  MacFactory, and product classes Button and TextBox
// for each OS.

//Abstract Factory Interface
class IFactory {
  createButton() {}
  createTextBox() {}
}
//Concrete Factory for Windows
class WindowsFactory extends IFactory {
  createButton() {
    return new WindowsButton();
  }
  createTextBox() {
    return new WindowsTextBox();
  }
}
//Concrete Factory for Mac
class MacFactory extends IFactory {
  createButton() {
    return new MacButton();
  }
  createTextBox() {
    return new MacTextBox();
  }
}

//Abstract Product - Button
class IButton {
  render() {}
}
// Concrete Product for Windows - Button
class WindowsButton extends IButton {
  render() {
    console.log("Rendering a Windows Button");
  }
}
// Concrete Product for Mac - Button
class MacButton extends IButton {
  render() {
    console.log("Rendering a Mac Button");
  }
}

//Abstract Product - TextBox
class ITextBox {
  render() {}
}
// Concrete Product for Windows - TextBox
class WindowsTextBox extends ITextBox {
  render() {
    console.log("Rendering a Windows textbox");
  }
}
// Concrete Product for Mac - TextBox
class MacTextBox extends ITextBox {
  render() {
    console.log("Rendering a Mac textbox");
  }
}

//GUI Factory
class GUIAbstractFactory {
  CreateFactory(osType) {
    switch (osType) {
      case "windows":
        return new WindowsFactory();
      case "mac":
        return new MacFactory();
      default:
        throw new Error(`Unsupported OS: ${osType}`);
    }
  }
}

// Client Code
function createUI(guiFactory, osType) {
  const factory = guiFactory.CreateFactory(osType);
  const button = factory.createButton();
  button.render();
  const textBox = factory.createTextBox();
  textBox.render();
}
const guiFactory = new GUIAbstractFactory();
createUI(guiFactory, "windows");
createUI(guiFactory, "mac");
