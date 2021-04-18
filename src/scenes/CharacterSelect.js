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
        this.p1Selected = 0;
        this.p2Selected = 0;

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
            if (!this.p1Selected) {
                colorP1 = "red";
                this.p1Selected = 1;
                this.sound.play('sfx_select');
            } else if (!this.p2Selected && colorP1 != "red") {
                colorP2 = "red";
                this.p2Selected = 1;
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyO)) {
            if (!this.p1Selected) {
                colorP1 = "orange";
                this.p1Selected = 1;
                this.sound.play('sfx_select');
            } else if (!this.p2Selected && colorP1 != "orange") {
                colorP2 = "orange";
                this.p2Selected = 1;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyY)) {
            if (!this.p1Selected) {
                colorP1 = "yellow";
                this.p1Selected = 1;
                this.sound.play('sfx_select');
            } else if (!this.p2Selected && colorP1 != "yellow") {
                colorP2 = "yellow";
                this.p2Selected = 1;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyG)) {
            if (!this.p1Selected) {
                colorP1 = "green";
                this.p1Selected = 1;
                this.sound.play('sfx_select');
            } else if (!this.p2Selected && colorP1 != "green") {
                colorP2 = "green";
                this.p2Selected = 1;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyL)) {
            if (!this.p1Selected) {
                colorP1 = "lightblue";
                this.p1Selected = 1;
                this.sound.play('sfx_select');
            } else if (!this.p2Selected && colorP1 != "lightblue") {
                colorP2 = "lightblue";
                this.p2Selected = 1;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyB)) {
            if (!this.p1Selected) {
                colorP1 = "blue";
                this.p1Selected = 1;
                this.sound.play('sfx_select');
            } else if (!this.p2Selected && colorP1 != "blue") {
                colorP2 = "blue";
                this.p2Selected = 1;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            if (!this.p1Selected) {
                colorP1 = "darkblue";
                this.p1Selected = 1;
                this.sound.play('sfx_select');
            } else if (!this.p2Selected && colorP1 != "darkblue") {
                colorP2 = "darkblue";
                this.p2Selected = 1;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyV)) {
            if (!this.p1Selected) {
                colorP1 = "violet";
                this.p1Selected = 1;
                this.sound.play('sfx_select');
            } else if (!this.p2Selected && colorP1 != "violet") {
                colorP2 = "violet";
                this.p2Selected = 1;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyP)) {
            if (!this.p1Selected) {
                colorP1 = "pink";
                this.p1Selected = 1;
                this.sound.play('sfx_select');
            } else if (!this.p2Selected && colorP1 != "pink") {
                colorP2 = "pink";
                this.p2Selected = 1;
                this.sound.play('sfx_select');
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyW)) {
            if (!this.p1Selected) {
                colorP1 = "white";
                this.p1Selected = 1;
                this.sound.play('sfx_select');
            } else if (!this.p2Selected && colorP1 != "white") {
                colorP2 = "white";
                this.p2Selected = 1;
                this.sound.play('sfx_select');
            }
        }
        if (this.p1Selected && this.p2Selected) {
            this.scene.start('menuScene');
        }

    }
}