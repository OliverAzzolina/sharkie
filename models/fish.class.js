class Fish extends MoveableObject {
  offset = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 15,
  };

  constructor() {
    super();
    this.height = 80;
    this.width = 80;
    this.speed = 0.3 + Math.random() * 0.2;
  };

  /**
   * Plays Fish Animations.
   */
  animate() {
    setInterval(() => this.playFishAnimations(), 200);
    this.moveLeft();
  };

  /**
   * Plays Fish Dying or Alive Animations.
   */
  playFishAnimations(){
    if (this.isDead()) {
      this.playFishIsDeadAnimation();
    } else {
      this.playFishIsAliveAnimation()
    }
  }

  /**
   * Plays Fish Dying Animation.
   */
  playFishIsDeadAnimation(){
    this.playAnimation(this.IMAGES_FISH_DEAD);
    this.floatingDead();
  };

  /**
   * Plays floating Animation when Fish is dead.
   */
  floatingDead() {
    this.y += 15;
    this.x += 2;
    this.speed = 0;
  };

  /**
   * Fish Swimming Animation.
   */
  playFishIsAliveAnimation(){
    this.playAnimation(this.IMAGES_FISH_SWIMMING);
    this.checkFishAttack();
  };

  /**
   * Checks if Character is near for attacking it.
   */
  checkFishAttack() {
    if (world) {
      if (this.x - 500 < world.character.x) {
        this.speed = 3;
        this.playAnimation(this.IMAGES_FISH_ATTACK);
      }
    }
  };
};
