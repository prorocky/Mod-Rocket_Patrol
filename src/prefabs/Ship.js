class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.points = pointValue;
    }

    update() {
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.x -= this.moveSpeed;

        if (this.x < -this.width) {
            this.x = game.config.width;
        }
    }

    reset() {
        this.x = game.config.width + 50;
        this.alpha = 1;
    }
}