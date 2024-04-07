class Coinbar extends MoveableObject {
  IMAGES_COINS = [
    "./img/4. Marcadores/green/Coin/0_  copia 4.png",
    "./img/4. Marcadores/green/Coin/20_  copia 2.png",
    "./img/4. Marcadores/green/Coin/40_  copia 4.png",
    "./img/4. Marcadores/green/Coin/60_  copia 4.png",
    "./img/4. Marcadores/green/Coin/80_  copia 4.png",
    "./img/4. Marcadores/green/Coin/100_ copia 4.png",
  ];
  percentage = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES_COINS);
    this.setPercentage(0);
    this.x = 20;
    this.y = 60;
    this.height = 60;
    this.width = 200;
  };

  /**
   * Set's the Percentage of the Coin bar, when Coin collected.
   * 
   * @param {number} percentage - Percentage of the CoinBar. 
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_COINS[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  };

  /**
   * Set's the Image of the CoinBar.
   * 
   * @returns number 
   */
  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 20) {
      return 2;
    } else if (this.percentage >= 10) {
      return 1;
    } else {
      return 0;
    }
  };
};
