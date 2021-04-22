/*
 * Oran Shadian, Rocket Patrol Mod
 * 4/21/21, 16 hours
 */
class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, direction) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.dir = direction;
        this.moveSpeed = game.settings.spaceshipSpeed * this.dir;
        this.points = pointValue;
    }

    update() {
        this.moveSpeed = game.settings.spaceshipSpeed * this.dir;
        this.x -= this.moveSpeed;

        if (this.x < -this.width && this.dir) {
            this.x = game.config.width;
        }

        if (this.x > game.config.width + this.width && this.dir == -1) {
            this.x = -this.width;
        }
    }

    reset() {
        this.x = game.config.width + 50;
        this.alpha = 1;
    }
}