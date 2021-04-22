/*
 * Oran Shadian, Rocket Patrol Mod
 * 4/21/21, 15 hours
 * 
 * Track a high score that persists across scenes and display it in the UI                      (5)
 * Implement the speed increase that happens after 30 seconds in the original game              (5)
 * Randomize each spaceship's movement direction at the start of each play                      (5)
 * Allow the player to control the Rocket after it's fired                                      (5)
 * Display the time remaining (in seconds) on the screen                                        (10)
 * Create a new title screen (e.g., new artwork, typography, layout) (not really sure)          (10)
 * Implement mouse control for player movement and mouse click to fire (20)
 * Implement a new timing/scoring mechanism that adds time to the clock for successful hits (SP)(20)
 * Implement a simultaneous two-player mode                                                     (30)
 * 
 * 
 * 
 * 
*/

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
let keyLEFT, keyRIGHT, keyUP, keyA, keyD, keyW, keyR, keySPACE, ptr;

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
let timeRemaining, scoreConfig, highscore = 0;