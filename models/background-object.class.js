class backgroundObject extends MoveableObject {
  height = 480;

  /**
   * Loads the background images.
   *  
   * @param {string} imagePath - Path of the background image.
   * @param {number} x - Position x of the background image.
   * @param {number} width - Width of background image.
   */
  constructor(imagePath, x, width) {
    super().loadImage(imagePath);
    this.x = x;
    this.width = width;
    this.y = 480 - this.height; //480 -400
  };
};
