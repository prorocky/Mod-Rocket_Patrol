class CharacterSelect extends Phaser.Scene {
    constructor() {
        super("charSelectScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', 'assets/blip_select12.wav');

        // load sprites
        this.load.image('rocket', 'assets/rocket.png');
        this.load.image('rocket_red', 'assets/red_rocket.png');
        this.load.image('rocket_orange', 'assets/orange_rocket.png');
        this.load.image('rocket_yellow', 'assets/yellow_rocket.png');
        this.load.image('rocket_green', 'assets/green_rocket.png');
        this.load.image('rocket_lightblue', 'assets/lightblue_rocket.png');
        this.load.image('rocket_blue', 'assets/blue_rocket.png');
        this.load.image('rocket_darkblue', 'assets/darkblue_rocket.png');
        this.load.image('rocket_violet', 'assets/violet_rocket.png');
        this.load.image('rocket_pink', 'assets/pink_rocket.png');
    }

    create() {

        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#000',
            color: '#DEFACE',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        // selection flag
        this.p1Choosing = 1;

        // directions
        this.add.text(game.config.width / 2, borderUISize + borderPadding, 'Type the first letter of a color \nto select that color. P1 goes first', textConfig).setOrigin(0.5);
        
        // color
        // text box for color
        // keyboard key to select color

        // red
        textConfig.color = '#FF0000';
        this.add.text(game.config.width / 8 * 1 + borderUISize + borderPadding, game.config.height / 6 * 1 + borderUISize, 'RED', textConfig).setOrigin(0.5);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        // orange
        textConfig.color = '#FF7f27';
        this.add.text(game.config.width / 8 * 7 - borderUISize - borderPadding, game.config.height / 6 * 1 + borderUISize, 'ORANGE', textConfig).setOrigin(0.5);
        keyO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);

        // yellow
        textConfig.color = '#FFF200';
        this.add.text(game.config.width / 8 * 1 + borderUISize + borderPadding, game.config.height / 6 * 2 + borderUISize, 'YELLOW', textConfig).setOrigin(0.5);
        keyY = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);

        // green
        textConfig.color = '#0ED145';
        this.add.text(game.config.width / 8 * 7 - borderUISize - borderPadding, game.config.height / 6 * 2 + borderUISize, 'GREEN', textConfig).setOrigin(0.5);
        keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);

        // light blue
        textConfig.color = '#8CFFFB';
        this.add.text(game.config.width / 8 * 1 + borderUISize + borderPadding, game.config.height / 6 * 3 + borderUISize, 'LIGHT BLUE', textConfig).setOrigin(0.5);
        keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);

        // blue
        textConfig.color = '#00A8F3';
        this.add.text(game.config.width / 8 * 7 - borderUISize - borderPadding, game.config.height / 6 * 3 + borderUISize, 'BLUE', textConfig).setOrigin(0.5);
        keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);

        // dark blue
        textConfig.color = '#0D01F6';
        this.add.text(game.config.width / 8 * 1 + borderUISize + borderPadding, game.config.height / 6 * 4 + borderUISize, 'DARK BLUE', textConfig).setOrigin(0.5);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // violet
        textConfig.color = '#BD3DBA';
        this.add.text(game.config.width / 8 * 7 - borderUISize - borderPadding, game.config.height / 6 * 4 + borderUISize, 'PURPLE', textConfig).setOrigin(0.5);
        keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);

        // pink
        textConfig.color = '#FFAEC8';
        this.add.text(game.config.width / 8 * 1 + borderUISize + borderPadding, game.config.height / 6 * 5 + borderUISize, 'PINK', textConfig).setOrigin(0.5);
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

        // white
        textConfig.color = '#FFFFFF';
        this.add.text(game.config.width / 8 * 7 - borderUISize - borderPadding, game.config.height / 6 * 5 + borderUISize, 'WHITE', textConfig).setOrigin(0.5);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);


    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            console.log("red");
        }
        if (Phaser.Input.Keyboard.JustDown(keyO)) {
            console.log("orange");
        }
        if (Phaser.Input.Keyboard.JustDown(keyY)) {
            console.log("yellow");
        }
        if (Phaser.Input.Keyboard.JustDown(keyG)) {
            console.log("green");
        }
        if (Phaser.Input.Keyboard.JustDown(keyL)) {
            console.log("lightblue");
        }
        if (Phaser.Input.Keyboard.JustDown(keyB)) {
            console.log("blue");
        }
        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            console.log("darkblue");
        }
        if (Phaser.Input.Keyboard.JustDown(keyV)) {
            console.log("violet");
        }
        if (Phaser.Input.Keyboard.JustDown(keyP)) {
            console.log("pink");
        }
        if (Phaser.Input.Keyboard.JustDown(keyW)) {
            console.log("white");
        }

    }
}