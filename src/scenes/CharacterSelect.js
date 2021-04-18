class CharacterSelect extends Phaser.Scene {
    constructor() {
        super("charSelectScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', 'assets/blip_select12.wav');

        // load sprites
        this.load.image('rocket', 'assets/white_rocket.png');
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
            fontSize: '19px',
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
        this.playersSelected = 0;

        // directions
        this.add.text(game.config.width / 2, borderUISize + borderPadding, 'Type the first letter of a color to select that color.\nP1 goes first, players cannot select the same color.', textConfig).setOrigin(0.5);
        
        textConfig.fontSize = '30px';
        // color
        // text box for color
        // keyboard key to select color

        // red
        textConfig.color = colorCodes.red.hex;
        this.add.text(game.config.width / 8 * 1 + borderUISize + borderPadding, game.config.height / 6 * 1 + borderUISize, 'RED', textConfig).setOrigin(0.5);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        // orange
        textConfig.color = colorCodes.orange.hex;
        this.add.text(game.config.width / 8 * 7 - borderUISize - borderPadding, game.config.height / 6 * 1 + borderUISize, 'ORANGE', textConfig).setOrigin(0.5);
        keyO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);

        // yellow
        textConfig.color = colorCodes.yellow.hex;
        this.add.text(game.config.width / 8 * 1 + borderUISize + borderPadding, game.config.height / 6 * 2 + borderUISize, 'YELLOW', textConfig).setOrigin(0.5);
        keyY = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);

        // green
        textConfig.color = colorCodes.green.hex;
        this.add.text(game.config.width / 8 * 7 - borderUISize - borderPadding, game.config.height / 6 * 2 + borderUISize, 'GREEN', textConfig).setOrigin(0.5);
        keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);

        // light blue
        textConfig.color = colorCodes.light_blue.hex;
        this.add.text(game.config.width / 8 * 1 + borderUISize + borderPadding, game.config.height / 6 * 3 + borderUISize, 'LIGHT BLUE', textConfig).setOrigin(0.5);
        keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);

        // blue
        textConfig.color = colorCodes.blue.hex;
        this.add.text(game.config.width / 8 * 7 - borderUISize - borderPadding, game.config.height / 6 * 3 + borderUISize, 'BLUE', textConfig).setOrigin(0.5);
        keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);

        // dark blue
        textConfig.color = colorCodes.dark_blue.hex;
        this.add.text(game.config.width / 8 * 1 + borderUISize + borderPadding, game.config.height / 6 * 4 + borderUISize, 'DARK BLUE', textConfig).setOrigin(0.5);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // violet
        textConfig.color = colorCodes.violet.hex;
        this.add.text(game.config.width / 8 * 7 - borderUISize - borderPadding, game.config.height / 6 * 4 + borderUISize, 'VIOLET', textConfig).setOrigin(0.5);
        keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);

        // pink
        textConfig.color = colorCodes.pink.hex;
        this.add.text(game.config.width / 8 * 1 + borderUISize + borderPadding, game.config.height / 6 * 5 + borderUISize, 'PINK', textConfig).setOrigin(0.5);
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

        // white
        textConfig.color = colorCodes.white.hex;
        this.add.text(game.config.width / 8 * 7 - borderUISize - borderPadding, game.config.height / 6 * 5 + borderUISize, 'WHITE', textConfig).setOrigin(0.5);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);


    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            if (this.playersSelected == 0) {
                colorP1 = colorCodes.red.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            } else if (this.playersSelected && colorP1 != colorCodes.red.name) {
                colorP2 = colorCodes.red.name;
                this.playersSelected++;
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyO)) {
            if (this.playersSelected == 0) {
                colorP1 = colorCodes.orange.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            } else if (this.playersSelected && colorP1 != colorCodes.orange.name) {
                colorP2 = colorCodes.orange.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyY)) {
            if (this.playersSelected == 0) {
                colorP1 = colorCodes.yellow.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            } else if (this.playersSelected && colorP1 != colorCodes.yellow.name) {
                colorP2 = colorCodes.yellow.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyG)) {
            if (this.playersSelected == 0) {
                colorP1 = colorCodes.green.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            } else if (this.playersSelected && colorP1 != colorCodes.green.name) {
                colorP2 = colorCodes.green.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyL)) {
            if (this.playersSelected == 0) {
                colorP1 = colorCodes.light_blue.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            } else if (this.playersSelected && colorP1 != colorCodes.light_blue.name) {
                colorP2 = colorCodes.light_blue.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyB)) {
            if (this.playersSelected == 0) {
                colorP1 = colorCodes.blue.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            } else if (this.playersSelected && colorP1 != colorCodes.blue.name) {
                colorP2 = colorCodes.blue.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            if (this.playersSelected == 0) {
                colorP1 = colorCodes.dark_blue.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            } else if (this.playersSelected && colorP1 != colorCodes.dark_blue.name) {
                colorP2 = colorCodes.dark_blue.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyV)) {
            if (this.playersSelected == 0) {
                colorP1 = colorCodes.violet.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            } else if (this.playersSelected && colorP1 != colorCodes.violet.name) {
                colorP2 = colorCodes.violet.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyP)) {
            if (this.playersSelected == 0) {
                colorP1 = colorCodes.pink.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            } else if (this.playersSelected && colorP1 != colorCodes.pink.name) {
                colorP2 = colorCodes.pink.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyW)) {
            if (this.playersSelected == 0) {
                colorP1 = colorCodes.white.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            } else if (this.playersSelected && colorP1 != colorCodes.white.name) {
                colorP2 = colorCodes.white.name;
                this.playersSelected++;
                this.sound.play('sfx_select');
            }
        }
        if (this.playersSelected == mode) {
            this.scene.start('menuScene');
        }

    }
}