class Product {
  constructor() {
    console.log(`Product class created`);
  }
}

class ConcreteProduct extends Product {
  constructor() {
    super()
    console.log(`ConcreteProduct class created`);
  }
}

//

class Creator {
  constructor() {
    console.log(`Creator class created`);    
  }

  FactoryMethod() {}

  AnOperation() {
    console.log(`AnOperation()`);
    this.product = this.FactoryMethod()
    console.log(this.product instanceof ConcreteProduct);
  }
}

class ConcreteCreator extends Creator {
  constructor() {
    super()
    console.log(`ConcreteCreator class created`);
  }

  FactoryMethod() {
    return new ConcreteProduct()
  }
}

function init() {
  const factory = new ConcreteCreator()
  factory.AnOperation()
}

init()

