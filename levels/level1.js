/**
 * These are the Level Objects.
 */
let level1;

function initLevel(){

  level1 = new Level(
    [new Endboss()],
  
    [
      new GreenFish(700, 50),
      new GreenFish(650, 170),
      new GreenFish(800, 270),
      new GreenFish(750, 370),
      new RedFish(1200, 50),
      new RedFish(1150, 170),
      new RedFish(1300, 270),
      new RedFish(1250, 370),
      new OrangeFish(1700, 50),
      new OrangeFish(1650, 170),
      new OrangeFish(1800, 270),
      new OrangeFish(1750, 370),
      new LilaJellyFish(2200, 50),
      new LilaJellyFish(2150, 170),
      new LilaJellyFish(2300, 270),
      new LilaJellyFish(2250, 370),
      new YellowJellyFish(2700, 50),
      new YellowJellyFish(2650, 170),
      new YellowJellyFish(2800, 270),
      new YellowJellyFish(2750, 370),
    ],
  
    [
      new backgroundObject("img/3. Background/Legacy/Layers/5. Water/L1.png", 0, 720),
      new backgroundObject("img/3. Background/Legacy/Layers/4.Fondo 2/L1.png",0,720),
      new backgroundObject("img/3. Background/Legacy/Layers/3.Fondo 1/L1.png",0,720),
      new backgroundObject("img/3. Background/Legacy/Layers/2. Floor/L1.png",0,720),
      new backgroundObject("img/3. Background/Legacy/Layers/1. Light/1.png",0,720),
  
      new backgroundObject("img/3. Background/Legacy/Layers/5. Water/L2.png",720,720),
      new backgroundObject("img/3. Background/Legacy/Layers/4.Fondo 2/L2.png",720,720),
      new backgroundObject("img/3. Background/Legacy/Layers/3.Fondo 1/L2.png",720,720),
      new backgroundObject("img/3. Background/Legacy/Layers/2. Floor/L2.png",720,720),
      new backgroundObject("img/3. Background/Legacy/Layers/1. Light/2.png",720,720),
  
      new backgroundObject("img/3. Background/Legacy/Layers/5. Water/L1.png",1440,720),
      new backgroundObject("img/3. Background/Legacy/Layers/4.Fondo 2/L1.png",1440,720),
      new backgroundObject("img/3. Background/Legacy/Layers/3.Fondo 1/L1.png",1440,720),
      new backgroundObject("img/3. Background/Legacy/Layers/2. Floor/L1.png",1440,720),
      new backgroundObject("img/3. Background/Legacy/Layers/1. Light/1.png",1440,720),
  
      new backgroundObject("img/3. Background/Barrier/3.png", 1300, 200),
  
      new backgroundObject("img/3. Background/Legacy/Layers/5. Water/L2.png",2160,720),
      new backgroundObject("img/3. Background/Legacy/Layers/4.Fondo 2/L2.png",2160,720),
      new backgroundObject("img/3. Background/Legacy/Layers/3.Fondo 1/L2.png",2160,720),
      new backgroundObject("img/3. Background/Legacy/Layers/2. Floor/L2.png",2160,720),
      new backgroundObject("img/3. Background/Legacy/Layers/1. Light/2.png",2160,720),
  
      new backgroundObject("img/3. Background/Legacy/Layers/5. Water/d1.png",2880,720),
      new backgroundObject("img/3. Background/Legacy/Layers/4.Fondo 2/D1.png",2880,720),
      new backgroundObject("img/3. Background/Legacy/Layers/3.Fondo 1/D1.png",2880,720),
      new backgroundObject("img/3. Background/Legacy/Layers/2. Floor/D1.png",2880,720),
      new backgroundObject("img/3. Background/Legacy/Layers/1. Light/1.png",2880,720),
  
      new backgroundObject("img/3. Background/Legacy/Layers/5. Water/D2.png",3600,720),
      new backgroundObject("img/3. Background/Legacy/Layers/4.Fondo 2/D2.png",3600,720),
      new backgroundObject("img/3. Background/Legacy/Layers/3.Fondo 1/D2.png",3600,720),
      new backgroundObject("img/3. Background/Legacy/Layers/2. Floor/D2.png",3600,720),
      new backgroundObject("img/3. Background/Legacy/Layers/1. Light/2.png",3600,720),
  
      new backgroundObject("img/3. Background/Barrier/3.png", 2750, 200),
    ],
  
    [
      new Coin(300, 100),
      new Coin(400, 50),
      new Coin(500, 100),
      new Coin(900, 300),
      new Coin(1000, 350),
      new Coin(1100, 300),
      new Coin(1700, 100),
      new Coin(1800, 50),
      new Coin(1900, 100),
      new Coin(2300, 300),
      new Coin(2400, 350),
      new Coin(2500, 300),
      new Coin(2900, 100),
      new Coin(3000, 50),
      new Coin(3100, 100),
    ],
  
    [
      new Poison(400, 120),
      new Poison(1000, 280),
      new Poison(1800, 120),
      new Poison(2400, 280),
      new Poison(3000, 120),
    ]
  );
}

function refreshLevel() {
  (level1.endboss = [new Endboss()]),
    (level1.enemies = [
      new GreenFish(700, 50),
      new GreenFish(650, 170),
      new GreenFish(800, 270),
      new GreenFish(750, 370),
      new RedFish(1200, 50),
      new RedFish(1150, 170),
      new RedFish(1300, 270),
      new RedFish(1250, 370),
      new OrangeFish(1700, 50),
      new OrangeFish(1650, 170),
      new OrangeFish(1800, 270),
      new OrangeFish(1750, 370),
      new LilaJellyFish(2200, 50),
      new LilaJellyFish(2150, 170),
      new LilaJellyFish(2300, 270),
      new LilaJellyFish(2250, 370),
      new YellowJellyFish(2700, 50),
      new YellowJellyFish(2650, 170),
      new YellowJellyFish(2800, 270),
      new YellowJellyFish(2750, 370),
    ]),
    (level1.backgroundObjects = [
      new backgroundObject("img/3. Background/Legacy/Layers/5. Water/L1.png", 0, 720),
      new backgroundObject("img/3. Background/Legacy/Layers/4.Fondo 2/L1.png",0,720),
      new backgroundObject("img/3. Background/Legacy/Layers/3.Fondo 1/L1.png",0,720),
      new backgroundObject("img/3. Background/Legacy/Layers/2. Floor/L1.png",0,720),
      new backgroundObject("img/3. Background/Legacy/Layers/1. Light/1.png",0,720),
  
      new backgroundObject("img/3. Background/Legacy/Layers/5. Water/L2.png",720,720),
      new backgroundObject("img/3. Background/Legacy/Layers/4.Fondo 2/L2.png",720,720),
      new backgroundObject("img/3. Background/Legacy/Layers/3.Fondo 1/L2.png",720,720),
      new backgroundObject("img/3. Background/Legacy/Layers/2. Floor/L2.png",720,720),
      new backgroundObject("img/3. Background/Legacy/Layers/1. Light/2.png",720,720),
  
      new backgroundObject("img/3. Background/Legacy/Layers/5. Water/L1.png",1440,720),
      new backgroundObject("img/3. Background/Legacy/Layers/4.Fondo 2/L1.png",1440,720),
      new backgroundObject("img/3. Background/Legacy/Layers/3.Fondo 1/L1.png",1440,720),
      new backgroundObject("img/3. Background/Legacy/Layers/2. Floor/L1.png",1440,720),
      new backgroundObject("img/3. Background/Legacy/Layers/1. Light/1.png",1440,720),
  
      new backgroundObject("img/3. Background/Barrier/3.png", 1300, 200),
  
      new backgroundObject("img/3. Background/Legacy/Layers/5. Water/L2.png",2160,720),
      new backgroundObject("img/3. Background/Legacy/Layers/4.Fondo 2/L2.png",2160,720),
      new backgroundObject("img/3. Background/Legacy/Layers/3.Fondo 1/L2.png",2160,720),
      new backgroundObject("img/3. Background/Legacy/Layers/2. Floor/L2.png",2160,720),
      new backgroundObject("img/3. Background/Legacy/Layers/1. Light/2.png",2160,720),
  
      new backgroundObject("img/3. Background/Legacy/Layers/5. Water/d1.png",2880,720),
      new backgroundObject("img/3. Background/Legacy/Layers/4.Fondo 2/D1.png",2880,720),
      new backgroundObject("img/3. Background/Legacy/Layers/3.Fondo 1/D1.png",2880,720),
      new backgroundObject("img/3. Background/Legacy/Layers/2. Floor/D1.png",2880,720),
      new backgroundObject("img/3. Background/Legacy/Layers/1. Light/1.png",2880,720),
  
      new backgroundObject("img/3. Background/Legacy/Layers/5. Water/D2.png",3600,720),
      new backgroundObject("img/3. Background/Legacy/Layers/4.Fondo 2/D2.png",3600,720),
      new backgroundObject("img/3. Background/Legacy/Layers/3.Fondo 1/D2.png",3600,720),
      new backgroundObject("img/3. Background/Legacy/Layers/2. Floor/D2.png",3600,720),
      new backgroundObject("img/3. Background/Legacy/Layers/1. Light/2.png",3600,720),
  
      new backgroundObject("img/3. Background/Barrier/3.png", 2750, 200),
    ]),
    (level1.coins = [
      new Coin(300, 100),
      new Coin(400, 50),
      new Coin(500, 100),
      new Coin(900, 300),
      new Coin(1000, 350),
      new Coin(1100, 300),
      new Coin(1700, 100),
      new Coin(1800, 50),
      new Coin(1900, 100),
      new Coin(2300, 300),
      new Coin(2400, 350),
      new Coin(2500, 300),
      new Coin(2900, 100),
      new Coin(3000, 50),
      new Coin(3100, 100),
    ]),
    (level1.poisons = [
      new Poison(400, 120),
      new Poison(1000, 280),
      new Poison(1800, 120),
      new Poison(2400, 280),
      new Poison(3000, 120),
    ]);
}
