Function.prototype.inherits = function (parent) {
    // function Surrogate() {}
    // Surrogate.prototype = parent.prototype;
    // this.prototype = new Surrogate();
    // this.prototype.constructor = this;
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

function MovingObject() { 
}

function Ship() { 
}
Ship.inherits(MovingObject);

function Asteroid() { 
}
Asteroid.inherits(MovingObject);

MovingObject.prototype.moves = function () {
    console.log("This object moves.");
};
Ship.prototype.isShip = function () {
    console.log("I am ship.");
};
Asteroid.prototype.isAsteroid = function () {
    console.log("I am asteroid.");
};

const movObj = new MovingObject();
const ship = new Ship();
const ast = new Asteroid();

movObj.moves();
ship.moves();
ast.moves();
ship.isShip();
try {ast.isShip();} catch (StandardError) {
    console.log("asteroid does not have isShip method");
}
try { movObj.isShip(); } catch (StandardError) {
    console.log("moving object does not have isShip method");
}
ship.prototype instanceof MovingObject ? console.log("ship prototype is an instance of movObj") :
    console.log("ship prototype is not an instance of movObj");

ast.prototype instanceof MovingObject ? console.log("asteroid prototype is an instance of movObj") :
    console.log("asteroid prototype is not an instance of movObj");