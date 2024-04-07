class Character extends MoveableObject {
  width = 250;
  height = 250;
  x = 0;
  y = 80;
  speed = 8;
  world;
  health = 200;

  IMAGES_IDLE = [
    "./img/1.Sharkie/1.IDLE/1.png",
    "./img/1.Sharkie/1.IDLE/2.png",
    "./img/1.Sharkie/1.IDLE/3.png",
    "./img/1.Sharkie/1.IDLE/4.png",
    "./img/1.Sharkie/1.IDLE/5.png",
    "./img/1.Sharkie/1.IDLE/6.png",
    "./img/1.Sharkie/1.IDLE/7.png",
    "./img/1.Sharkie/1.IDLE/8.png",
    "./img/1.Sharkie/1.IDLE/9.png",
    "./img/1.Sharkie/1.IDLE/10.png",
    "./img/1.Sharkie/1.IDLE/11.png",
    "./img/1.Sharkie/1.IDLE/12.png",
    "./img/1.Sharkie/1.IDLE/13.png",
    "./img/1.Sharkie/1.IDLE/14.png",
    "./img/1.Sharkie/1.IDLE/15.png",
    "./img/1.Sharkie/1.IDLE/16.png",
    "./img/1.Sharkie/1.IDLE/17.png",
    "./img/1.Sharkie/1.IDLE/18.png",
  ];

  IMAGES_ATTACK_1 = [
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/1.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/2.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/3.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/4.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/5.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/6.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/7.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/8.png",
  ];

  IMAGES_SWIMMING = [
    "./img/1.Sharkie/3.Swim/1.png",
    "./img/1.Sharkie/3.Swim/2.png",
    "./img/1.Sharkie/3.Swim/3.png",
    "./img/1.Sharkie/3.Swim/4.png",
    "./img/1.Sharkie/3.Swim/5.png",
    "./img/1.Sharkie/3.Swim/6.png",
  ];

  IMAGES_DEAD = [
    "./img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];

  IMAGES_HURT = [
    "./img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/5.png",
  ];

  swimming_sound = new Audio("./audio/swimming.mp3");
  attack_1_sound = new Audio("./audio/bubble_attack.mp3");
  died_sound = new Audio("./audio/sound_character_died.mp3");

  offset = {
    left: 50,
    top: 120,
    right: 50,
    bottom: 60,
  };

  /**
   * Loads images and starts animation of the Character.
   */
  constructor() {
    super().loadImage("./img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_ATTACK_1);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.animate();
    this.swimming_sound.volume = 0.3;
    this.attack_1_sound.volume = 0.3;
    this.died_sound.volume = 0.3;
  }

  /**
   * Moves the Character.
   */
  moveCharacter() {
    this.swimming_sound.pause();
    if (this.canMoveRight()) this.moveRight();
    if (this.canMoveLeft()) this.moveLeft();
    this.world.camera_x = -this.x;
    if (this.canMoveUp()) this.moveUp();
    if (this.canMoveDown()) this.moveDown();
    if (this.canShoot()) this.checkIfAtkSoundIsMuted();
  }

  /**
   * Checks if Player muted the sound.
   */
  checkIfSwimSoundIsMuted() {
    if (this.world.soundMuted) {
      this.swimming_sound.pause();
    } else {
      this.swimming_sound.play();
    }
  }

  /**
   * Checks if Player muted the sound.
   */
  checkIfAtkSoundIsMuted() {
    if (this.world.soundMuted) {
      this.attack_1_sound.pause();
    } else {
      this.attack_1_sound.play();
    }
  }

  /**
   * Checks if Character can moves right.
   *
   * @returns TRUE, if the Keyboard Arrow Right is true and Character position x is less than Level End x.
   */
  canMoveRight() {
    return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
  }

  /**
   *Checks if Character can moves left.
   *
   * @returns TRUE, if the Keyboard Arrow LEFT is true and Character position x is more 0.
   */
  canMoveLeft() {
    return this.world.keyboard.LEFT && this.x > 0;
  }

  /**
   * Checks if Character can moves up.
   *
   * @returns TRUE, if the Keyboard Arrow UP is true and Character position y is more than level end y.
   */
  canMoveUp() {
    return this.world.keyboard.UP && this.y > this.world.level.level_end_y;
  }

  /**
   * Checks if Character can moves down.
   *
   * @returns TRUE, if the Keyboard Arrow UP is true and Character position y is less than level end y.
   */
  canMoveDown() {
    return this.world.keyboard.DOWN && this.y < this.world.level.level_end_y2;
  }

  /**
   * Checks if Character can shoot.
   *
   * @returns TRUE if the Keyboard D is true and shotFired is FALSE.
   */
  canShoot() {
    return this.world.keyboard.D && !this.world.shotFired;
  }

  /**
   * Moves the Character to the right.
   */
  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
    this.checkIfSwimSoundIsMuted();
  }

  /**
   * Moves the Character to the left.
   */
  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
    this.checkIfSwimSoundIsMuted();
  }

  /**
   * Moves the Character up.
   */
  moveUp() {
    this.y -= this.speed;
    this.checkIfSwimSoundIsMuted();
  }

  /**
   * Moves the Character to the down.
   */
  moveDown() {
    this.y += this.speed;
    this.checkIfSwimSoundIsMuted();
  }

  /**
   * Let's the Character float up when dead.
   */
  floatUp() {
    setInterval(() => {
      this.y -= 5;
      this.speed = 0;
    }, 200);
  }

  /**
   * Plays Character Animations
   */
  playAliveCharacterAnimations() {
    if (this.isHurt()) {
      this.playHurtAnimation();
    } else {
      if (this.characterIsMoving()) {
        this.playSwimmingAnimation();
      } else {
        this.playIdleAnimation();
      }
    }
  }

  /**
   * Plays GameOver Animation
   * 
   * @param {id} charAliveInterval 
   * @param {number} i 
   */
  playGameOverAnimation(charAliveInterval, i) {
    if (i < this.IMAGES_DEAD.length - 1) {
      this.playDeadAnimation();
    } else {
      this.stopGame(charAliveInterval);
    }
  }

  /**
   * Stops the game if Character is dead and opens GameOver Screen.
   * 
   * @param {id} charAliveInterval 
   */
  stopGame(charAliveInterval) {
    clearInterval(charAliveInterval);
    this.loadImage("./img/1.Sharkie/6.dead/1.Poisoned/12.png");
    this.floatUp();
    openGameOverScreen();
    this.world.background_music.pause();
    this.checkIfDyingSoundMuted();
  }

  /**
   * Plays Characters Dying Animation
   */
  playDeadAnimation() {
    this.playAnimation(this.IMAGES_DEAD);
  }

  /**
   * Checks if Sound is muted
   */
  checkIfDyingSoundMuted() {
    if (this.world.soundMuted) {
      this.died_sound.pause();
    } else {
      this.died_sound.play();
    }
  }

  /**
   * Plays Characters Hurt Animation when hit.
   */
  playHurtAnimation() {
    this.playAnimation(this.IMAGES_HURT);
  }

  /**
   * Checks if character is moving.
   * 
   * @returns TRUE, if one button is pressed
   */
  characterIsMoving() {
    return (
      this.world.keyboard.RIGHT ||
      this.world.keyboard.LEFT ||
      this.world.keyboard.UP ||
      this.world.keyboard.DOWN
    );
  }

  /**
   * Plays swimming animation while moving.
   */
  playSwimmingAnimation() {
    this.playAnimation(this.IMAGES_SWIMMING);
  }

  /**
   * Plays Idle Animation, when not moving.
   */
  playIdleAnimation() {
    this.playAnimation(this.IMAGES_IDLE);
  }

  /**
   * Plays Shoot animnation while shooting.
   */
  playShootAnimation() {
    if (this.canShoot()) {
      this.playAnimation(this.IMAGES_ATTACK_1);
    }
  }

  /**
   * Plays all the Character Animations
   */
  animate() {
    setInterval(() => this.moveCharacter(), 1000 / 60);
    let i = 0;
    let charAliveInterval = setInterval(() => {
      if (this.isDead()) {
        this.playGameOverAnimation(charAliveInterval, i);
        i++;
      } else {
        this.playAliveCharacterAnimations();
      }
      this.playShootAnimation();
    }, 120);
  }
}
