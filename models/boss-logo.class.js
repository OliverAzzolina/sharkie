class BossLogo extends MoveableObject {

  IMAGE_ENDBOSS = [
    "./img/2.Enemy/3 Final Enemy/2.floating/1.png"
  ]

  percentage = 200;

  constructor() {
    super();
    this.loadImage("./img/2.Enemy/3 Final Enemy/2.floating/1.png")
    this.x = 437;
    this.y = -35;
    this.height = 120;
    this.width = 85;
  };

};
