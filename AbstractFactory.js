class AbstractVehicleFactory {
  constructor() {
    console.log(`AbstractVehicleFactory created`);    
  }

  createChasis() {
    return new Chasis()
  }
  createCabin() {
    return new Cabin()
  }
  createEngine() {
    return new Engine()
  }
}

class Chasis {
  constructor() {
    console.log(`Chasis created`);
  }
}

class Cabin {
  constructor() {
    console.log(`Cabin created`);    
  }
}

class Engine {
  constructor() {
    console.log(`Engine created`);    
  }
}


function init() {
  const abstractVehicleFactory = new AbstractVehicleFactory()
  const chasis = abstractVehicleFactory.createChasis()
  const cabin = abstractVehicleFactory.createCabin()
  const engine = abstractVehicleFactory.createEngine()
  
}

init()