/**
 * Created by mbadea on 12/7/2018.
 */


demo.state2 = function(){};
demo.state2.prototype ={
    preload: function(){
        game.load.spritesheet('spider','assets/spritesheets/paianjen.png',152, 152, 180);
    },
    create: function(){
        game.stage.backgroundColor = '#80ff80';
        addChangeStateEventListeners();

        spider = game.add.sprite(centerX,centerY, 'spider');
        spider.anchor.x = 0.5;
        spider.anchor.y = 0.5;
        spider.scale.setTo(1,1);

        spider.animations.add('bounce');

        spider.animations.play('bounce', 20, true);


    },
    update: function() {

    }

}
