class ThrowableObject extends MoveableObject {
  
    constructor(x, y) {
    super();
    this.height = 50;
    this.width = 50;
    this.x = x;
    this.y = y;
    this.throw();
  };

  offset = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  };

  /**
   * If enemy gets hit by bubble, it gets set out of FOV
   */
  trapped() {
    this.x = 10000;
    this.y = 10000;
  };

  /**
   * Throw bubble right.
   */
  throwRight() {
    this.applyGravitiy();
    setInterval(() => {
      this.x += 60;
      this.y -= 5;
    }, 60);
  };

  /**
   * Throw bubble left.
   */
  throwLeft() {
    this.applyGravitiy();
    setInterval(() => {
      this.x -= 60;
      this.y += 2;
    }, 60);
  };

  /**
   * Checks the throw direction
   */
  throw() {
    if (!world.character.otherDirection) {
      this.throwRight();
    } else {
      this.throwLeft();
    }
  };
};
