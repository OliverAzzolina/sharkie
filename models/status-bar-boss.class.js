class BossStatusbar extends MoveableObject {
  IMAGES_HEALTH = [
    "./img/4. Marcadores/orange/0_  copia.png",
    "./img/4. Marcadores/orange/20_ copia 2.png",
    "./img/4. Marcadores/orange/40_  copia.png",
    "./img/4. Marcadores/orange/60_  copia.png",
    "./img/4. Marcadores/orange/80_  copia.png",
    "./img/4. Marcadores/orange/100_  copia.png",
  ];

  percentage = 100;

  constructor() {
    super();
    this.loadImages(this.IMAGES_HEALTH);
    this.setPercentage(100);
    this.x = 450;
    this.y = 10;
    this.height = 60;
    this.width = 200;
  };

  /**
   * Set's the Percentage of the Endboss Statusbar.
   * 
   * @param {number} percentage - Percentage of the Endboss StatusBar. 
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  };

  /**
   * Set's the Image of the Endboss StatusBar.
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
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  };
};
