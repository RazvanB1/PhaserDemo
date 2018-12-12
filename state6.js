/**
 * Created by mbadea on 12/7/2018.
 */

var accel = 400;
var platform;
var platformGroup;

demo.state6 = function(){};
demo.state6.prototype ={
    preload: function(){
        game.load.image('platform', 'assets/sprite/platform.png')
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        addChangeStateEventListeners();

        spider = game.add.sprite(centerX, 500,'spider');
        platform = game.add.sprite(0,800,'platform');

        platformGroup = game.add.group();
        platformGroup.create(650, 400,'platform');
        platformGroup.create(1300, 400,'platform');

        //sau asa game.physics.enable([spider,platform])
        game.physics.enable(spider);
        game.physics.enable(platform);
        game.physics.enable(platformGroup);

        //dupa ce are physics ii dam graviatie in jos(adica pe y) de 500
        spider.body.gravity.y = 500;
        spider.body.bounce.y = 0.3; // cand ajunge la margine are bouce effect
        spider.body.drag.x = 400; // ca sa se opreasca din miscare
        spider.body.collideWorldBounds = true;
        platform.body.immovable = true; //elementul este fix
        platformGroup.setAll('body.immovable',true);

    },
    update: function(){
        //game.physics.arcade.collide(spider,platform, platformGroup); sau ca mai jos
        game.physics.arcade.collide(spider,[platform, platformGroup]);
        if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            spider.body.acceleration.x = -accel;
        }else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            spider.body.acceleration.x = accel;
        }else {
            spider.body.acceleration.x = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            spider.body.velocity.y = -300;
        }
    }
}