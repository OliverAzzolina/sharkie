class Statusbar extends MoveableObject {
  IMAGES_HEALTH = [
    "./img/4. Marcadores/orange/0_  copia.png",
    "./img/4. Marcadores/orange/20_ copia 2.png",
    "./img/4. Marcadores/orange/40_  copia.png",
    "./img/4. Marcadores/orange/60_  copia.png",
    "./img/4. Marcadores/orange/80_  copia.png",
    "./img/4. Marcadores/orange/100_  copia.png",
  ];
  percentage = 200;

  constructor() {
    super();
    this.loadImages(this.IMAGES_HEALTH);
    this.setPercentage(200);
    this.x = 20;
    this.y = 10;
    this.height = 60;
    this.width = 200;
  };

  /**
   * Set's the Percentage of the Charactes Statusbar.
   * 
   * @param {number} percentage - Percentage of the Characters StatusBar. 
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  };

  /**
   * Set's the Image of the Characters StatusBar.
   * 
   * @returns number 
   */
  resolveImageIndex() {
    if (this.percentage == 200) {
      return 5;
    } else if (this.percentage > 150) {
      return 4;
    } else if (this.percentage > 100) {
      return 3;
    } else if (this.percentage > 50) {
      return 2;
    } else if (this.percentage > 5) {
      return 1;
    } else {
      return 0;
    }
  };
};
