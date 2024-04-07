class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  D = false;

  constructor() {
    this.startKeyEvents();
  }

  startKeyEvents() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 38) {
        this.UP = true;
      }

      if (e.keyCode == 40) {
        this.DOWN = true;
      }

      if (e.keyCode == 37) {
        this.LEFT = true;
      }

      if (e.keyCode == 39) {
        this.RIGHT = true;
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.repeat) {
        this.D = false;
      } else if (e.keyCode == 68) {
        this.D = true;
      }
    });

    window.addEventListener("keyup", (e) => {
      if (e.keyCode == 38) {
        this.UP = false;
      }

      if (e.keyCode == 40) {
        this.DOWN = false;
      }

      if (e.keyCode == 37) {
        this.LEFT = false;
      }

      if (e.keyCode == 39) {
        this.RIGHT = false;
      }

      if (e.keyCode == 68) {
        this.D = false;
      }
    });
  }

  startTouchEvents() {
    document.getElementById("up").addEventListener("touchstart", (e) => {
      if(e.cancelable) e.preventDefault();
      this.UP = true;
    });

    document.getElementById("up").addEventListener("touchend", (e) => {
      if(e.cancelable) e.preventDefault();
      this.UP = false;
    });

    document.getElementById("down").addEventListener("touchstart", (e) => {
      if(e.cancelable) e.preventDefault();
      this.DOWN = true;
    });

    document.getElementById("down").addEventListener("touchend", (e) => {
      if(e.cancelable) e.preventDefault();
      this.DOWN = false;
    });

    document.getElementById("left").addEventListener("touchstart", (e) => {
      if(e.cancelable) e.preventDefault();
      this.LEFT = true;
    });

    document.getElementById("left").addEventListener("touchend", (e) => {
      if(e.cancelable) e.preventDefault();
      this.LEFT = false;
    });

    document.getElementById("right").addEventListener("touchstart", (e) => {
      if(e.cancelable) e.preventDefault();
      this.RIGHT = true;
    });

    document.getElementById("right").addEventListener("touchend", (e) => {
      if(e.cancelable) e.preventDefault();
      this.RIGHT = false;
    });

    document.getElementById("shoot").addEventListener("touchstart", (e) => {
      if(e.cancelable) e.preventDefault();
      this.D = true;
      setTimeout(() => {
        this.D = false;
      }, 200);
    } );

    document.getElementById("shoot").addEventListener("touchend", (e) => {
      if(e.cancelable) e.preventDefault();
      this.D = false;
    });
  };
};
