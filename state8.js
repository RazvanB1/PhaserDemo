/**
 * Created by mbadea on 12/7/2018.
 */

demo.state8 = function(){};
demo.state8.prototype ={
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state8');

        addChangeStateEventListeners();
    },
    update: function(){}
}