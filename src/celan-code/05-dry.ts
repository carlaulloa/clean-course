// DONT REPEAT YOURSELF

// Avoid code duplicity
// Centralize process
// Should make refactoring

type Size = "" | "S" | "M" | "L" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      const typeOf = typeof this[key];
      switch(typeOf) {
        case 'string':
            if(!(<string><unknown>this[key]).length) {
              throw Error(`${this[key]} is empty`);
            }
            break;
        case 'number':
              if((<number><unknown>this[key]) <= 0) {
                throw Error(`${this[key]} is empty`);
              }
              break;
        default:
          throw Error(`typeof ${this[key]} is empty`);
      }
    }
    return true;
  }

  toString(): string | undefined {
    if(!this.isProductReady) {
      return;
    }
    if (!this.name.length) {
      throw Error("Name is empty");
    }
    if (this.price <= 0) {
      throw Error("Name is empty");
    }
    if (!this.size.length) {
      throw Error("Name is empty");
    }
    return `${this.name} ${this.price} ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("New large pants", 10, "L");
  console.log(bluePants.toString());
})();
