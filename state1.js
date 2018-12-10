/**
 * Created by mbadea on 12/7/2018.
 */

var cursors;
var vel = 500;

demo.state1 = function(){};
demo.state1.prototype ={
    preload: function(){},
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#DDDDDD';
        //game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
        //game.input.keyboard.addKey(Phaser.Keyboard.ZERO).onDown.add(changeState, null, null, 0);
        addChangeStateEventListeners();

        spider = game.add.sprite(200 ,200, 'spider');
        game.physics.enable(spider);

        cursors = game.input.keyboard.createCursorKeys();

    },
    update: function(){
        if(cursors.up.isDown){
            spider.body.velocity.y = -vel;
        }
        else if(cursors.down.isDown){
            spider.body.velocity.y = vel;
        }
        else{
            spider.body.velocity.y = 0;
        }

        if(cursors.left.isDown){
            spider.body.velocity.x = -vel;
        }
        else if(cursors.right.isDown){
            spider.body.velocity.x = vel;
        } else{
            spider.body.velocity.x = 0;
        }

    }
}