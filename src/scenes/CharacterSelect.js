class CharacterSelect extends Phaser.Scene {
    constructor() {
        super("charSelectScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', 'assets/blip_select12.wav');

        // load sprites
        this.load.image('rocket', 'assets/rocket.png');
        this.load.image('rocket_red', 'assets/red_rocket.png');
        this.load.image('rocket_orange', 'assets/orange_rocket.png');
        this.load.image('rocket_yellow', 'assets/yellow_rocket.png');
        this.load.image('rocket_green', 'assets/green_rocket.png');
        this.load.image('rocket_lightblue', 'assets/lightblue_rocket.png');
        this.load.image('rocket_blue', 'assets/blue_rocket.png');
        this.load.image('rocket_darkblue', 'assets/darkblue_rocket.png');
        this.load.image('rocket_purple', 'assets/purple_rocket.png');
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
        // directions
        this.add.text(game.config.width / 2, borderUISize + borderPadding, 'P1 use (A) / (D) to choose a color\nP2 use (←) / (→) to choose a color', textConfig).setOrigin(0.5);
        
        // red
        textConfig.color = '#FF0000';
        this.add.text(game.config.width / 8 * 1 + borderUISize + borderPadding, game.config.height / 6 * 1 + borderUISize, 'RED', textConfig).setOrigin(0.5);

        // orange
        textConfig.color = '#FF7f27';
        this.add.text(game.config.width / 8 * 7 - borderUISize - borderPadding, game.config.height / 6 * 1 + borderUISize, 'ORANGE', textConfig).setOrigin(0.5);

        // yellow
        textConfig.color = '#FFF200';
        this.add.text(game.config.width / 8 * 1 + borderUISize + borderPadding, game.config.height / 6 * 2 + borderUISize, 'YELLOW', textConfig).setOrigin(0.5);

        // green
        textConfig.color = '#0ED145';
        this.add.text(game.config.width / 8 * 7 - borderUISize - borderPadding, game.config.height / 6 * 2 + borderUISize, 'GREEN', textConfig).setOrigin(0.5);

        // light blue
        textConfig.color = '#8CFFFB';
        this.add.text(game.config.width / 8 * 1 + borderUISize + borderPadding, game.config.height / 6 * 3 + borderUISize, 'LIGHT BLUE', textConfig).setOrigin(0.5);

        // blue
        textConfig.color = '#00A8F3';
        this.add.text(game.config.width / 8 * 7 - borderUISize - borderPadding, game.config.height / 6 * 3 + borderUISize, 'BLUE', textConfig).setOrigin(0.5);

        // dark blue
        textConfig.color = '#0D01F6';
        this.add.text(game.config.width / 8 * 1 + borderUISize + borderPadding, game.config.height / 6 * 4 + borderUISize, 'DARK BLUE', textConfig).setOrigin(0.5);

        // purple
        textConfig.color = '#BD3DBA';
        this.add.text(game.config.width / 8 * 7 - borderUISize - borderPadding, game.config.height / 6 * 4 + borderUISize, 'PURPLE', textConfig).setOrigin(0.5);

        // pink
        textConfig.color = '#FFAEC8';
        this.add.text(game.config.width / 8 * 1 + borderUISize + borderPadding, game.config.height / 6 * 5 + borderUISize, 'PINK', textConfig).setOrigin(0.5);

        // white
        textConfig.color = '#FFFFFF';
        this.add.text(game.config.width / 8 * 7 - borderUISize - borderPadding, game.config.height / 6 * 5 + borderUISize, 'WHITE', textConfig).setOrigin(0.5);

    }
}