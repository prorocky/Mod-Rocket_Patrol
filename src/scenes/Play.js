class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/sprites
        this.load.image('starfield', 'assets/starfield.png');

        // rocket sprites
        this.load.image('rocket_white', 'assets/white_rocket.png');
        this.load.image('rocket_red', 'assets/red_rocket.png');
        this.load.image('rocket_orange', 'assets/orange_rocket.png');
        this.load.image('rocket_yellow', 'assets/yellow_rocket.png');
        this.load.image('rocket_green', 'assets/green_rocket.png');
        this.load.image('rocket_blue', 'assets/blue_rocket.png');
        this.load.image('rocket_lightblue', 'assets/lightblue_rocket.png');
        this.load.image('rocket_darkblue', 'assets/darkblue_rocket.png');
        this.load.image('rocket_violet', 'assets/violet_rocket.png');
        this.load.image('rocket_pink', 'assets/pink_rocket.png');

        this.load.image('spaceship', 'assets/spaceship.png');
        this.load.image('flipped_spaceship', 'assets/flipped_spaceship.png');
        this.load.spritesheet('explosion', 'assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
    
        // load audio
        this.load.audio('sfx_select', 'assets/blip_select12.wav');
        this.load.audio('sfx_explosion', 'assets/explosion38.wav');
        this.load.audio('sfx_rocket', 'assets/rocket_shot.wav');
    
    }

    create() {
        // starfield
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

        // P1 rocket
        let assetName = 'rocket_' + colorP1;
        this.p1Rocket = new Rocket(
            this,
            game.config.width / (mode == 1 ? 2 : 4),
            game.config.height - borderUISize - borderPadding,
            assetName,
            0,
            1
        ).setOrigin(0.5, 0);

        // P2 rocket
        if (mode == 2) {
            assetName = 'rocket_' + colorP2;
            this.p2Rocket = new Rocket(
                this,
                game.config.width / 4 * 3,
                game.config.height - borderUISize - borderPadding,
                assetName,
                0,
                2
            ).setOrigin(0.5, 0);
        }

        let rng = Math.floor(Math.random() * 2);

        // enemy ship1
        this.ship1 = new Ship(
            this,
            game.config.width + borderUISize*6, 
            borderUISize*4, 
            (rng ? 'spaceship' : 'flipped_spaceship'), 
            0, 
            30,
            (rng ? 1 : -1)
        ).setOrigin(0, 0);

        rng = Math.floor(Math.random() * 2);

        // enemy ship2
        this.ship2 = new Ship(
            this,
            game.config.width + borderUISize*3,
            borderUISize*5 + borderPadding*2,
            (rng ? 'spaceship' : 'flipped_spaceship'),
            0,
            20,
            (rng ? 1 : -1)
        ).setOrigin(0, 0);

        rng = Math.floor(Math.random() * 2);

        // enemy ship3
        this.ship3 = new Ship(
            this,
            game.config.width,
            borderUISize*6 + borderPadding*4,
            (rng ? 'spaceship' : 'flipped_spaceship'),
            0,
            10,
            (rng ? 1 : -1)
        ).setOrigin(0, 0);


        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2,0x00FF00).setOrigin(0, 0);
        
        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        
        // keyboard input
        // Player 1 controls
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // Player 2 controls
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        // reset button
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        // explosion animation
        this.anims.create({
            key: 'explosion',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            frameRate: 30
        });

        // initialize score
        this.p1Score = 0;
        if (mode == 2) {
            this.p2Score = 0;
        }

        // display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding * 2, this.p1Score, scoreConfig); 
        if (mode == 2) {
            this.scoreRight = this.add.text(game.config.width / 4 * 3 + borderPadding, borderUISize + borderPadding * 2, this.p2Score, scoreConfig); 
        }

        this.gameOver = false;

       scoreConfig.fixedWidth = 0;

        this.clock = this.time.delayedCall(30000, () => {
            game.settings.spaceshipSpeed += 2;
        }, null, this);

        // 60-second timer
        let timer = this.time.addEvent({
            
        })

        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            this.add.text(game.config.width / 2, game.config.height / 2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width / 2, game.config.height / 2 + 64, 'Press (R) to Restart or ← for menu', scoreConfig).setOrigin(0.5);
            this.gameOver = true;
        }, null, this);
    }

    update() {
        // check for key input during restart
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart();
        }

        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }

        this.starfield.tilePositionX -= 4;
        if (!this.gameOver) {
            this.p1Rocket.update();
            if (mode == 2) {
                this.p2Rocket.update();
            }
            this.ship1.update();
            this.ship2.update();
            this.ship3.update();
        }
        

        // collision code
        if (this.checkCollision(this.p1Rocket, this.ship1)) {
            this.p1Rocket.reset();
            // score add and repaint
            this.p1Score += this.ship1.points;
            this.scoreLeft.text = this.p1Score;
            this.shipExplode(this.ship1);
        }
        if (this.checkCollision(this.p1Rocket, this.ship2)) {
            this.p1Rocket.reset();
            // score add and repaint
            this.p1Score += this.ship2.points;
            this.scoreLeft.text = this.p1Score;
            this.shipExplode(this.ship2);
        }
        if (this.checkCollision(this.p1Rocket, this.ship3)) {
            this.p1Rocket.reset();
            // score add and repaint
            this.p1Score += this.ship3.points;
            this.scoreLeft.text = this.p1Score;
            this.shipExplode(this.ship3);
        }

        if (mode == 2) {
            if (this.checkCollision(this.p2Rocket, this.ship1)) {
                this.p2Rocket.reset();
                // score add and repaint
                this.p2Score += this.ship1.points;
                this.scoreRight.text = this.p2Score;
                this.shipExplode(this.ship1);
            }
            if (this.checkCollision(this.p2Rocket, this.ship2)) {
                this.p2Rocket.reset();
                // score add and repaint
                this.p2Score += this.ship2.points;
                this.scoreRight.text = this.p2Score;
                this.shipExplode(this.ship2);
            }
            if (this.checkCollision(this.p2Rocket, this.ship3)) {
                this.p2Rocket.reset();
                // score add and repaint
                this.p2Score += this.ship3.points;
                this.scoreRight.text = this.p2Score;
                this.shipExplode(this.ship3);
            }
        }
    }

    checkCollision(rocket, ship) {
        if (rocket.x < ship.x + ship.width &&
        rocket.x + rocket.width > ship.x &&
        rocket.y < ship.y + ship.height &&
        rocket.y + rocket.height > ship.y) {
            return true;
        }
        return false;
    }

    shipExplode(ship) {
        // make ship invisible
        ship.alpha = 0;

        // create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explosion');
        boom.on('animationcomplete', () => {
            ship.reset();
            boom.destroy();
        });

        // play audio for explosion
        this.sound.play('sfx_explosion');
    }
}