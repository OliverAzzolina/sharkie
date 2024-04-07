class OrangeFish extends Fish {
  IMAGES_FISH_SWIMMING = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png",
  ];

  IMAGES_FISH_DEAD = [
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.png",
  ];

  IMAGES_FISH_ATTACK = [
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png",
  ];

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    //this.x = 1000 + Math.random() * 400;
    this.loadImages(this.IMAGES_FISH_SWIMMING);
    this.loadImages(this.IMAGES_FISH_DEAD);
    this.loadImages(this.IMAGES_FISH_ATTACK);
    this.animate();
  };
};
