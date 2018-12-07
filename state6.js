/**
 * Created by mbadea on 12/7/2018.
 */

demo.state6 = function(){};
demo.state6.prototype ={
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state6');

        addChangeStateEventListeners();
    },
    update: function(){}
}