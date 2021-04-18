class Mode extends Phaser.Scene {
    constructor() {
        super("modeScene");
    }

    create() {
        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '24px',
            backgroundColor: '#000',
            color: '#DEFACE',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        // title
        this.add.text(game.config.width / 2, borderUISize + borderPadding, 'ROCKET PATROL', textConfig).setOrigin(0.5);

        // directions
        this.add.text(game.config.width / 2, game.config.height / 4, 'Select the mode you would like to play.\nPress (1) or (2) to select or press (A)\nto learn more about the different modes.', textConfig).setOrigin(0.5);
        
        // list modes
        this.add.text(game.config.width / 2 - borderUISize, game.config.height / 6 * 3, '1)  Singleplayer', textConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2 - borderUISize, game.config.height / 6 * 4, '2)  Multiplayer ', textConfig).setOrigin(0.5);

        // define keys
        key1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        key2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(key1) && mode == 0) {
            mode = 1;
            this.scene.start('charSelectScene');
        }
        if (Phaser.Input.Keyboard.JustDown(key2) && mode == 0) {
            mode = 2;
            this.scene.start('charSelectScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyA) && mode == 0) {
            this.scene.start('aboutModesScene');
        }
    }
}