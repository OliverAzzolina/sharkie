class Coin extends CollectableObject {
  IMAGES_COIN = [
    "./img/4. Marcadores/1. Coins/1.png",
    "./img/4. Marcadores/1. Coins/2.png",
    "./img/4. Marcadores/1. Coins/3.png",
    "./img/4. Marcadores/1. Coins/4.png",
  ];

  offset = {
    left: 0,
    top: 20,
    right: 0,
    bottom: 0,
  };

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.loadImages(this.IMAGES_COIN);
    this.animate();
  };

  /**
   * Plays Coin animation.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_COIN);
    }, 200);
  };
};
