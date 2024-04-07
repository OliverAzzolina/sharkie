class MoveableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  health = 100;
  lastHit = 0;
  speedY = 0;
  accleration = 1;
  offset = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  };

  /**
   * Applies gravity to the games physics.
   */
  applyGravitiy() {
    setInterval(() => {
      if (this.speed > 0) {
        this.y += this.speedY;
        this.speedY -= this.accleration;
      }
    }, 1000 / 25);
  };

  /**
   * Plays the Animation of all moveable Objects.
   * 
   * @param {Array} images - of the Object
   */
  playAnimation(images) {
    let i = this.currentImage % images.length; // let i = 0 % 0
    // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5,...
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  };

  /**
   * Lets enemies move left.
   */
  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  };

  /**
   * Checks Colliding between Objects.
   * 
   * @param {Object} mo 
   * @returns 
   */
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  };

  /**
   * Sets the Damage to endboss when hit by poisoned bubble.
   */
  poisonHit() {
    if (this instanceof Endboss) {
      this.health -= 20;
      world.bossHealthbar.setPercentage(this.health);
      if (this.health < 0) {
        this.health = 0;
      } else {
        this.lastHit = new Date().getTime();
      }
    };
  };

  /**
   * Sets the damage to enemies when hit by normal bubbles
   */
  hit() {
    this.health -= 5;
    if (this.health < 0) {
      this.health = 0;
    } else {
      this.lastHit = new Date().getTime();
    };
    if (this instanceof Endboss) {
      world.bossHealthbar.setPercentage(this.health);
    };
    if (this instanceof Fish || this instanceof JellyFish) {
      this.health = 0;
    };
  };

  /**
   * Hurting time
   * 
   * @returns 
   */
  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit; // differenz millisekunden
    timePassed = timePassed / 1000;
    return timePassed < 2;
  };

  /**
   * If object is dead.
   * 
   * @returns Death
   */
  isDead() {
    return this.health == 0;
  };
};
