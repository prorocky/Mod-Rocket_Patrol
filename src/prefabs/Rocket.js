/*
 * Oran Shadian, Rocket Patrol Mod
 * 4/21/21, 16 hours
 */
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, playerNo) {
        super(scene, x, y, texture, frame);

        // add objects to existing scene
        scene.add.existing(this);

        // speed rocket moves at
        this.moveSpeed = 2;
        this.isFiring = false;
        this.mouseControl = false;
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
        if (this.num == 1) {
            if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
                this.mouseControl = !this.mouseControl;
            }
            if (this.mouseControl) {
                this.x = game.input.mousePointer.x;
            }

            if (keyA.isDown && !this.mouseControl) {
                this.x -= this.moveSpeed;
            }
            if (keyD.isDown && !this.mouseControl) {
                this.x += this.moveSpeed;
            }

            // rocket fire     
            if (!this.isFiring) {
                if (Phaser.Input.Keyboard.JustDown(keyW) && !this.mouseControl) {
                    this.isFiring = true;
                    this.sfxRocket.play();
                }
            }
        }
        

        // rocket controls P2 (left and right)
        if (this.num == 2) {
            if (keyLEFT.isDown) {
                this.x -= this.moveSpeed;
            }
            if (keyRIGHT.isDown) {
                this.x += this.moveSpeed;
            }
            // rocket fire
            if (Phaser.Input.Keyboard.JustDown(keyUP) && !this.isFiring) {
                this.isFiring = true;
                this.sfxRocket.play();
            }
        }
        // Make sure rocket stays in border of screen
        this.x = Phaser.Math.Clamp(this.x, borderUISize + borderPadding, game.config.width - borderUISize - borderPadding);
    }

    reset() {
        this.y = game.config.height - borderUISize - borderPadding;
        this.isFiring = false;
    }

    fire() {
        if (this.mouseControl && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();
        }
    }
}