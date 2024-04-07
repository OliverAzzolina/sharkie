class JellyFish extends MoveableObject {
  offset = {
    left: 0,
    top: 5,
    right: 5,
    bottom: 5,
  };

  constructor() {
    super();
    this.height = 80;
    this.width = 80;
  };

  /**
   * Plays Jellyfish Animations
   */
  animate() {
    setInterval(() => this.playJellyAnimations(), 200);
    this.setJellyMovement();
  };
  
  /**
   * Checks if Jellyfish is dead or alive.
   */
  playJellyAnimations() {
    if (this.isDead()) {
      this.playJellyIsDeadAnimation();
    } else {
      this.playJellyIsAliveAnimation();
    }
  };

  /**
   * Plays Jellyfish dying Animation.
   */
  playJellyIsDeadAnimation() {
    this.playAnimation(this.IMAGES_JELLY_DEAD);
    this.floatingDead();
  };

  /**
   * Floating after death.
   */
  floatingDead() {
    this.y -= 25;
    this.x += 15;
  };

  /**
   * Swimming Animation.
   */
  playJellyIsAliveAnimation() {
    this.playAnimation(this.IMAGES_JELLY_SWIMMING);
  };

  /**
   * Sets the Jellyfish movements, from right to left and floating
   */
  setJellyMovement() {
    this.floating();
    this.moveLeft();
  };

  /**
   * Generates the floating up and down of the Jellyfishes.
   */
  floating() {
    setInterval(() => {
      this.amplitude = 9 + Math.random() * 9;
      this.frequency = 9 + Math.random() * 9;
      this.y += this.amplitude * Math.sin(2 * Math.PI * this.frequency);
    }, 300);
  };
};
