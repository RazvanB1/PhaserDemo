/**
 * Created by mbadea on 12/7/2018.
 */

demo.state1 = function(){};
demo.state1.prototype ={
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state1');
        //game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
        //game.input.keyboard.addKey(Phaser.Keyboard.ZERO).onDown.add(changeState, null, null, 0);
        addChangeStateEventListeners();
    },
    update: function(){}
}