function renderMobileButtons() {
  mobileButtons = document.getElementById("mobile-buttons");
  mobileButtons.innerHTML = "";
  mobileButtons.innerHTML = `
    <div id="move-buttons">
        <div id="top-button">
            <button id="up"><img src="./mobile-key-img/up.png" alt=""></button>
        </div>
        <div id="bottom-buttons">
            <button id="left"><img src="./mobile-key-img/left.png" alt=""></button>
            <button id="down"><img src="./mobile-key-img/down.png" alt=""></button>
            <button id="right"><img src="./mobile-key-img/right.png" alt=""></button>
        </div>
    </div>
    <div id="shoot-button">
        <button id="shoot"><img src="./mobile-key-img/shoot.png" alt=""></button>
    </div>`;
  keyboard.startTouchEvents();
};
