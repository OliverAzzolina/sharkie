class CollectableObject extends MoveableObject {
  constructor() {
    super();
    this.height = 50;
    this.width = 50;
    this.y = Math.random() * 420;
    this.x = 200 + Math.random() * 1900;
  };

  offset = {
    left: 50,
    top: 0,
    right: 0,
    bottom: 0,
  };

  /**
   * Set's the Coin out of the fiel of view after collected
   */
  coinCollected() {
    this.x = 10000;
    this.y = 10000;
  };

  /**
   * Set's the Poison out of the fiel of view after collected
   */
  poisonCollected() {
    this.x = 10000;
    this.y = 10000;
  };
};
