let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Mode, aboutModes, CharacterSelect, Menu, Play],
}
// game variable
let game = new Phaser.Game(config);

// game config variables
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// keyboard key variables
// controls
let keyLEFT, keyRIGHT, keyUP, keyA, keyD, keyW, keyR;

// mode selection
let key1, key2, keyESC;
let mode = 0;

// color selection
let keyO, keyY, keyG, keyL, keyB, keyV, keyP;

let red, orange, yellow, green, light_blue, blue, dark_blue, violet, pink, white;

let colorCodes = 
{
    red: {
        name: "red", 
        hex: '#FF0000'
    },
    orange: {
        name: "orange",
        hex: '#FF7f27'
    },
    yellow: {
        name: "yellow",
        hex: '#FFF200'
    },
    green: {
        name: "green",
        hex: '#0ED145'
    },
    light_blue: {
        name: "lightblue", 
        hex: '#8CFFFB'
    },
    blue: {
        name: "blue", 
        hex: '#00A8F3'
    },
    dark_blue: {
        name: "darkblue",
        hex: '#0D01F6'
    },
    violet: {
        name: "violet",
        hex: '#BD3DBA'
    },
    pink: {
        name: "pink", 
        hex: '#FFAEC8'
    },
    white: {
        name: "white",
        hex: '#FFFFFF'
    }
};

// player color variables
let colorP1, colorP2;

// variables for gameplay
let timeRemaining, scoreConfig;