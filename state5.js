/**
 * Created by mbadea on 12/7/2018.
 */

var r = 0;

demo.state5 = function(){};
demo.state5.prototype ={
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        addChangeStateEventListeners();

        s1 = game.add.sprite(50,100,'spider');
        s2 = game.add.sprite(350,100,'spider');
        s3 = game.add.sprite(650,100,'spider');
        s4 = game.add.sprite(950,100,'spider');
        s5 = game.add.sprite(1250,100,'spider');

        game.add.tween(s1).to({y: 400}, 2000, 'Linear', true);
        game.add.tween(s1).to({y: 400}, 2000, 'Linear', true);

    },
    update: function(){}
}