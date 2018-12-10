/**
 * Created by mbadea on 12/7/2018.
 */

var demo = {};
var centerX = 1500 / 2;
var centerY = 1000 / 2;
var spider;
var speeed = 6;

demo.state0 = function(){};
demo.state0.prototype ={
    preload: function(){
        //game.load.image('spider','assets/sprite/spryte.png');
        game.load.spritesheet('spider','assets/spritesheets/spiderSheet.png',150, 149 );
        game.load.image('fundal','assets/backgrounds/background_bun.png');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#f4d942';
        console.log('state0');
        game.world.setBounds(0, 0,2811, 460);
        //game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
        //game.input.keyboard.addKey(Phaser.Keyboard.ZERO).onDown.add(changeState, null, null, 0);

        //addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
        //unu este mai sus. AddKeyCallback face exact ce face unu de mai sus
        addChangeStateEventListeners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        var fundalBG = game.add.sprite(0, 0, 'fundal');
        spider = game.add.sprite(centerX,centerY, 'spider');
        spider.anchor.x = 0.5;
        spider.anchor.y = 0.5;
        spider.scale.setTo(1.5,1.5);

        game.physics.enable(spider);
        spider.body.collideWorldBounds = true;

        spider.animations.add('walk',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);

        game.camera.follow(spider);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);
    },
    update: function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            spider.x += speeed;
            spider.scale.setTo(1.5,1.5);
            spider.animations.play('walk', 15, true);
        }else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            spider.x -= speeed;
            spider.scale.setTo(-1.5,1.5);
            spider.animations.play('walk', 15, true);
        }
        else{
            spider.animations.stop('walk');
            spider.frame = 0;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            spider.y -= speeed;
            if(spider.y < 395){
                spider.y = 395;
            }
        }else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            spider.y += speeed;
        }
    }
}

function changeState(i, stateNum){
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners(){
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}