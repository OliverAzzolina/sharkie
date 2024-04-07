class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;

  loadImage(path) {
    this.img = new Image(); // this.img = document.getElementById('iumage') = <img>
    this.img.src = path;
  };

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  drawFrame(ctx) {
    if (this instanceof Character) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      //ctx.strokeStyle = "red";
      //ctx.rect(this.x + 50, this.y + 120, this.width - 100, this.height - 180);
      ctx.stroke();
    }

    if (this instanceof Fish) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      //ctx.strokeStyle = "red";
      //ctx.rect(this.x, this.y + 5, this.width - 5, this.height -25);
      ctx.stroke();
    }

    if (this instanceof JellyFish) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      //ctx.strokeStyle = "red";
      //ctx.rect(this.x, this.y + 5, this.width - 5, this.height -10);
      ctx.stroke();
    }

    if (this instanceof ThrowableObject) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      //ctx.strokeStyle = "red";
      //ctx.rect(this.x + 50, this.y, this.width - 100, this.height);
      ctx.stroke();
    }

    if (this instanceof CollectableObject) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      //ctx.strokeStyle = "red";
      //ctx.rect(this.x + 50, this.y, this.width - 100, this.height);
      ctx.stroke();
    }

    if (this instanceof Endboss) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      //ctx.strokeStyle = "red";
      //ctx.rect(this.x, this.y + 150, this.width, this.height - 200);
      ctx.stroke();
    }
  };

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  };
};
