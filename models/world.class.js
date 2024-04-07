class World {
  character = new Character();
  level = level1;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new Statusbar();
  coinBar = new Coinbar();
  poisonBar = new Poisonbar();
  bossHealthbar = new BossStatusbar();
  bossLogo = new BossLogo();

  throwableObjects = [];
  shotFired = false;
  coinsCollected = [];
  poisonCollected = [];
  isBossSpawned = false;
  poisonAttack = false;
  poisonedBubble = false;

  soundMuted = false;
  background_music = new Audio("./audio/background_music.mp3");
  background_music_endfight = new Audio("./audio/background_music_endfight.mp3");

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  };

  /**
   * Gives access to character in this world, to steer it.
   */
  setWorld() {
    this.character.world = this;
  };

  /**
   * Runs the game functions.
   */
  run() {
    this.playMusic();
    setInterval(() => {
      this.checkPoisionCollisions();
      this.checkCollisions();
      this.checkThrowObjects();
      this.checkBubbleCollisions();
      this.checkCoinCollisions();
      this.checkForBoss();
      this.checkForDeadBoss();
    }, 60);
  };

  /**
   * Plays the background music.
   */
  playMusic() {
    this.background_music.play();
    this.background_music.volume = 0.08;
    this.background_music.loop = true;
  };

  /**
   * Plays the music when Endboss is spawned.
   */
  playEndfightMusic() {
    this.background_music.pause();
    if (!world.soundMuted) {
      this.background_music_endfight.play();
      this.background_music_endfight.volume = 0.2;
      this.background_music_endfight.loop = true;
    }
  };

  /**
   * Checks if Endboss is spawned.
   */
  checkForBoss() {
    if (this.character.x > 3220 && !this.isBossSpawned) {
      this.isBossSpawned = true;
      this.poisonAttack = true;
      this.playEndfightMusic();
    }
  };

  /**
   * Checks if Endboss is dead.
   */
  checkForDeadBoss() {
    this.level.endboss.forEach((endboss) => {
      if (endboss.bossIsDead) {
        this.gameWon(endboss);
      }
    });
  };

  /**
   * inits the Winner Screen.
   * 
   * @param {object} endboss 
   */
  gameWon(endboss) {
    setTimeout(() => {
      endboss.bossIsDead = false;
      this.background_music_endfight.pause();
      openWinnerScreen(this.coinsCollected.length);
    }, 1000);
  };

  /**
   * Checks Character collisions with enemy and endboss.
   */
  checkCollisions() {
    this.level.enemies.forEach((enemy) => this.checkCharEnemyCollision(enemy));
    this.level.endboss.forEach((boss) => this.checkCharBossCollision(boss));
  };

  /**
   * When Char is colliding with enemy reduce health.
   * 
   * @param {object} enemy 
   */
  checkCharEnemyCollision(enemy) {
    if (this.character.isColliding(enemy)) this.reduceCharHealth();
  };

    /**
   * When Char is colliding with boss reduce health.
   * 
   * @param {object} boss 
   */
  checkCharBossCollision(boss) {
    if (this.character.isColliding(boss)) this.reduceCharHealth();
  };

  /**
   * Reduces Characters health.
   */
  reduceCharHealth() {
    this.character.hit();
    this.statusBar.setPercentage(this.character.health);
  };

  /**
   * Checks bubbles shooting.
   */
  checkThrowObjects() {
    if (this.keyboard.D) {
      if (this.shotFired == false) {
        this.shotFired = true;
        this.checkCharDirection();
        setTimeout(() => {
          this.shotFired = false;
        }, 500);
      }
    }
  };

  /**
   * Checks Characters direction.
   */
  checkCharDirection() {
    if (this.charIsMovingRight()) {
      this.shootBubbleRight();
    }
    if (this.charIsMovingLeft()) {
      this.shootBubbleLeft();
    }
  };

  /**
   * When Character moves right.
   * 
   * @returns true
   */
  charIsMovingRight() {
    return !this.character.otherDirection;
  };

  /**
   * Character moves left.
   * 
   * @returns true
   */
  charIsMovingLeft() {
    return this.character.otherDirection;
  };

  /**
   * Shoots bubble right.
   */
  shootBubbleRight() {
    let bubble = new ThrowableObject(
      this.character.x + 200,
      this.character.y + 130
    );
    this.throwableObjects.push(bubble);
    this.bubbleCheck(bubble);
  };

  /**
   * Shoots bubble left.
   */
  shootBubbleLeft() {
    let bubble = new ThrowableObject(this.character.x, this.character.y + 130);
    this.throwableObjects.push(bubble);
    this.bubbleCheck(bubble);
  };

  /**
   * Checks bubble Collisions with enemy or Endboss.
   */
  checkBubbleCollisions() {
    this.level.enemies.forEach((enemy) => this.checkIfBubbleHitsEnemy(enemy));
    this.level.endboss.forEach((endboss) => this.checkIfBubbleHitsEndboss(endboss));
  };

  /**
   * Checks if bubble hits any enemy
   * 
   * @param {object} enemy
   */
  checkIfBubbleHitsEnemy(enemy) {
    for (let i = 0; i < this.throwableObjects.length; i++) {
      let throwableobject = this.throwableObjects[i];
      this.bubbleHitsEnemy(enemy, throwableobject);
      this.checkIfBubbleOutOfFOV(throwableobject);
    }
  };

  /**
   * When bubble hits enemy, it gets hit.
   * 
   * @param {object} enemy 
   * @param {object} throwableobject - bubble
   */
  bubbleHitsEnemy(enemy, throwableobject) {
    if (throwableobject.isColliding(enemy)) {
      if (this.poisonAttack && this.poisonedBubble) {
        enemy.poisonHit();
      } else {
        enemy.hit();
      }
      this.removeBubbleFromArr(throwableobject);
    }
  };

  /**
   * Checks if bubble hits endboss.
   * 
   * @param {object} endboss 
   */
  checkIfBubbleHitsEndboss(endboss) {
    for (let i = 0; i < this.throwableObjects.length; i++) {
      let throwableobject = this.throwableObjects[i];
      this.bubbleHitsEndboss(endboss, throwableobject);
      this.checkIfBubbleOutOfFOV(throwableobject);
    }
  };

  /**
   * When bubble collides with endboss, endboss gets hit.
   * 
   * @param {object} endboss 
   * @param {object} throwableobject 
   */
  bubbleHitsEndboss(endboss, throwableobject) {
    if (throwableobject.isColliding(endboss)) {
      if (this.poisonAttack && this.poisonedBubble) {
        endboss.poisonHit();
      } else {
        endboss.hit();
      }
      this.removeBubbleFromArr(throwableobject);
    }
    this.checkIfBubbleOutOfFOV(throwableobject);
  };

  /**
   * Removes bubble from throwable Objects array.
   * 
   * @param {object} throwableobject - bubble 
   */
  removeBubbleFromArr(throwableobject) {
    this.throwableObjects.splice(throwableobject);
    this.poisonedBubble = false;
  };

  /**
   * Checks if bubble is out of view and removes it from array.
   * 
   * @param {object} throwableobject - bubble 
   */
  checkIfBubbleOutOfFOV(throwableobject) {
    if (throwableobject.x > 4000 || throwableobject.y < 0) {
      this.throwableObjects.splice(throwableobject);
      this.poisonedBubble = false;
    }
  };

  /**
   * Checks if Character collides with Coins.
   */
  checkCoinCollisions() {
    this.level.coins.forEach((coin) => this.collectCoin(coin));
  };

  /**
   * Coin gets collected when colliding with Character.
   * 
   * @param {object} coin 
   */
  collectCoin(coin) {
    if (this.character.isColliding(coin)) {
      this.coin = coin;
      this.coinsCollected.push(coin);
      this.coinBar.setPercentage(this.coinsCollected.length * (100 / 15));
      this.coin.coinCollected();
    }
  };

  /**
   * Checks if Character collides with Poisons.
   */
  checkPoisionCollisions() {
    this.level.poisons.forEach((poison) => this.collectPoison(poison));
  };

  /**
   * Poison gets collected when colliding with Character.
   * 
   * @param {object} poison 
   */
  collectPoison(poison) {
    if (this.character.isColliding(poison)) {
      this.poison = poison;
      this.poisonCollected.push(poison);
      this.poisonBar.setPercentage(this.poisonCollected.length * 2 * 10);
      this.poison.poisonCollected();
    }
  };

  /**
   * Checks if normal or poisoned bubble to shoot.
   * 
   * @param {object} bubble 
   */
  bubbleCheck(bubble) {
    if (!this.poisonAttack) {
      this.shootNormalBubble(bubble);
    }
    if (this.poisonAttack) {
      if (this.poisonCollected.length >= 1) {
        this.shootPoisonBubble(bubble);
      } else {
        this.shootNormalBubble(bubble);
      }
    }
  };

  /**
   * Shoots normal bubble
   * 
   * @param {object} bubble 
   */
  shootNormalBubble(bubble) {
    bubble.loadImage("./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
  };

  /**
   * Shoots poisoned bubble
   * 
   * @param {object} bubble 
   */
  shootPoisonBubble(bubble) {
    bubble.loadImage(
      "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png"
    );
    this.poisonCollected.splice(0, 1);
    this.poisonedBubble = true;
    this.poisonBar.setPercentage(this.poisonCollected.length * 2 * 10);
  };

  /**
   * Draws objects to canvas.
   */
  draw() {
    // hier werden die objekte eingefügt (Hintergrund, feinde und charakter)
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0); //kameraverfolgung
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.throwableObjects);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBar);
    this.addToMap(this.coinBar);
    this.addToMap(this.poisonBar);
    if(this.isBossSpawned){
      this.addToMap(this.bossHealthbar);
      this.addToMap(this.bossLogo);
    }
    this.ctx.translate(this.camera_x, 0); //kameraverfolgung
    this.addObjectsToMap(this.level.endboss);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.poisons);
    this.addToMap(this.character);
    this.ctx.translate(-this.camera_x, 0); //kameraverfolgung
    let self = this; // draw() wird immer wieder aufgerufen
    requestAnimationFrame(function () {
      self.draw();
    });
  };

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  };

  addToMap(mo) {
    if (mo.otherDirection) {
      //spiegeln (links)
      this.flipImage(mo);
    }
    try {
      mo.draw(this.ctx);
    } catch (e) {}
    mo.drawFrame(this.ctx);
    if (mo.otherDirection) {
      //spiegeln wieder umkehren (rechts)
      this.flipImageBack(mo);
    }
  };

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  };

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
};
