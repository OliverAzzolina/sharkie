class Level {
  level_end_x = 3500;
  level_end_y = -120;
  level_end_y2 = 290;

  constructor(endboss, enemies, backgroundObjects, coins, poisons) {
    this.endboss = endboss;
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.coins = coins;
    this.poisons = poisons;
  };
};
