let canvas;
let ctx;
let world;
let keyboard = new Keyboard();
let mobileDevice = false;

winner_sound = new Audio("./audio/sound_winner.mp3");
looser_sound = new Audio("./audio/sound_looser.mp3");

/**
 * This function loads when body loads.
 */
function init() {
  checkIfMobileDevice();
};

/**
 * This function checks the Device.
 */
function checkIfMobileDevice() {
  if (checkWhichDevice()) {
    isMobileDevice();
  } else {
    noMobileDevice();
  }
};

/**
 * This function checks if Device matches.
 * 
 * @returns Device
 */
function checkWhichDevice() {
  return (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  );
};

/**
 * This function shows the mobile buttons, if it's mobile Device and hides the Headline.
 */
function isMobileDevice() {
  mobileDevice = true;
  showMobileButtons();
  document.getElementById("headline").style.display = "none";
  document.getElementById("side-buttons").style.marginTop = "16px";
  document.getElementById("fullscreen-button").style.display = 'none';
  document.getElementById("canvas").style.width = window.innerWidth + "px";
  document.getElementById("overlay-start").style.width = window.innerWidth + "px";
  document.getElementById("overlay-story").style.width = window.innerWidth + "px";
  document.getElementById("instructions-container").style.width = window.innerWidth + "px";
  document.getElementById("button-overlays").style.width = window.innerWidth + "px";
};

/**
 * This function shows the headline, if it's not a mobile device.
 */
function noMobileDevice() {
  mobileDevice = false;
  document.getElementById("headline").style.display = "flex";
};

/**
 * This function opens story screen.
 */
function openStory() {
  document.getElementById("overlay-start").style.display = 'none';
  document.getElementById("overlay-story").style.display = 'flex';
};

/**
 * This function starts the game.
 */
function startGame() {
  document.getElementById("overlay-story").style.display = 'none';
  checkIfMobileDevice();
  canvas = document.getElementById("canvas");
  canvas.style.display = "flex";
  showSideButtons();
  initLevel();
  world = new World(canvas, keyboard);
};

/**
 * This function shows the side buttons(mute, fullscreen).
 */
function showSideButtons() {
  buttonOverlay = document.getElementById("button-overlays");
  buttonOverlay.style.display = "flex";
  sideButtons = document.getElementById("side-buttons");
  sideButtons.style.display = "flex";
};

/**
 * This function inits the rendering for the mobile buttons.
 */
function showMobileButtons() {
  renderMobileButtons();
};

/**
 * This function restarts the game.
 */
function restartGame() {
  document.getElementById('overlay-game-over').style.display = 'none';
  document.getElementById('overlay-winner').style.display = 'none';
  winner_sound.pause();
  looser_sound.pause();
  emptyWorldArr();
  refreshLevel();
  canvas.style.display = "flex";
  startGame();
};

/**
 * This function empties the arrays before restart.
 */
function emptyWorldArr() {
  world.level.endboss = [];
  world.level.enemies = [];
  world.level.coins = [];
  world.level.poisons = [];
};

/**
 * This function stops all intervals.
 */
function clearAllIntervalls() {
  for (let i = 0; i < 999; i++) {
    window.clearInterval(i);
  }
};

/**
 * This function toggles between sound off and on.
 */
function toggleMuteSounds() {
  if (!world.soundMuted) {
    muteSounds();
  } else {
    allowSounds();
  }
};

/**
 * This function mutes the Sound.
 */
function muteSounds() {
  document.getElementById("mute-img").src = "./mobile-key-img/mute_off.png";
  world.soundMuted = true;
  world.background_music.pause();
  world.background_music_endfight.pause();
  winner_sound.pause();
  looser_sound.pause();
};

/**
 * This function allows the Sound.
 */
function allowSounds() {
  document.getElementById("mute-img").src = "./mobile-key-img/mute_on.png";
  world.background_music.play();
  world.soundMuted = false;
};

/**
 * This function plays the Winner Sound, if the game is won.
 */
function playWinnerSound() {
  if (!world.soundMuted) {
    winner_sound.play();
    winner_sound.volume = 0.1;
  }
};

/**
 * This function plays the Looser Sound, if the game is lost.
 */
function playLooserSound() {
  if (!world.soundMuted) {
    world.background_music_endfight.pause();
    looser_sound.play();
    looser_sound.volume = 0.1;
  }
};

/**
 * This function hides the mobile buttons.
 */
function hideButtons() {
  document.getElementById("mobile-buttons").innerHTML = "";
};

/**
 * This function opens the Winner Screen, if the game is won.
 */
function openWinnerScreen() {
  hideButtons();
  document.getElementById('overlay-winner').style.display = 'flex';
  playWinnerSound();
  hideCanvas();
  clearAllIntervalls();
};

/**
 * This function opens the game over screen, if the game is lost.
 */
function openGameOverScreen() {
  setTimeout(() => {
    playLooserSound();
    hideButtons();
    document.getElementById('overlay-game-over').style.display = 'flex';
    hideCanvas();
    clearAllIntervalls();
  }, 2000);
};

/**
 * This function hides the canvas.
 */
function hideCanvas() {
  canvas = document.getElementById("canvas");
  canvas.style.display = "none";
};

/**
 * This function opens the instructions.
 */
function openInstructions() {
  document.getElementById("overlay-start").style.display = 'none';
  document.getElementById("instructions-container").style.display = 'flex';
}

/**
 * This function closes the instructions.
 */
function closeInstructions() {
  document.getElementById("overlay-start").style.display = 'flex';
  document.getElementById("instructions-container").style.display = 'none';
};

/**
 * This function inits fullscreen.
 */
function fullscreen() {
  let fullscreen = document.getElementById("fullScreen");
  if(document.fullscreenElement == "" || document.fullscreenElement == null){
  openFullscreen(fullscreen);
  }else{
    document.exitFullscreen();
  }
};

/**
 * This function opens the game in fullscreen.
 * 
 * @param {div} elem - body
 */
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
};

/**
 * Checks for fullscreen
 */
document.addEventListener('fullscreenchange', ()=>{
  if(document.fullscreenElement === null){
    changeToLowResolution();
  }else{
    changeToHighResolution();
  }
})

/**
 * Changes Style to non fullscreen elements.
 */
function changeToLowResolution(){
  document.getElementById("canvas").style.width = "720px";
  document.getElementById("canvas").style.height = "480px";
  document.getElementById('button-overlays').style.width = "720px";
  document.getElementById('button-overlays').style.height = "480px";
  document.getElementById('overlay-game-over').classList.remove('fullscreen');
  document.getElementById('overlay-game-over').classList.add('overlays');
  document.getElementById('overlay-winner').classList.remove('fullscreen');
  document.getElementById('overlay-winner').classList.add('overlays');
  document.getElementById('instructions-container').classList.remove('fullscreen');
  document.getElementById('instructions-container').classList.add('overlays');
}

/**
 * Changes Style to fullscreen elements.
 */
function changeToHighResolution(){
  document.getElementById("canvas").style.width = window.innerWidth + "px";
  document.getElementById("canvas").style.height = window.innerHeight + "px";
  document.getElementById('button-overlays').style.width = '100%';
  document.getElementById('button-overlays').style.height = '100vh';
  document.getElementById('overlay-game-over').classList.add('fullscreen');
  document.getElementById('overlay-game-over').classList.remove('overlays');
  document.getElementById('overlay-winner').classList.add('fullscreen');
  document.getElementById('overlay-winner').classList.remove('overlays');
  document.getElementById('instructions-container').classList.add('fullscreen');
  document.getElementById('instructions-container').classList.remove('overlays');
}