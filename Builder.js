class Director {
  constructor() {
    this.structure = ['Maze', 'Wall', 'Door'];
    console.log(`Director class created`);
  }

  Construct() {
    for (let i in this.structure) {
      const concreteBuilder = new ConcreteBuilder()
      concreteBuilder.BuildPart(this.structure[i])
      concreteBuilder.GetResult()
    }
  }

}

class Builder {
  constructor() {
    console.log(`Builder class created`);
  }

  BuildPart(rawmaterial) {}
}

class ConcreteBuilder extends Builder {
  constructor() {
    super()
    console.log(`ConcreteBuilder class created`);
  }

  BuildPart(rawmaterial) {
    console.log(`ConcreteBuilder BuildPart(${rawmaterial})`);
    this.product = new Product(rawmaterial)    
  }

  GetResult() {
    console.log(JSON.stringify(this.product));
    return this.product    
  }
}

class Product {
  constructor(material) {
    console.log(`Product class created with ${material}`);
    this.data = material
  }
}

function init() {
  const director = new Director()
  director.Construct()  
}

init()
