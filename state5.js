/**
 * Created by mbadea on 12/7/2018.
 */

var r;

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
        r = game.add.tween(s2).to({x: 100, y: 0}, 1000, 'Elastic.easeOut');
        game.add.tween(s3).from({y: 1000}, 1500, 'Circ.easeOut', true);
        //1 arg - unde sa ajunga/plece, 2 arg - timp in care se parcurga, 3 - tipul de miscare, 4 arg - true porneste la incarcare, 5 arg - dealy, 6 arg - repeat de cate ori, 7 arg - yoyo
        //game.add.tween(s4.anchor).to({x: 1}, 1500, 'Linear', true, 1000, 2, true);
        game.add.tween(s4.anchor).to({x: 1}, 1500, 'Linear', true, 1000, false, true).loop(true);

        game.add.tween(s5).to({alpha: 0}, 1000, 'Bounce', true);

    },
    update: function(){}
}