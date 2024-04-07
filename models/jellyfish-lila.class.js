class LilaJellyFish extends JellyFish {
  IMAGES_JELLY_SWIMMING = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
  ];

  IMAGES_JELLY_DEAD = [
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png",
  ];

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    //this.y = Math.random() * 420;
    //this.x = 2000 + Math.random() * 400;
    this.speed = 0.3 + Math.random() * 0.3;
    this.loadImages(this.IMAGES_JELLY_SWIMMING);
    this.loadImages(this.IMAGES_JELLY_DEAD);
    this.animate();
  };
};
