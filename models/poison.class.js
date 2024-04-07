class Poison extends CollectableObject {
  IMAGES_POISON = [
    "./img/4. Marcadores/Posión/Animada/1.png",
    "./img/4. Marcadores/Posión/Animada/2.png",
    "./img/4. Marcadores/Posión/Animada/3.png",
    "./img/4. Marcadores/Posión/Animada/4.png",
    "./img/4. Marcadores/Posión/Animada/5.png",
    "./img/4. Marcadores/Posión/Animada/6.png",
    "./img/4. Marcadores/Posión/Animada/7.png",
    "./img/4. Marcadores/Posión/Animada/8.png",
  ];

  offset = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  };

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.height = 70;
    this.width = 50;
    this.loadImages(this.IMAGES_POISON);
    this.animate();
  };

  /**
   * Animates the poison objects.
   */
  animate() {
    setInterval(() => this.playAnimation(this.IMAGES_POISON), 200);
  };
};
