/*
 * Oran Shadian, Rocket Patrol Mod
 * 4/21/21, 16 hours
 */
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
        this.add.text(game.config.width / 2, game.config.height / 5, ' In singleplayer, you control your ship using \n (A) and (D) to move left/right and (W) to fire.\n If you press (SPACE) you can use your mouse \n to control your ship\'s horizontal movement \n and click the mouse to fire. Then press (SPACE) \n again to change back to keyboard controls.', textConfig).setOrigin(0.5);

        // about multiplayer
        this.add.text(game.config.width / 2, game.config.height / 2, ' In multiplayer, P1 controls their ship using \n (A) and (D) to move left/right and (W) to fire \n and P2 controls their ship using (←) and (→)\n to move left/right. Timer will not be extended\n when destroying an enemy ship.', textConfig).setOrigin(0.5);

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