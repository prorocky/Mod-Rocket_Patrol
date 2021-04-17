class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, playerNo) {
        super(scene, x, y, texture, frame);

        // add objects to existing scene
        scene.add.existing(this);

        // speed rocket moves at
        this.moveSpeed = 2;
        this.isFiring = false;
        this.num = playerNo;

        // add rocket sfx
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }

    update() {
        if (this.isFiring) {
            this.y -= this.moveSpeed;

            if (this.y < borderUISize * 3) {
                this.y = game.config.height - borderUISize - borderPadding;
                this.isFiring = false;
            }
        }

        // rocket controls P1 (left and right)
        if (this.num == 1 && keyA.isDown) {
            this.x -= this.moveSpeed;
        }
        if (this.num == 1 && keyD.isDown) {
            this.x += this.moveSpeed;
        }
        // rocket fire
        if (this.num == 1 && Phaser.Input.Keyboard.JustDown(keyW) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();
        }

        // rocket controls P2 (left and right)
        if (this.num == 2 && keyLEFT.isDown) {
            this.x -= this.moveSpeed;
        }
        if (this.num == 2 && keyRIGHT.isDown) {
            this.x += this.moveSpeed;
        }
        // rocket fire
        if (this.num == 2 && Phaser.Input.Keyboard.JustDown(keyUP) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();
        }

        // Make sure rocket stays in border of screen
        this.x = Phaser.Math.Clamp(this.x, borderUISize + borderPadding, game.config.width - borderUISize - borderPadding);
    }

    reset() {
        this.y = game.config.height - borderUISize - borderPadding;
        this.isFiring = false;
    }
}