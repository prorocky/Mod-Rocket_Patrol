let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, CharacterSelect, Play],
}
// game variable
let game = new Phaser.Game(config);

// game config variables
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// keyboard key variables
let keyLEFT, keyRIGHT, keyUP, keyA, keyD, keyW, keyR;

// player color variables
let colorP1, colorP2;

// ADD CHARACTER SELECT SCRIPT