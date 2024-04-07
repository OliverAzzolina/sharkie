class Endboss extends MoveableObject {
  IMAGES_IDLE = [
    "./img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];

  IMAGES_SPAWN = [
    "./img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];

  IMAGES_DEAD = [
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];

  IMAGES_HURT = [
    "./img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "./img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "./img/2.Enemy/3 Final Enemy/Hurt/3.png",
    "./img/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];

  IMAGES_ATTACK = [
    "./img/2.Enemy/3 Final Enemy/Attack/1.png",
    "./img/2.Enemy/3 Final Enemy/Attack/2.png",
    "./img/2.Enemy/3 Final Enemy/Attack/3.png",
    "./img/2.Enemy/3 Final Enemy/Attack/4.png",
    "./img/2.Enemy/3 Final Enemy/Attack/5.png",
    "./img/2.Enemy/3 Final Enemy/Attack/6.png",
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_SPAWN);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_ATTACK);
    this.x = 3800;
    this.y = 0;
    this.width = 450;
    this.height = 450;
    this.animate();
    this.speed = 2;
  }

  offset = {
    left: 0,
    top: 150,
    right: 5,
    bottom: 50,
  };

  bossIsDead = false;

  /**
   * Plays the Endboss Animations
   */
  animate() {
    let i = 0;
    let spawnInterval = setInterval(() => {
      if (world) {
        if (world.isBossSpawned) {
          this.playSpawnAnimation(spawnInterval, i);
          i++;
        }
      }
    }, 200);
  }

  /**
   * Plays the Endboss spawn animation
   *
   * @param {id} spawnInterval - id of spawn interval
   * @param {number} i - number of spawn images
   */
  playSpawnAnimation(spawnInterval, i) {
    if (i < this.IMAGES_SPAWN.length - 1) {
      this.playAnimation(this.IMAGES_SPAWN);
    } else {
      clearInterval(spawnInterval);
      this.bossAnimation();
    }
  }

  /**
   * Checks if Character is near.
   *
   * @returns TRUE, if Character is near the Endboss
   */
  characterIsNear() {
    return this.x - 500 < world.character.x;
  }

  /**
   * Checks if character is far.
   *
   * @returns True if Character is far.
   */
  characterIsFar() {
    return this.x - 500 > world.character.x;
  }

  /**
   * Plays Boss Attack Animation.
   */
  bossAttacks() {
    this.playAnimation(this.IMAGES_ATTACK);
    this.speed = 4;
  }

  /**
   * Plays Boss Swimming Animation.
   */
  bossSwims() {
    this.playAnimation(this.IMAGES_IDLE);
    this.speed = 2;
  }

  /**
   * Checks if Boss can Attack or Swim
   */
  checkForBossAttack() {
    if (this.characterIsNear()) {
      this.bossAttacks();
    } else if (this.characterIsFar()) {
      this.bossSwims();
    }
  }

  /**
   * Plays Boss Dying Animation
   *
   * @param {id} aliveInterval - Boss Alive Interval ID
   * @param {number} i - Number of Dead images
   */
  playBossDeadAnimation(aliveInterval, i) {
    if (i < this.IMAGES_DEAD.length - 1) {
      this.playAnimation(this.IMAGES_DEAD);
    } else {
      clearInterval(aliveInterval);
      this.loadImage("./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png");
      this.floatUp();
      this.bossIsDead = true;
    }
  }

  /**
   * Plays Boss is hurt Animation
   */
  playBossHurtAnimation() {
    if (this.isHurt()) {
      this.playAnimation(this.IMAGES_HURT);
    }
  }

  /**
   * Plays Boss Alive Animations.
   */
  bossAnimation() {
    let i = 0;
    let aliveInterval = setInterval(() => {
      this.checkForBossAttack();
      if (this.isDead()) {
        this.playBossDeadAnimation(aliveInterval, i);
        i++;
      } else {
        this.playBossHurtAnimation();
      }
      this.y = world.character.y - 170;
    }, 200);
    this.moveLeft();
  }

  /**
   * Plays floating Animation if boss is dead.
   */
  floatUp() {
    setInterval(() => {
      this.y -= 5;
      this.speed = 0;
    }, 200);
  }
}
