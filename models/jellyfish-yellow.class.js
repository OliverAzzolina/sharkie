class YellowJellyFish extends JellyFish {
  IMAGES_JELLY_SWIMMING = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png",
  ];

  IMAGES_JELLY_DEAD = [
    "img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png",
    "img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png",
    "img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png",
    "img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png",
  ];

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    //this.y = Math.random() * 400;
    //this.x = 2500 + Math.random() * 400;
    this.speed = 0.2 + Math.random() * 0.2;
    this.loadImages(this.IMAGES_JELLY_SWIMMING);
    this.loadImages(this.IMAGES_JELLY_DEAD);
    this.animate();
  };
};
