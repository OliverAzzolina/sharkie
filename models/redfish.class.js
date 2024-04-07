class RedFish extends Fish {
  IMAGES_FISH_SWIMMING = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png",
  ];

  IMAGES_FISH_DEAD = [
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png",
  ];

  IMAGES_FISH_ATTACK = [
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png",
  ];

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.loadImages(this.IMAGES_FISH_SWIMMING);
    this.loadImages(this.IMAGES_FISH_DEAD);
    this.loadImages(this.IMAGES_FISH_ATTACK);
    this.animate();
  };
};
