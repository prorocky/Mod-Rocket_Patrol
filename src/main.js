let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [CharacterSelect, Menu, Play],
}
// game variable
let game = new Phaser.Game(config);

// game config variables
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// keyboard key variables
// controls
let keyLEFT, keyRIGHT, keyUP, keyA, keyD, keyW, keyR;

// color selection
let keyO, keyY, keyG, keyL, keyB, keyV, keyP;

// player color variables
let colorP1, colorP2;

// ADD CHARACTER SELECT SCRIPT