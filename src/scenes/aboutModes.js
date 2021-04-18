class aboutModes extends Phaser.Scene {
    constructor() {
        super("aboutModesScene");
    }

    create() {
        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '22px',
            backgroundColor: '#000',
            color: '#DEFACE',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        // about singleplayer
        this.add.text(game.config.width / 2, game.config.height / 22 + borderUISize + borderPadding, ' In singleplayer, you control your ship using \n (A) and (D) to move left/right and (W) to fire.\n You also have access to a homing missle which\n you fire with (Left Mouse Button) and control\n the direction with your cursor however you will\n not be able to move while aiming the missle.', textConfig).setOrigin(0.5);

        // about multiplayer
        this.add.text(game.config.width / 2, game.config.height / 3 + borderUISize + borderPadding, ' In multiplayer, P1 controls their ship using \n (A) and (D) to move left/right and (W) to fire \n and P2 controls their ship using (←) and (→)\n to move left/right.', textConfig).setOrigin(0.5);

        // go back to mode selection
        this.add.text(game.config.width / 2, game.config.height - borderUISize - borderPadding, 'Press (Esc) to go back to \nthe Mode Selection screen', textConfig).setOrigin(0.5);

        // define keys
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyESC)) {
            this.scene.start('modeScene');
        }
    }

}