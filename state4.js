/**
 * Created by mbadea on 12/7/2018.
 */

var sound;

demo.state4 = function(){};
demo.state4.prototype ={
    preload: function(){
        game.load.image('button1','assets/sprite/button1.png');
        game.load.image('button2','assets/sprite/button2.png');
        game.load.image('button3','assets/sprite/button3.png');
        game.load.audio('pops','assets/sounds/click_1+2.mp3');
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        addChangeStateEventListeners();

        sound = game.add.audio('pops');
        sound.addMarker('low',0,0.5);
        sound.addMarker('high', 0.5, 0.87);

        var b1 = game.add.button(100, 100, 'button1', function(){
            changeState(null,1);
        });

        var b2 = game.add.button(400, 400, 'button2', function(){
            changeState(null,2);
        });

        var b3 = game.add.button(700, 700, 'button3');
        b1.onInputDown.add(this.tint, b1);
        b2.onInputDown.add(this.tint, b2);
        b3.onInputDown.add(this.tint, b3);

        b1.onInputUp.add(this.untint, b1);
        b2.onInputUp.add(this.untint, b2);
        b3.onInputUp.add(this.untint, b3);
    },
    tint: function () {
        this.tint = 0xbbbbbb;
        sound.play('low');
    },
    untint: function () {
        this.tint = 0xffffff;
        sound.play('high');
    }
}