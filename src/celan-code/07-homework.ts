(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    public id: string;
    public type: HtmlType;
    constructor(id: string, type: HtmlType) {
      this.id = id;
      this.type = type;
    }
  }

  class InputAttributes {
    public value: string;
    public placeholder: string;
    constructor(value: string, placeholder: string) {
      this.value = value;
      this.placeholder = placeholder;
    }
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement

  interface InputElementProperties {
    value: string;
    placeholder: string;
    id: string;
  }

  class InputElement {
    public htmlElement: HtmlElement;
    public atributes: InputAttributes;
    public events: InputEvents;
    constructor(value: string, placeholder: string, id: string) {
      this.htmlElement = new HtmlElement(id, "input");
      this.atributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
    }
  }

  const nameField = new InputElement("Fernando", "Enter first name", "txtName");

  console.log({ nameField });
})();
